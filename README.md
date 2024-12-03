=== Format Advanced Query with External pattern ===
VERSIONE BETA

Blocco wordpress per gutenberg, permette di creare una query wp e visualizzare i risultati usando un pattern esterno


== TO-DO ==
Sistemare/implementare multilingua.

Supporto css esterni per template esterni.

Sistemare css blocco (file editor.scss e style.scss)


== Installazione ==

Il plugin può essere utilizzato così com'è. Nella cartella dei plugin di wordpress creare una cartella format-adv-query-ext-pattern e copiare all'interno il contenuto di questa directory, in particolare:
- format-adv-query-ext-pattern.php
- cartella build
- cartella fm_advq_patterns
Attivare il plugin dalla dashboard di Wordpress

La cartella src non è necessaria per il funzionamento del plugin, serve solo per eventuale sviluppo, personalizzazione


== Utilizzo del plugin ==

Il plugin è visibile nei blocchi gutenberg con il nome 'FM: Query Loop View'.

Una volta inserito nella pagina utilizzare le varie opzioni per visualizzare il risultato prescelto.

In particolare:

------ Tipo di query
- No query: non fa nessuna query sul db, da usare eventualmente con template esterno (vedi dopo sezione template)
- Wordpress query: usa la query derivante da wordpress
- Custom query: permette di personalizzare la query da eseguire su wordpress

------ Tipo visualizzazione:
- external pattern: se abilitato richiede l'uso di uno dei pattern esterni da scegliere fra quelli proposti nel campo successivo (vedi dopo sezione template)
- tipo visualizzazione: scegliere template esterno, se abilitato nella opzione precendente
Se non si utilizza un template esterno per la visualizzazione si possono impostare alcuni parametri usando le altre opzione del blocco. Funzione cmq in fase di sviluppo


------ Wp Custom query parameters:
- Numero di post: numero di post per pagina (se paginazione non abilitata equivale al numero di post totali che verranno mostrati)
- Use pagination: abilita o meno la paginazione. Non funziona con pattern esterni in php (vedi sezione template)
- Mostra riassunto: abilita o meno la possibilità di vedere il riassunto. Non funziona con pattern esterni in php (vedi sezione template). Se l'opzione è abilitata si può impostare la lunghezza del riassunto nel campo 'Numero massimo di parole'
- Use advanced version for query: se abilitata mostra opzioni aggiuntive per modificare la query
- POST ID: inserire singolo id del post da visualizzare, oppure lista di ID separati da virgola

Altri campi: corrispondono ai campi standard usati in wp_query.


Nota CUSTOM TAXONOMY:
Se viene attivata l'opzione 'Use advanced version for query', è possibile effettuare una serie di query utilizzando anche le custom tassonomy, opzioni disponibili nella sezione 'Taxonomy Parameters'.
Se il sito utilizza tassonomie custom, per poterle utilizzare nella query ci sono due opzioni:
La prima opzione è quella di editare il file query_param.json , in particolare il campo customTaxonomyArray inserendo le tassonomie che si vogliono usare. La sintassi è del tipo:
"customTaxonomyArray": ["tassonomia1","tassonomia2"], 
Si possono inserire tutte o solo alcune tassonomie, verranno poi mostrate solo quelle inserite manualmente.

La seconda opzione è quella di lasciare il campo customTaxonomyArray vuoto e lasciare che il plugin trovi autonomamente tutte le custom tassonomy utilizzate.
In questo caso saranno mostrate tutte.



== Template esterni per la personalizzazione della visualizzazione ==
Il plugin supporta la possibilità di utilizzare template esterni per visualizzare i risultati.
I file per i template possono essere file php o file json (vedi dopo per i dettagli)

E' possibile aggiungere template nella cartella fm_advq_patterns del plugin, oppure creando una cartella con nome 'fm_advq_patterns' nel tema utilizzato dal sito. IN questo caso meglio usare un tema child

