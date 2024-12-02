<?php
/**
 * File per la definizione della funzione di calldback
 * Version: 1.0.0
 * Text Domain:       format-advq-ep
  *
 * @package create-format-advq-ep
 */

namespace FM_ADVQ_EP_Blocks\build;

 //funzione per debug
if (!function_exists('write_log')) {

    function write_log($log) {
        if (true === WP_DEBUG) {
            if (is_array($log) || is_object($log)) {
                error_log(print_r($log, true));
            } else {
                error_log($log);
            }
        }
    }

}

 
class  FM_RenderBlock {
    
	
	public $lunghezza_riassunto=55;  //default di wp
	private $reset_riassunto='NO';

	private $currentpost='';
	private $loop_counter=0;

	private $parametri_blocco='';
	private $query_interna='';
	private $serve_filtro_riassunto='FORSE';
   
   //funzione richiamata come callback da gutenberg
   //attenzione genera toc solo per header h2 che hanno ancora impostata
	public function FM_render_block_callback( $block_attributes, $content ) {
		
		$this->parametri_blocco=$block_attributes;

		
		
		//Gestione generazione query in base a paramentri del blocco 
		//se paramentro non è settato lo imposto su query di wp
		if (!isset ($this->parametri_blocco['TipoQuery'])){
			$this->parametri_blocco['TipoQuery']='wp-query';
		}
		$this->FM_genera_query();
		//Fine gestione generazione query
		
		//Gestione Visualizzazione
		$html_pagination_return='';
		$html='';
		//se la query ha dei post decido che visualizzazione usare
		if ( $this->query_interna->have_posts() ) { 
			//se visualizzazione tramite template esterno gestisco il template
			if ((isset($this->parametri_blocco['ExtView'])) && ($this->parametri_blocco['ExtView']===true)){
				$html=$this->FM_gestisci_template_esterno();
			}
			//altrimenti uso visualizzazione con parametri del blocco	
			else {
				$html=$this->FM_gestisci_visualizzazione_da_blocco();
			}
			
	
		}
		//se non ho post verifico se ho scelto di non fare la query
		elseif ($this->parametri_blocco['TipoQuery']=='no-query'){
			$html=$this->FM_gestisci_template_esterno();
		}
		//se non ho post	
		else{
			$html = '<div>No posts</div>';
		}
		//Fine scelta Visualizzazione
		

		//verifico se dopo la visualizzazione devo resettare il riassunto
		//eventualmente resetto filtro riassunto
		if ($this->reset_riassunto=='YES'){
			remove_filter( 'excerpt_length', array($this,'FM_filtro_riassunto'), 999 );
		}		
	
	   return($html);
   
	}
	
	//funzione per impostare filtro per riassunto
	private function FM_setta_lunghezza_riassunto(){
		//vedo se devo impostare lunghezza del riassunto o se la lunghezza rimane standard
		if ((isset ($this->parametri_blocco['excerptLength'])) && ($this->parametri_blocco['excerptLength']!='') && ($this->parametri_blocco['excerptLength']!=$this->lunghezza_riassunto)){
			$this->lunghezza_riassunto = $this->parametri_blocco['excerptLength'];
			$this->reset_riassunto='YES';
			add_filter( 'excerpt_length', array($this,'FM_filtro_riassunto'), 999 );
		}
		//se comunque ho fatto i controlli imposto variabile per non ripetere loop ogni volta
		else {
			$this->serve_filtro_riassunto='NO';
		}
	}
	
	//funzione per settare la lunghezza del riassunto
	 public function FM_filtro_riassunto($length){
		return ($this->lunghezza_riassunto);
		 
	 }
	 
