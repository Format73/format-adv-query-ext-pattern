<?php
/**
 * Plugin Name:       Format Query Loop with external pattern
 * Description:       Format: Query Loop with various views
 * Plugin URI: https://mettere-url
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Format
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       format-advq-ep
 *
 * @package           create-format-advq-ep
 */

 
//richiama i blocchi che HANNO bisogno di una funzione di callback in php per funzione server render
namespace FM_ADVQ_EP_Blocks;

 
final class FM_ADVQ_EP {
 
 
   public function  __construct() {
   
      
		$file_funzione_callback="FM_RenderBlock.php";
		require_once plugin_dir_path( __FILE__ ) . 'build/' . $file_funzione_callback;
   
   
		//registro il blocco   
		register_block_type(
			//$this->block_type,
         ( __DIR__ . '/build/'),
         array (
            'render_callback' => [$this, 'fm_richiama_callback' ],
			)
		);
	
		add_action('admin_enqueue_scripts', array($this,'FM_pass_parameters_to_block'));
		add_action('wp_enqueue_scripts', array($this,'FM_pass_parameters_to_block'));
		
		//aggiungo azione per css dinamico nel backend
		add_action('enqueue_block_editor_assets', array ($this,'FM_carica_css_dinamico_gutenberg')) ;
		
		//aggiungo filtro per gestione css dinamica nel frontend
		add_filter ('render_block_format-advq-ep/fm-ql-show',  array($this,'FM_load_dynamic_css'),10,2);
		
		//registro hook disattivazione
		register_deactivation_hook( __FILE__ , [$this, 'deactivate_plugin' ]);
   }
 
   public function fm_richiama_callback($block_attributes, $content){
      $risultato_callback=(new build\FM_RenderBlock())->FM_render_block_callback($block_attributes, $content);
      return ($risultato_callback);
   }
   

  //funzione per passare parametri al blocco 
   public function FM_pass_parameters_to_block(){  
   
		$array_template=$this->FM_recupera_lista_template();
   		 
		//recupero i nomi delle custom tassonomy e lo passo allo script js
		$lista_tassonomie=[];
		$args = array(
			'public'   => true,
			'_builtin' => false
		); 
		$output = 'names'; // or objects
		$operator = 'and'; // 'and' or 'or'
		$custom_tax = get_taxonomies( $args, $output, $operator );
	
		if (!empty ($custom_tax)){
			foreach ($custom_tax as $key => $value){
				$lista_tassonomie[]=$value;
			}
		}
	  
	  
	  
	  //funzione per passare parametri a jquery
		wp_localize_script(
		'format-advq-ep-fm-ql-show-editor-script',
		'external_data',
		array(
			'array_template'=>$array_template,
			'lista_tassonomie' =>$lista_tassonomie,
		)
	);
	  
	  
   }

	//funzione per load dimanico dei css usati da template esterni
	public function FM_load_dynamic_css ( $block_content, $block ){
		//recupero nome del template usato
		if ((isset ($block['attrs']['Visualizzazione'])) && ($block['attrs']['Visualizzazione']!='')){
			
			$this->FM_enqueue_css ($block['attrs']['Visualizzazione']);
			
		}
		
		 return $block_content;
		
	}
	
	

	//funzione per rimuovere blocco Gutenberg in fase di disattivazione del plugin
	public function deactivate_plugin(){
		unregister_block_type( 'format-advq-ep/fm-ql-show' );
		
	}
	
	
	// Funzione helper per leggere file JSON
	private function read_json_file($base_dir, $file_name, $key) {
		$full_path = ABSPATH . $base_dir . $file_name;

		if (file_exists($full_path)) {
			$json_data = file_get_contents($full_path);
			$array_data = json_decode($json_data, true);
			if (json_last_error() !== JSON_ERROR_NONE) {
				error_log('Errore nel parsing del file JSON: ' . $full_path);
				return [];
			}
			if (isset($array_data[$key])) {
				return $array_data[$key];
			}
		}
		return [];
	}
	
	
	
