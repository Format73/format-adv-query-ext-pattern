<?php
/**
 * File per la visualizzazione dei risultati della query come singola colonna
 * primo articolo più grnade con riassunto
 *
 */
 
 ?>

<?php 

function Post_grid_1col_1_3($temp_query){
	$html = '';
	
	
	if ( $temp_query->have_posts() ){
		$html .= '<div class="fmadvq-container fmadvq-container-50 fmadvq-flex">';
		
		$i = 1;
	
	
	 //<div class="widget_ffita_post2_area clearfix">
       while ( $temp_query->have_posts() ) {
			$temp_query->the_post();
			$titolo_post=get_the_title( );
			$link_post=get_permalink();
			
			if ( $i == 1 ) {
				$featured = 'ffita-pano';
			} else {
				$featured = 'ffita-lista';
			} 
			if ( $i == 1 ) {
				$html .=  '<div class="fmadvq-first-post">';
			} else if ( $i == 2 ) {
				$html .=  '<div class="fmadvq-following-post">';
			} 
			
			$html .= '<div class="fmadvq-flex fmadvq-flex-column-small">';
			
			if( has_post_thumbnail() ) {
				$image = '';
				if ( $i == 1 ) {
						  $image .= '<figure>';
				} 
				else if ( $i >1  ) {
					 $image .= '<figure style="flex-basis: 34%;">';
				} 

                $image .= '<a href="' . $link_post . '" title="'.$titolo_post.'">';
				$image .= get_the_post_thumbnail( $temp_query->post->ID, $featured, array( 'title' => esc_attr( $titolo_post ), 'alt' => esc_attr( $titolo_post ), 'class' => 'fmadvq-rounded' ) ).'</a>';
                $image .= '</figure>';
                $html .=  $image;
               }
			else { 
               $html .= '<a href="'. $link_post.'" title="'. $titolo_post.'"></a>';
            }
			
			if ( $i == 1 ) {
				$html .= '<div class="fmadvq-post">';
			} 
			else if ( $i > 1 ) {
				$html .= '<div class="fmadvq-post" style="flex-basis: 63%; align-self:center;">';
			}	
            $html .= ' <h3 class="fmadvq-post-title">';
            $html .= '<a href="'. $link_post.'" title="'.$titolo_post.'">'. $titolo_post.'</a></h3>';

            if ( $i == 1 ) { 
				$html .= '<div>';
				$html .= get_the_excerpt();
				$html .= '</div>';
			 }       
            $html .= '</div></div>';
			
			if ( $i == 1 ) {
				$html .=  '</div>';
			}
			$i ++;
     
         }
		if ( $i > 2 ) {
			$html .=  '</div>';
		}

		$html .=  '</div>';
  }
  return ($html);
}	

?>