	 //funzione per generare query wp in base alle impostazioni del blocco
	 private function FM_genera_query(){
		 //parametro per gestione paginazione
		  $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
		 
		 //imposto array per parametri query
		 $arg_query=array();
		 
		 //aggiungo eventuale paginazione 
		if ( $paged) {
			$arg_query['paged'] = $paged;
		}
		
		//se non devo usare nessuna query ne genero una vuota per sicurezza, caso mai venisse richiamato un template che richiede query
		 if ($this->parametri_blocco['TipoQuery']=='no-query'){
			 $arg_query['post__in'] = array( 0 );
			 $this->query_interna = new \WP_Query( $arg_query );
			 
		 }
		 //altrimenti vedo se devo usare query di wp
		 elseif ($this->parametri_blocco['TipoQuery']=='wp-query'){
			 //se uso quella di sistema controllo non sia vuota (ad esempio perchè sono nell'editor)
			 global $wp_query;
			 if ((empty($wp_query->query)) ||(is_single()) || (is_page())){
				//aggiungo numero di post
				if ((isset($this->parametri_blocco['postsToShow'])) && ($this->parametri_blocco['postsToShow'] !="")){
					$postperpage = $this->parametri_blocco['postsToShow'];
				 }
				 else{
					$postperpage =get_option( 'posts_per_page' );
				 } 
				$arg_query = array(
					'post_type'        => 'post',
					'posts_per_page' => $postperpage,
				);
				$this->query_interna = new \WP_Query( $arg_query );
			  }
			 else {
				$this->query_interna = $wp_query;                                 
			 }
		 }
		 //oppure se devo usare query custom
		 elseif ($this->parametri_blocco['TipoQuery']=='custom-query'){
			//controllo se la query è di tipo simple o advanced
			if (( $this->parametri_blocco['queryTypeAdvanced']) && (isset( $this->parametri_blocco['queryFreeValue'] )) && ( $this->parametri_blocco['queryFreeValue'] !="" )) {
				//setto il nome del file json che contiene la lista dei parametri che richiedono un array in input
				//attenzione il file è autogenerato da webpack.config
				$nome_file_json="array_query_param.json";
			  
				//importo il file json con le info sui parametri per la query
				$strJsonParQuery = file_get_contents (plugin_dir_path(__FILE__)."/".$nome_file_json);
				//lo converto in un array
				$array_ParQuery = json_decode($strJsonParQuery, true);
				$array_ParQuery = explode (",", rtrim($array_ParQuery['ListaArray'], ','));

				$lista_parametri_query = $this->parametri_blocco['queryFreeValue'];
				foreach ($lista_parametri_query as $parametro => $valore){
					
					//controllo di avere un valore diverso da nullo
					if ( !empty($valore)){
					   //controllo se il parametro è fra quelli che richiedono un array come valore
		   			   if (in_array ($parametro, $array_ParQuery)){
						  //controllo se ho passato una stringa lo converto in un array
						  if (is_string($valore)){
							 $valore = explode (",", $valore);
						  }   
					   }
					   //se il parametro richiede una stringa 
					   else {
						  //controllo se ho passato un array lo converto in stringa
						  if (is_array($valore)){
							 $valore = implode (",", $valore);
						  }
					   }
					}   
				
				}
				//aggiungo il numero di post per page da visualizzare
				if ((isset($this->parametri_blocco['postsToShow'])) && ($this->parametri_blocco['postsToShow'] !="")){
					$postperpage = $this->parametri_blocco['postsToShow'];
				 }
				 else{
					$postperpage =get_option( 'posts_per_page' );
				 } 
				
				 $arg_query['posts_per_page'] = $postperpage;
			}
			elseif (!$this->parametri_blocco['queryTypeAdvanced']){   
				//imposto il valore degli id dei post ... se è impostato l'attributo
				if ((isset($this->parametri_blocco['postID'])) && ($this->parametri_blocco['postID'] !="")){
					$post_ID_value =  explode(',',$this->parametri_blocco['postID']);
					$arg_query['post__in']=$post_ID_value;
				}
				//imposto il valore delle categorie ... 
				if ( isset( $this->parametri_blocco['categories'] ) ) {
					$arg_query['category__in'] = array_column( $this->parametri_blocco['categories'], 'id' );
				}
				 
				//imposto autore
				if ( isset( $this->parametri_blocco['selectedAuthor'] ) ) {
					$arg_query['author'] = $this->parametri_blocco['selectedAuthor'];
				}
				 
				//SE NON HO INSERITO gli id dei post da cercare setto il numero di post da cercare
				if ((!isset($this->parametri_blocco['postID'])) || ($this->parametri_blocco['postID'] =="")){
					$arg_query['posts_per_page'] = $this->parametri_blocco['postsToShow'];
				 }
				 
				 
				 //aggiungo parametri di ordinamento alla query ... se non sono i valori di default:
				 // order -> default è DESC
				 // orderby -> default è date
				 if ($this->parametri_blocco['order'] != 'DESC'){
					$arg_query['order'] = $this->parametri_blocco['order'];
				 }      
				 if ($this->parametri_blocco['orderBy'] != 'date'){
					$arg_query['orderby'] = $this->parametri_blocco['orderBy'];
				 }
			  }
			  else {
				 return ('Please select parameters');
			  }
		
		  $this->query_interna = new \WP_Query( $arg_query );	 
			 
		 } //fine gestione query custom
		 
		 //reset della query - forse va messo subito prima dello spintf finale
		 wp_reset_postdata();
		 
	 }
	 
