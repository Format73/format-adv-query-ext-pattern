<?php
/**
 * File per la visualizzazione dei risultati della query
 *
 */
 
 ?>

<?php 

function Example_php($temp_query){
	$html =' 
 
	<div class="wp-block-columns FM-blocks-adv-query"> 
	<div class="wp-block-column" style="flex-basis:100%">
	CIAO dal template
	</div>
	</div>

	';
	$html .='<ul>';
	if ( $temp_query->have_posts() ){
		while ( $temp_query->have_posts() ) {
			$temp_query->the_post();
			$html .= '<li><a href="'.get_permalink ().'">'.get_the_title().'</a></li>';
		 
		}			 
		$html .='</ul>';
	}	

	return ($html);
}	

?>