	//legge i file json e 
	//restituisce un array con la lista dei template 
	private function FM_recupera_lista_template() {
		$list_template_return = [];
		$template_base_key = 'view_list';    
		$template_base_dir = 'fm_advq_patterns/';
		$template_base_json = '_list_patterns.json';
		
		// Percorsi relativi del plugin e del tema
		$plugin_dir = str_replace(rtrim(ABSPATH, '/'), '', plugin_dir_path(__FILE__)) . $template_base_dir;
		$theme_dir = str_replace(rtrim(ABSPATH, '/'), '', get_template_directory()) . '/' . $template_base_dir;

		// Leggo il JSON dalla directory del plugin
		$plugin_templates = $this->read_json_file($plugin_dir, $template_base_json, $template_base_key);
		foreach ($plugin_templates as $key => $value) {
			$list_template_return[$key] = $plugin_dir . $value;
		}

		// Leggo il JSON dalla directory del tema
		$theme_templates = $this->read_json_file($theme_dir, $template_base_json, $template_base_key);
		foreach ($theme_templates as $key => $value) {
			$list_template_return[$key] = $theme_dir . $value;
		}

		return $list_template_return;
	}
	
	//funzione per caricare css dinamico in backend
	public function FM_carica_css_dinamico_gutenberg(){
		$current_screen = get_current_screen();
		// Verifica che siamo nell'editor di post/pagine e non in altre aree di admin
		if ( $current_screen && $current_screen->base === 'post' ) {
			// Recupera l'ID del post attuale
			$post_id = get_the_ID();
			if (!$post_id) return;
			// Recupera il contenuto dell'editor
			$contenuto = get_post_field('post_content', $post_id);
			// Verifica se il blocco specifico è presente
			$nome_blocco='format-advq-ep/fm-ql-show';
			if (has_block($nome_blocco)) {
				$lista_blocchi = parse_blocks($contenuto);
				array_walk_recursive($lista_blocchi, array($this,'FM_recursive_block'));
					
			}
		}
	}
	
	//funzione per recuperare i valori dei template usati dal blocco, richiamata sopra
	private function FM_recursive_block ($value, $key){

		if ($key=='Visualizzazione'){
			if ($value !=''){
				$this->FM_enqueue_css ($value);
			}
		}
		
	}
	
	//funzione per risolvere path css ed eventualmente includerlo, richiamata sia per frontend che backend

	private function FM_enqueue_css($percorso_file){
		if (empty($percorso_file)) {
			return; 
		}
		
		$path_parts = pathinfo($percorso_file);
		$nome_file = $path_parts['filename'];
		
		$local_path=rtrim(ABSPATH,'/');
		
		$dir_file = $local_path.$path_parts['dirname'].'/';
		$file_css=$nome_file.'.css';
		$file_min_css=$nome_file.'.min.css';
		
		$template_base_dir = 'fm_advq_patterns/';
		$template_plugin_dir =plugin_dir_path(__FILE__) . $template_base_dir  ;
		$template_plugin_url = plugins_url( '', __FILE__ ) . '/'. $template_base_dir  ;
		$template_theme_dir = get_template_directory() .'/'.$template_base_dir ;
		$template_theme_url = get_template_directory_uri() .'/'.$template_base_dir ;
		
		
		//usato per registrare css
		$handle_name="fm-dyn-style-".$nome_file;
		
		//verifico se template locale o nel tema 
		$base_url = '';
		if ($dir_file === $template_plugin_dir) {
			$base_url = $template_plugin_url;
		} 
		elseif ($dir_file === $template_theme_dir) {
			$base_url = $template_theme_url;
		}
		
		//verifico se ho file css o min.css ed eventualmente lo metto in coda
		 if (!empty($base_url)) {
			if (file_exists($dir_file . $file_min_css)) {
				wp_register_style($handle_name, $base_url . $file_min_css);
				wp_enqueue_style($handle_name);
			} 
			elseif (file_exists($dir_file . $file_css)) {
				wp_register_style($handle_name, $base_url . $file_css);
				wp_enqueue_style($handle_name);
			}
		}
		
	}
   
}   






// Start it.
// Controlla se Gutenberg è attivo prima di inizializzare il plugin
if (function_exists('register_block_type')) {
    add_action('init', __NAMESPACE__ . '\fm_start_button');
}


function fm_start_button() {
	new FM_ADVQ_EP();
}




 
 