	 //funzione per gestire template esterno
	 private function FM_gestisci_template_esterno(){
		 $html_return='';
		  //controllo se ho un valore impostato per la visualizzazione altrimenti lo imposto
		 if ((!isset($this->parametri_blocco['Visualizzazione'])) || ($this->parametri_blocco['Visualizzazione'] =='')){
			$this->parametri_blocco['Visualizzazione']= WP_PLUGIN_DIR .'/format-adv-query-ext-pattern/fm_advq_patterns/ViewDefault.json';
		 }
		 //verifico se il file esiste
		 if ( file_exists( $this->parametri_blocco['Visualizzazione']) ){
			//verifico se devo usare template da file json
			if ( strtolower(pathinfo($this->parametri_blocco['Visualizzazione'],PATHINFO_EXTENSION ))=='json'){
				 $strJsonData = file_get_contents ( $this->parametri_blocco['Visualizzazione']);
				//lo converto in un array
				 $array_JsonTemplate = json_decode($strJsonData, true);
				 //controllo di avere il json, restituisce null se ci sono stati errori di decodifica
				 if ($array_JsonTemplate){
					//richiamo funzione esterna per visualizzazione
					$html_return = $this->FM_Visualizzazione_da_template_json ($array_JsonTemplate);
				 }
				 else {
					 $html_return = $this->FM_gestisci_errori ('errore_apertura_json_template');
				 }
			}
			// o se devo usare template da file php
			elseif ( strtolower(pathinfo($this->parametri_blocco['Visualizzazione'],PATHINFO_EXTENSION ))=='php'){

				//includo il file php esterno 
				include_once ($this->parametri_blocco['Visualizzazione']);
				
				//recupero il nome della funzione, deve essere uguale al nome del File
				$nome_funzione= pathinfo($this->parametri_blocco['Visualizzazione'],PATHINFO_FILENAME);
				//richiamo la funzione dal php esterno passando la query
				$html_return = $nome_funzione($this->query_interna);
			}	
			
		}
		//se file non esiste gestisco errore
		else {
			 //richiamo funzione gestione errori
			 $html_return = $this->FM_gestisci_errori ('errore_file_template_non_esiste');
		}	

		return ($html_return);
	 }
	 
	 
	 //funzione per gestire visualizzazione con parametri del blocco
	 private function FM_gestisci_visualizzazione_da_blocco(){
		 $html='';
		 $html_return='';
		 $html_pagination_return='';
		 
		 //vedo se devo impostare lunghezza del riassunto... se va visualizzato
		 if ((isset ($this->parametri_blocco['displayPostContent'])) && ($this->parametri_blocco['displayPostContent'])) {
			//verifico se devo impostare lunghezza riassunto o se gi� fatto almeno il controllo
		    //reset_riassunto diventa si se ho impostato filtro. serve_filtro_riassunto diventa NO se cmq ho fatto i controlli ma la lunghezza � standard
			if ( ($this->reset_riassunto=='NO') && ($this->serve_filtro_riassunto=='FORSE') ){
				$this->FM_setta_lunghezza_riassunto();
			}
	   }
		 
		 
		 while ( $this->query_interna->have_posts() ) {
			 $this->query_interna->the_post();
			 $post = $this->query_interna->post->ID;   
			 $link_post = get_permalink () ;
			 $titolo_post = get_the_title();
			 
			 $html.='<li>';
			 
			  if ( $this->parametri_blocco['displayFeaturedImage'] && has_post_thumbnail( $post ) ) {
				$image_style = '';
				if ( isset( $this->parametri_blocco['featuredImageSizeWidth'] ) ) {
				   $image_style .= sprintf( 'max-width:%1$spx;', $this->parametri_blocco['featuredImageSizeWidth'] );
				}
				if ( isset( $this->parametri_blocco['featuredImageSizeHeight'] ) ) {
				   $image_style .= sprintf( 'max-height:%1$spx;', $this->parametri_blocco['featuredImageSizeHeight'] );
				}
				
				$image_classes = 'wp-block-format-blocks-format-custom-query-query__featured-image';
				if ( isset( $this->parametri_blocco['featuredImageAlign'] ) ) {
				   $image_classes .= ' align' . $this->parametri_blocco['featuredImageAlign'];
				}
				
				$image_div_style="";
				if ( isset( $this->parametri_blocco['featuredImageBgColor'] ) ) {
				   $image_div_style .= sprintf( 'background-color:%1$s;', $this->parametri_blocco['featuredImageBgColor'] );
				}   
				
				$featured_image = get_the_post_thumbnail(
				   $post,
				   $this->parametri_blocco['featuredImageSizeSlug'],
				   array(
					  'style' => esc_attr( $image_style ),
				   )
				);
				if ( $this->parametri_blocco['addLinkToFeaturedImage'] ) {
				   $featured_image = sprintf(
					  '<a href="%1$s" aria-label="%2$s">%3$s</a>',
					  esc_url( $link_post ),
					  esc_attr( $titolo_post ),
					  $featured_image
				   );
				}
				$html .= sprintf(
				   '<div class="%1$s" style="%2$s">%3$s</div>',
				   esc_attr( $image_classes ),
				   esc_attr( $image_div_style ),
				   $featured_image
				);
			 }       
			 
			 $title_classes = 'wp-block-format-blocks-format-custom-query-query__title';
			 if ( isset( $this->parametri_blocco['postTitleAlign'] ) ) {
				$title_classes .= ' textalign-' . $this->parametri_blocco['postTitleAlign'];
			 }
			 
			 $title_div_style="";
			 if ( isset( $this->parametri_blocco['postTitleBgColor'] ) ) {
				$title_div_style .= sprintf( 'background-color:%1$s;', $this->parametri_blocco['postTitleBgColor'] );
			 }  
			 
			 $title_tag_apertura="";
			 $title_tag_chiusura="";
			 if (( isset( $this->parametri_blocco['postTitleFormat'] ) ) && ( $this->parametri_blocco['postTitleFormat'] != "p")) {
				$title_tag_apertura = "<".$this->parametri_blocco['postTitleFormat'].">" ;
				$title_tag_chiusura = "</".$this->parametri_blocco['postTitleFormat'].">" ;
			 } 
			 
			 
			 $html .= sprintf(
				'<div class="%1$s" style="%2$s">%3$s<a class="wp-block-format-blocks-format-custom-query-query__post-title" href="%4$s">%5$s</a>%6$s</div>',
				$title_classes,
				esc_attr( $title_div_style),
				$title_tag_apertura,
				esc_url( $link_post ),
				$titolo_post,
				$title_tag_chiusura
			 );
			 
			 
			 
			 if ( isset( $this->parametri_blocco['displayPostContent'] ) && $this->parametri_blocco['displayPostContent']) {
				
				$post_content_div_style="";
				if ( isset( $this->parametri_blocco['postContentBgColor'] ) ) {
				   $post_content_div_style .= sprintf( 'background-color:%1$s;', $this->parametri_blocco['postContentBgColor'] );
				} 

				$trimmed_excerpt = get_the_excerpt( $post );

				if ( post_password_required( $post ) ) {
				   $trimmed_excerpt = __( 'This content is password protected.' );
				}

				$html .= sprintf(
				   '<div class="wp-block-format-blocks-format-custom-query-query__post-excerpt" style="%2$s">%1$s</div>',
				   $trimmed_excerpt,
				   $post_content_div_style
				);
			 }
		  $html .="</li>";
		  }
		  
		  //aggiungo eventuale paginazione
		  if ( isset( $this->parametri_blocco['displayPagination'] ) && $this->parametri_blocco['displayPagination']) {
				$html_pagination_return ='<div class="wp-block-column FM-blocks-adv-query-pagination" style="flex-basis:100%">';
				$html_pagination_return .= paginate_links( array(
					'total' => $this->query_interna->max_num_pages,
					'mid_size' => 2,
					'prev_text' => __( '« prev ' ),
					'next_text' => __( ' » next'),
				) );
			$html_pagination_return .='</div>';	
		 }
		  
		 //aggiungo html per il blocco ed eventuale paginazione
		 //generazione output finale
		 $class = 'fm-advq-list';
		 $style='';

		if ( isset( $this->parametri_blocco['postLayout'] ) && 'grid' === $this->parametri_blocco['postLayout'] ) {
			$class .= ' is-layout-grid';
		}

		if ( isset( $this->parametri_blocco['columns'] ) && 'grid' === $this->parametri_blocco['postLayout'] ) {
			$style='grid-template-columns:';
			for ($i=1; $i<=$this->parametri_blocco['columns'];$i++){
				$style.='auto ';
			}
			$style.=';"';
		}
		
		$array_parametri =  array( 'class' => $class );
		if ($style!=''){
			$array_parametri['style']=$style;	
		}
		
		$wrapper_attributes = get_block_wrapper_attributes( $array_parametri);
	   
	   
	   $apertura_div_griglia='<div class="fm-advq-container"> <div class="wp-block-column" style="flex-basis:100%">';
	   $chiusura_div_griglia='</div>'.$html_pagination_return.'</div>';		 
		  
		$html_return = sprintf(
			'%1$s<ul %2$s>%3$s</ul>%4$s',
			$apertura_div_griglia,
			$wrapper_attributes,
			$html,
			$chiusura_div_griglia,
		);   
		  
		 return ($html_return);	
	 }	 
	 
