<?php
/**
 * File per la visualizzazione dei risultati della query come slideshow
 *
 */
 
 ?>

<?php 

function Slideshow($temp_query){
	$count = $temp_query->post_count ;

	//aggiungo js per animazione
	$html ='
		<script>
		// Next/previous controls
		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		// Thumbnail image controls
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		   if (typeof timeOutId !== \'undefined\') {
			  clearTimeout(timeOutId);
		   }   
		  var i;
		  var slides = document.getElementsByClassName("fmadvq-mySlides");
		  var dots = document.getElementsByClassName("fmadvq-dot");
		  if (typeof slideIndex === \'undefined\') {
			slideIndex = 1;
		   }
		  if (n==undefined){n = ++slideIndex;}
		  if (n > slides.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
			  slides[i].style.display = "none";
		  }
		  for (i = 0; i < dots.length; i++) {
			  dots[i].className = dots[i].className.replace(" fmadvq-active", "");
		  }
		  slides[slideIndex-1].style.display = "block";
		  dots[slideIndex-1].className += " fmadvq-active";
		  timeOutId = setTimeout(showSlides, 8000);
		}

		</script>
	';

	
	$html .=' <div class="fmadvq-slideshow-container">
			<ol class="fmadvq-slideshow-indicators">';
			
	for ($i=1; $i<$count; $i++){
		$html .='<li class="fmadvq-dot" onclick="currentSlide('.$i.')"></li>';
	}
	$html .='</ol>';
	
	if ( $temp_query->have_posts() ){
	
		while ( $temp_query->have_posts() ) {
			$temp_query->the_post();
			$featured = 'ffita-pano';
			
			$titolo_post=get_the_title();
			$link_post=get_permalink();
			
		   if( has_post_thumbnail() ) {
			  $image = '';
			  $image .= '<a href="' . $link_post . '" title="'.$titolo_post.'">';
			  $image .= get_the_post_thumbnail( $temp_query->post->ID, $featured, array( 'title' => esc_attr( $titolo_post ), 'alt' => esc_attr( $titolo_post ), 'class' => 'fmadvq-slider-img' ) ).' </a>';
		   } else {
			  $image = '';
			  $image = '<a href="'. $link_post.'" title="'. $titolo_post.'"></a>';
			}
		   $html .= '<div class="fmadvq-mySlides fmadvq-fade">';
		   $html .= $image;
		  
		   $html .='<div class="fmadvq-slider-text"><h3><a href="'.$link_post.'" title="'.$titolo_post.'">'. $titolo_post.'</a></h3>';
		   $html .='</div></div>';
		   
				   
		}

	$html .='<a class="fmadvq-prev" onclick="plusSlides(-1)">&#10094;</a>';
    $html .='<a class="fmadvq-next" onclick="plusSlides(1)">&#10095;</a>';
    $html .='</div>';				
	}
	

	$html .='<script>
		showSlides(1);
		</script>';
	

	return ($html);
}	

?>

