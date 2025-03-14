<?php
/**
 * File per la visualizzazione dei risultati della query su due colonne 1 grande e 4 piccoli con titolo sovrapposto ad immagine
  * consigliato usare 5
 *
 */
 
 ?>

<?php 

function Post_grid_2col_title_overlying_1_4($temp_query){
	$html = '';



	if ( $temp_query->have_posts() ){
		$html .= '<div class="fmadvq-container fmadvq-flex">';
		
	   $i = 1;
		
		while ( $temp_query->have_posts() ) {
			$temp_query->the_post();
			$titolo_post=get_the_title();
			$link_post=get_permalink();
		
			if ( $i == 1 ) {
				$featured = 'ffita-pano';
			} else {
				$featured = 'ffita-pano';
			}
			if ( $i == 1 ) {
				$html .=  '<div class="fmadvq-first-post fmadvq-col-2-big">';
			} 
			else if ( $i == 2 ) {
				$html .=  '<div class="fmadvq-following-post fmadvq-col-2-big fmadvq-flex">';
				
			} 
			
			//verifico se devo creare sottogruppo, se i pari
			//if ($i % 2 == 0)  {
			//	$html .= '<div class="fmadvq-col-2">';
			//}
			if ( $i == 1 ){
				$html .=  '<div class="fmadvq-single-post-overlay">';
			}
			else {
				$html .=  '<div class="fmadvq-single-post-overlay fmadvq-col-2">';
			}	
         
           	$html .= '<div class="fmadvq-div-relative fmadvq-div-shadow">';

            if( has_post_thumbnail() ) {
				$image = '';
                $image .= '<a href="' . $link_post . '" title="'.$titolo_post.'">';
				$image .= '<figure class="fmadvq-no-margin">';
                $image .= get_the_post_thumbnail( $temp_query->post->ID, $featured, array( 'title' => esc_attr( $titolo_post), 'alt' => esc_attr( $titolo_post ), 'class' => 'fmadvq-img-h250' ) );
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
			
			if ($i==1){
				$html .= '</div>';
			}	
			
			
			
			
			$i ++;	
		 }
		if ( $i >= 2 ) {
			$html .=  '</div>';
		}		 
 		$html .= '</div>';
	}			
  return ($html);
}	

?>