	 //funzione per render html in base a contenuto del template json, prima funzione richiamata per render
	private function FM_Visualizzazione_da_template_json ($array_JsonTemplate){
		$html_return='';
		$array_template=$array_JsonTemplate['Template'];
		foreach ($array_template as $element){
			foreach ($element as $key => $value){
				if ($key=='query-loop'){
					//verifico se ho la query o se ho deciso di non usare query
					if ($this->parametri_blocco['TipoQuery']!='no-query'){
						$html_return .= $this->FM_render_queryloop($value);
					}
					else {
						$html_return .= $this->FM_gestisci_errori('richiesto_query_loop_senza_avere_query');
					}	
				}
				else {
					$html_return .= $this->FM_render_single_key($key,$value);
				}	
			}
		}
		return ($html_return);
		
	}
	 
	//funzione per rendere del loop wp, basato sul while have post .... 
	private function FM_render_queryloop($listavalue){
		$html_return='';
		//contatore usato per gruppi
		$this->loop_counter=1;
			
		while ( $this->query_interna->have_posts() ) {
			$this->query_interna->the_post();
			$this->currentpost = $this->query_interna->post->ID;  
			//$link_post = get_permalink () ;
			foreach ($listavalue as $element){
				foreach ($element as $key => $value){
					if ($key=='loop_group'){
						foreach ( $value['counter'] as $arraycontatore){
							//controllo se secondo valore impostato su all devo farlo su tutti i post residui
							if ($arraycontatore[1]=='ALL'){
								//basta che  contatore del loop sia maggiore o uguale al primo valore passato
								if (($this->loop_counter >= $arraycontatore[0])){
									$html_return .= $this->FM_render_loop_group($value['group-element']);
								}
							}
							else {
								//controllo se il contatore del loop è incluso in quello del template
								if (($this->loop_counter >= $arraycontatore[0])  && ($this->loop_counter <= $arraycontatore[1])){
									$html_return .= $this->FM_render_loop_group($value['group-element']);
								}
							}	
						}
						//altrimenti salto il gruppo
					}
					//controllo se devo inserire un gruppo ripetitivo
					elseif ($key=='loop_group_repeat'){
						foreach ( $value['counter_repeat'] as $elemento){
							if (($this->loop_counter % $elemento) == 0){
								$html_return .= $this->FM_render_loop_group($value['group-element']);
							} 
						}	
					}
					else {
						$html_return .= $this->FM_render_single_key($key,$value);
					}	
				}
			}
		$this->loop_counter++;
		}
		
		return ($html_return);
	}
	 