Nella cartella 'fm_advq_patterns' DEVE esistere il file _list_patterns.json (anche nella eventuale cartella creata all'interno del proprio tema)

Il file _list_patterns.json contiene la lista dei template che verranno resi disponibili.
La sintassi è del tipo "descrizione template":"nome_file.estensione" 


== Template esterni in PHP ==
Per utilizzare un file php come template esterno è necessario che:

- il file php abbia al suo interno una funzione con lo stesso identico nome del file stesso (senza estensione). Funzione che deve avere una variabile in input che conterrà i risultati della query effettuata dal blocco.
La funzione DEVE restituire del codice html, NON utilizzare echo o altro!!!

Quindi se un template viene scritto nel file miotemplate.php la funzione all'interno deve essere definita come 

function miotemplate($temp_query){
... qui si può fare quello che si vuole
  
  return ($codice_html);
}
 

Nel file php è possibile poi usare qualsiasi comando/funzione di wordpress. Eventualmente si può anche creare una query ad hoc o utilizzare il template per mostrare del semplice testo slegato completamente dalla query. In questi casi nel blocco si può scegliere di non eseguire nessuna query scegliendo l'opzione 'No query' vista precedentemente.


== Template esterni in json == 

I file json devono seguire le seguenti regole di sintassi e possono contenere tutti o parte dei seguenti campi.
---- "Template": []    -> Campo obbligatorio che contiene tutti gli altri campi utilizzati per la visualizzazione del template stesso
--- { "html-cod": "<div>Div di test </div>" },    -> i campi html-cod possono contenere qualsiasi tag html e/o semplice testo. E' un file json, quindi vanno eventualmente utilizzate le \. Il dodice html <div style="height:250px;"> andrà quindi inserito come  <div style=\"height:250px;\"> 

---  { "query-loop": [] } -> campo che conterrà al proprio interno tutto ciò che verrà mostrato per ogni elemento della query (equivale al while have post di php)

All'interno del query-loop si possono inserire elementi 'semplici' o 'complessi'. Gli elementi semplici utilizzabili sono tutti del tipo
 { "loop-simple-element": "stringa_comando" },
 
La stringa_comando deve avere uno dei seguenti valori. Fra parentesi comando wp equivalente.
- title -> mostra il titolo del post (get_the_title). La sintassi completa è:   { "loop-simple-element": "title" },
- feature_img -> recupera immagine in evidenza del post (get_the_post_thumbnail)
- pub_date -> mostra la data di pubblicazione  (get_the_date)
- category -> mosta la lista delle categorie del post  ( get_the_category_list)
- tag -> mostra la lista dei tag (get_the_tag_list )
- author_name ->  mostra il nome dell'autore (cget_the_author)
- author -> genera  link ai post dell'autore (get_the_author_posts_link)
- excerpt -> mostra il riassunto del post (get_the_excerpt) ATTENZIONE la visualizzazione del riassunto deve essere abilitata nel blocco
- comments_number -> mostra il numero dei commenti (get_comments_number_text)
- open_permalink -> Apre il tag html con il link all'articolo ('<a href="'.get_permalink ().'">')
- close_permalink -> chiude tag html con link all'articolo (</a>)
- post_id -> id del post

- loop_counter -> non legato a wordpress, mostra semplicemente il numero di iterazioni nel loop.

Una sintassi del tipo 
{ "loop-simple-element": "loop_counter" },
{ "loop-simple-element": "title" },
mostrerà quindi un numero seguito dal titolo del post.
Il primo post sarà del tipo 1 titolo_primo_post, il secondo verrà mostrato come 2 titolo_secondo_post etc


Nel query-loop è possibile utilizzare anche comandi 'complessi'. La chiave di questi comandi è sempre 'loop-complex-element' e devono obbligatoriamente contenere un elemento del tipo: 'type' = qualcosa
Oltre all'elemento type possono contenere uno o più altri elementi in base al seguente schema. 
I campi obbligatori DEVONO contenere quel specifico valore, per quelli facoltativi vedere la funzione e il relativo campo delle funzioni di wp.


- Immagine in evidenza: (funzione wp equivalente: get_the_post_thumbnail)
{  "loop-complex-element": {
						"type": "feature_img",  - obbligatorio
						"size": "post-thumbnail",  - facoltativo, equivale a parametro $size della funzione
						"attr": "attributi"  - facoltativo, equivale a $attr della funzione
					}
}					

- Data di pubblicazione:  (funzione wp equivalente:  get_the_date)
{  "loop-complex-element": {
						"type": "pub_date",  - obbligatorio
						"format": "D M Y"   - facoltativo, equivale a $format della funzione 
					}
}		


- category: (funzione get_the_category_list)
{  "loop-complex-element": {
            "type": "category",  - obbligatorio
						"separator": "",  - facoltativo
						"parents": ""   - facoltativo
					}
}	

- TAG: (funzione get_the_tag_list) 

{  "loop-complex-element": {
            "type": "tag",  - obbligatorio
            "before": "",  - facoltativo
						"separator": "",  - facoltativo
						"after": ""   - facoltativo
					}
}	



- Numero commenti: (get_comments_number_text)
 
{  "loop-complex-element": {
            "type": "comments_number",  - obbligatorio
            "text_no_comments": "",  - facoltativo
						"text_one_comments": "",  - facoltativo
						"text_more_comments": ""   - facoltativo
					}
}	


- Permalink: (get_permalink)

 {  "loop-complex-element": {
            "type": "permalink",  - obbligatorio
            "class": "",  - facoltativo
						"style": "",  - facoltativo
						"target": ""   - facoltativo
					}
}	

 
--- PAGINAZIONE, va naturalmente usato fuori dal loop
E' possibile inserire anche la paginazione (se abilitata nel blocco). La paginazione può essere inserita con una versione 'semplice' ed una 'complessa'.

{ "wp-simple-element":"pagination"}   -> Mostra paginazione con formato predefinito

Il blocco successivo mostra invece la paginazione permettondo di definire alcuni parametri. Vedi paginate_links
{ "wp-complex-element": {
			"type": "pagination", - obbligatorio 
			"mid_size": 2,   - facoltativo
			"prev_text": "« prev ",    -  facoltativo
			"next_text": " » next"      - facoltativo
			}
		},



--- Altri comandi 'SPECIALI'
Nel template json è possibile definire due ulteriori gruppi di 'comandi', comandi che vanno necessariamente inseriti in un blocco "query-loop". 

--  loop_group: Definisce un gruppo di comandi che verrà applicato agli elementi x del loop. Si veda esempio seguente

{   "loop_group":
					{"counter":[[3,5],[7,"all"]],
					 "group-element":[
						{  "html-cod": "<div> Data di pubblicazione" },
						{  "loop-simple-element": "pub_date" },
						{  "html-cod": "</div>"  },
						{  "html-cod": "<div>" },
						{  "loop-simple-element": "category" },
						{  "html-cod": "</div>"  }
						]}
						
}, 

Il loop grup richiede un campo "counter" e un campo "group-element".
Il campo counter indica a quali elementi del loop verrà applicata la visualizzazione indicata nel group-element.
Nell'esempio precedente 
"counter":[[3,5],[7,"all"]],   -> indica che ai post 3,4,5 e dal 7 in poi (all indica tutti i successivi) verrà applicata una visualizzazione specifica (definita nel campo successivo).
Il parametro counter è un array, a sua volta composto da array (almeno un array) indicanti il numero iniziale e il numero finale dei post a cui si vuole applicare una determinata visualizzazione. 
Se si vuole utilizzare solo per uno specifico post, ad esempio al 3 il parametro sarà del tipo:  "counter":[ [3,3] ],   
Se si vuole applicare solo dal 6 post in poi sarà una cosa del tipo "counter":[ [6,"all"] ],   

Il campo group-element  contiene poi la visualizzazione che verrà applicata solo ai post che soddisfano il campo counter. 

-- loop_group_repeat: Applica una specifica visualizzazzione ogni x post.Si veda esempio seguente.

{  "loop_group_repeat":
					{"counter_repeat":[3,7,8],
					 "group-element":[
						{  "html-cod": "<div> Ripetizione, sono nel loop" },
						{  "loop-simple-element": "loop_counter" },
						{  "html-cod": "</div>"  }
						]}
},

loop_group_repeat richiede "counter_repeat" e "group-element".
"counter_repeat": è un array che indica aogni quanti elementi applicare una specifica visualizzazione, definita nel gruppo "group-element".
Nell'esempio sopra quindi la visualizzazione specifica verrà applicata ogni 3 elementi (quindi anche al sesto al nono etc), ogni 7 (14/21) e ogni 8.
Se si vuole applicare una specifica visualizzazione ogni 4 elementi la sintassi corrispondente è {"counter_repeat":[4],
Il campo group-element  contiene poi la visualizzazione che verrà applicata solo ai post che soddisfano il campo counter. 




== Sviluppo ==
Nella cartella src si trovano i sorgenti del blocco. 
Per utilizzarli va usato npm (npm start, install etc...)

Importante il file src/query_param.json utilizzato internamente per creare i vari campi dell'inspector del blocco.

Da notare webpack.config.js  che genera automaticamente il file array_query_param.json che viene  salvato nella cartella build






 
 
