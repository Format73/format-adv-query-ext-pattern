<?php
/**
 * File per la visualizzazione dei risultati della query su una riga con titolo sovrapposto ad immagine
 * massimo 4 post per riga
 * consigliato usare multpli di 4
 *
 */
 
 ?>

<?php 

function Post_grid_1row_title_overlying($temp_query){
	$html = '';



	if ( $temp_query->have_posts() ){
		$html .= '<div class="fmadvq-container fmadvq-flex">';
		
	    $featured = 'ffita-blog';
		
		while ( $temp_query->have_posts() ) {
			$temp_query->the_post();
			$titolo_post=get_the_title();
			$link_post=get_permalink();
		

			$html .=  '<div class=" fmadvq-single-post-overlay fmadvq-flex-4x-riga">';
         
           	$html .= '<div class="fmadvq-div-relative fmadvq-div-shadow">';

            if( has_post_thumbnail() ) {
				$image = '';
                $image .= '<a href="' . $link_post . '" title="'.$titolo_post.'">';
				$image .= '<figure class="fmadvq-no-margin">';
                $image .= get_the_post_thumbnail( $temp_query->post->ID, $featured, array( 'title' => esc_attr( $titolo_post), 'alt' => esc_attr( $titolo_post ), 'class' => '' ) );
				$image .= '</figure>';
                $html .=  $image;
            } 
			else {
              	$html .=  '<a href="'.$link_post.'?>" title="'. $titolo_post.'">';
            }
            $html .=  '<div class="fmadvq-flex-end fmadvq-div-absolute fmadvq-text-white-overlay" style="padding: 0 1.25rem;">';
            $html .= '<h3 class="fmadvq-h3-small">';
            $html .=  $titolo_post; 
            $html .= '</h3>';
			$html .= '</div></a></div></div>';            

		 }	
 		$html .= '</div>';
	}			
  return ($html);
}	

?>