	 //funzione per rendere elementi sottogruppi del loop
	 private function FM_render_loop_group($arrayvalue){
		$html_return ='';
		foreach ($arrayvalue as $element){
			foreach ($element as $key => $value){
				$html_return .= $this->FM_render_single_key($key,$value);
			}	
		}
		
		return ($html_return);
	 }
	 
	
	//funzione per gestire la singola key e decidere cosa fare.
	//i valori $value possono essere sia una stringa sia un array
	private function FM_render_single_key($key,$value){
		$html_return ='';
		if ($key=='html-cod'){
			$html_return = $value;
		}
		elseif ($key=='loop-simple-element'){
			//per sicurezza imposto la stringa a minuscolo
			$value=strtolower ($value);
			switch ($value){
				case ('title'):
					$html_return = get_the_title();
				break;
				case('feature_img'):
					$html_return = get_the_post_thumbnail($this->currentpost,'post-thumbnail');
					break;
				case('pub_date'):
					$html_return = get_the_date();
				break;
				case('category'):
					$html_return = get_the_category_list();
				break;
				case('tag'):
					$html_return = get_the_tag_list();
				break;							
				case('author_name'):
					$html_return = get_the_author();
				break;
				case('author'):
					$html_return = get_the_author_posts_link();
				break;
				case('excerpt'):
					if ( (isset( $this->parametri_blocco['displayPostContent'] )) && ($this->parametri_blocco['displayPostContent'])) {
						//verifico se devo impostare lunghezza riassunto o se gi� fatto almeno il controllo
						//reset_riassunto diventa si se ho impostato filtro. serve_filtro_riassunto diventa NO se cmq ho fatto i controlli ma la lunghezza � standard
						if ( ($this->reset_riassunto=='NO') && ($this->serve_filtro_riassunto=='FORSE') ){
							$this->FM_setta_lunghezza_riassunto();
						}
						$html_return = get_the_excerpt();
					}	
				break;
				case('comments_number'):
					$html_return = get_comments_number_text();
				break;
				case ('open_permalink'):
					$html_return = '<a href="'.get_permalink ().'">';
				break;
				case ('close_permalink'):
					$html_return = '</a>';
				break;
				case ('post_id'):
					$html_return = $this->currentpost;
				break;
				case ('loop_counter'):
					$html_return = $this->loop_counter;
				break;
				
			}
		}
		elseif ($key=='loop-complex-element'){
			if ($value['type']== 'feature_img'){
				$dimensioni = (isset($value['size'])) ? $value['size'] : 'post-thumbnail';
				$attr = (isset($value['attr'])) ? $value['attr'] : '';
				$html_return.=get_the_post_thumbnail ($this->currentpost, $dimensioni, $attr);
			}
			elseif ($value['type']== 'pub_date'){
				$formato = (isset($value['format'])) ? $value['format'] : 'D M Y';
				$html_return.=get_the_date ($formato);
			}
			elseif ($value['type']== 'category'){
				$separator = (isset($value['separator'])) ? $value['separator'] : '';
				$parents = (isset($value['parents'])) ? $value['parents'] : '';
				$html_return.=get_the_category_list ($separator,$parents);
			}
			elseif ($value['type']== 'tag'){
				$before = (isset($value['before'])) ? $value['before'] : '';
				$separator = (isset($value['separator'])) ? $value['separator'] : ', ';
				$after = (isset($value['after'])) ? $value['after'] : '';
				$html_return.=get_the_tag_list ($before,$separator,$after);
			}
			elseif ($value['type']== 'comments_number'){
				$text_no_comments = (isset($value['text_no_comments'])) ? $value['text_no_comments'] : '';
				$text_one_comments = (isset($value['text_one_comments'])) ? $value['text_one_comments'] : ', ';
				$text_more_comments = (isset($value['text_more_comments'])) ? $value['text_more_comments'] : '';
				$html_return.=get_comments_number_text ($text_no_comments,$text_one_comments,$text_more_comments);
			}
			elseif ($value['type']== 'permalink'){
				$stringa_classe='';
				$stringa_style='';
				$stringa_target='';
				$link_post=	get_permalink ();
				$classe_link = (isset($value['class'])) ? $value['class'] : '';
				$style_link = (isset($value['style'])) ? $value['style'] : '';
				$target = (isset($value['target'])) ? $value['target'] : '';
				
				if ($classe_link !=''){
					$stringa_classe = ' class="'.$classe_link.'" ';
				}
				if ($style_link !=''){
					$stringa_style = ' style="'.$style_link.'" ';
				}
				if ($target !=''){
					$stringa_target = ' target="'.$target.'" ';
				}
				$html_return.= '<a href="'.$link_post.'" '.$stringa_classe . $stringa_style . $stringa_target .'>';
			}	
		}
		elseif ($key=='wp-simple-element'){
			if ($value='pagination'){
				//verifico se paginazione attiva
				if ( isset( $this->parametri_blocco['displayPagination'] ) && $this->parametri_blocco['displayPagination']) {
					$html_return .= paginate_links( array(
						'total' => $this->query_interna->max_num_pages,
						'mid_size' => 2,
						'prev_text' => __( '« prev ' ),
						'next_text' => __( ' » next'),
					) );
				}	
			}
		}
		elseif ($key=='wp-complex-element'){
			if ($value['type']== 'pagination'){
				//verifico se paginazione attiva
				if ( isset( $this->parametri_blocco['displayPagination'] ) && $this->parametri_blocco['displayPagination']) {
					$mid_size=(isset($value['mid_size'])) ? $value['mid_size'] :4;
					$prev_text=(isset($value['prev_text'])) ? $value['prev_text'] :'« ';
					$next_text=(isset($value['next_text'])) ? $value['next_text'] :' »';
					
					$html_return .= paginate_links( array(
						'total' => $this->query_interna->max_num_pages,
						'mid_size' => $mid_size,
						'prev_text' => __($prev_text ),
						'next_text' => __( $next_text),
					) );
					
					
				}	
			}	
		}	
		
		
		return ($html_return);
	}
	
		 
	
