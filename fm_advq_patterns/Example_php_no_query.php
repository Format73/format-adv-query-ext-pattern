<?php
/**
 * File per la visualizzazione in php senza usare query esterne
 * funzione richiede  $temp_query ma poi non viene usato il paramentro, che cmq viene passato come vuoto
 * teniamo solo per simmetria dei template con funzioni che hanno bisogno dei paramentri della query
 */
 
 ?>

<?php 
function Example_php_no_query ($temp_query){
	$html =' 
 
	<div class="wp-block-columns FM-blocks-adv-query"> 
	<div class="wp-block-column" style="flex-basis:100%">
	Semplice template di esempio in PHP senza utilizzo di query esterne
	</div>
	</div>

	';


	return ($html);
}	

?>

