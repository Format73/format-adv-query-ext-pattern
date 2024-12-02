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
   
      if ( ! function_exists( 'register_block_type' ) ) {

			// Gutenberg is not active.
			return;
		}
      
      
      
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

	

	//funzione per rimuovere blocco Gutenberg in fase di disattivazione del plugin
	public function deactivate_plugin(){
		unregister_block_type( 'format-advq-ep/fm-ql-show' );
		
	}
	
	//legge i file json e 
	//restituisce un array con la lista dei template 
	private function FM_recupera_lista_template(){
		$list_template_return=[];
		$template_base_key = 'view_list';	
		$template_base_dir = 'fm_advq_patterns/';
		$template_base_json = '_list_patterns.json';
		$template_plugin_dir =plugin_dir_path(__FILE__) . $template_base_dir  ;
		$template_plugin_url = plugins_url( '', __FILE__ ) . '/'. $template_base_dir  ;
		$template_theme_dir = get_template_directory() .'/'.$template_base_dir ;
		$template_theme_url = get_template_directory_uri() .'/'.$template_base_dir ;
		


		
		//controllo se il file esiste nella dir del plugin
		if ( file_exists( $template_plugin_dir . $template_base_json ) ){
			 $strJsonData = file_get_contents ( $template_plugin_dir . $template_base_json);
		  //lo converto in un array
			 $array_JsonData = json_decode($strJsonData, true);
			 foreach ($array_JsonData[$template_base_key]	as $key => $value){
				 $list_template_return[$key] = $template_plugin_dir.$value;
			 }
		}
		
		//controllo se il file esiste nella dir del template
		if ( file_exists( $template_theme_dir . $template_base_json ) ){
			 $strJsonData = file_get_contents ( $template_theme_dir . $template_base_json);
		  //lo converto in un array
			 $array_JsonData = json_decode($strJsonData, true);
			 foreach ($array_JsonData[$template_base_key]	as $key => $value){
				 $list_template_return[$key] = $template_theme_url.$value;
			 }
		}
		
		return ($list_template_return);
        		
		
	}
	
   
}   






// Start it.

add_action( 'init',__NAMESPACE__ .'\fm_start_button' );


function fm_start_button() {
	new FM_ADVQ_EP();
}




 
 