	//funzione per gestione errori
	private function FM_gestisci_errori ($tipo_errore){
		$html_return='';
		
		//se sono nel backend restituisco un messaggio di errore
		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ){
			if ($tipo_errore=='errore_apertura_json_template'){
				if ($this->parametri_blocco['TipoQuery']!='no-query'){
					$html_return='Attenzione il file json del template non è codificato correttamente, verrà mostrata visualizzazione di backup. ';
				}
				else {
					$html_return='Attenzione il file json del template non è codificato correttamente. Hai deciso di non usare query di wp, serve un file corretto ';
				}	
			}
			elseif 	($tipo_errore=='errore_file_template_non_esiste'){
				if ($this->parametri_blocco['TipoQuery']!='no-query'){
					$html_return='Attenzione non esiste il file del template desiderato, verrà mostrata visualizzazione di backup. ';
				}
				else {
					$html_return='Attenzione non esiste il file del template desiderato. Hai deciso di non usare query di wp, serve un file corretto ';
				}	
			}
			elseif 	($tipo_errore=='richiesto_query_loop_senza_avere_query'){
				$html_return='Attenzione stai usanto un template che richiede query wp ma hai deciso di non usare query, riverifica impostazioni del blocco ';
			}
		} 
		else {
			//se tipo errore relativo a decodifica json o apertura file template ma ho fatto una query sul db 
			//visualizzo i risultati con visualizzazione di backup se ho scelto di usare una query
			if (($tipo_errore=='errore_apertura_json_template') || ($tipo_errore=='errore_file_template_non_esiste')){
				if ($this->parametri_blocco['TipoQuery']!='no-query'){
					$html_return = $this->FM_Visualizzazione_di_backup();
				}	
			}
			//Negli altri casi non mostro nulla
			else {
				$html_return='';	
			}	
		}
			
		
		return ($html_return);
	}
   
   //funzione usata per visualizzazione post in caso di errori vedi FM_gestisci_errori
   private function FM_Visualizzazione_di_backup(){
		$html_return='';
		$html_return.='<div><ul>';	
		while ( $this->query_interna->have_posts() ) {
			$this->query_interna->the_post();
			$html_return.='<li><a href="'.get_permalink ().'">'.get_the_title().'</a></li>';	
		}	
		$html_return.='</ul></div>';	
	   return ($html_return);
   }
   
}
   
