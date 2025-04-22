/**
 * aggiunte matteo
 */

import  ServerSideRender  from '@wordpress/server-side-render';
import './editor.scss';

/**
 * External dependencies
 */
import { get, includes, invoke, isUndefined, pickBy } from 'lodash';
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	BaseControl,
	PanelBody,
	Placeholder,
	QueryControls,
	RangeControl,
	SelectControl,
	RadioControl, 
	Spinner,
	ToggleControl,
	ToolbarGroup,
	TextControl,
	//TextareaControl, 
	//ExternalLink,
	FormTokenField, 
} from '@wordpress/components';

import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

import { __, sprintf } from '@wordpress/i18n';
import { dateI18n, format, __experimentalGetSettings } from '@wordpress/date';
import {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
   ColorPalette,
	__experimentalImageSizeControl as ImageSizeControl,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { pin, list, grid } from '@wordpress/icons';
import { store as coreStore } from '@wordpress/core-data';


//aggiunta matteo
import { useState } from '@wordpress/element';

//importa valori per arg query
import metadataquery from './query_param.json';

/**
 * Internal dependencies
 */
import {
	MIN_EXCERPT_LENGTH,
	MAX_EXCERPT_LENGTH,
	MAX_POSTS_COLUMNS,
} from './constants';

/**
 * Module Constants
 */
const CATEGORIES_LIST_QUERY = {
	per_page: -1,
	context: 'view',
};
const USERS_LIST_QUERY = {
	per_page: -1,
	has_published_posts: [ 'post' ],
	context: 'view',
};

//lista delle custom taxonomy passato da script php
const ListCustomTaxonomies = external_data.lista_tassonomie;

//recupero lista dei possibili template passato da script php
const ArrayListaTemplate = external_data.array_template;

export default function FormatCustomQueryEdit( { attributes, setAttributes } ) {
	
	const ListaVisualizzazioni = Object.keys(ArrayListaTemplate).map(key => ({value: ArrayListaTemplate[key], label: key}));	
    
      const {
		 TipoQuery,
		 ExtView,
		 Visualizzazione,
		 ExtParameters,
         queryTypeAdvanced,
         queryFreeValue,
         queryFreeCustomTaxonomiesValue,
         queryFreeListCustomTaxonomies,
         postID,
		 postsToShow,
		 displayPagination,
         order,
         orderBy,
         categories,
         selectedAuthor,
         postTitleAlign,
         postTitleBgColor,
         postTitleFormat,
         displayFeaturedImage,
         displayPostContent,
         displayPostDate,
         displayAuthor,
         postContentBgColor,
         postLayout,
         columns,
         excerptLength,
         featuredImageAlign,
         featuredImageBgColor,
         featuredImageSizeSlug,
         featuredImageSizeWidth,
         featuredImageSizeHeight,
         addLinkToFeaturedImage,
      } = attributes;
      
      const {
		imageSizes,
		latestPosts,
		defaultImageWidth,
		defaultImageHeight,
		categoriesList,
		tagsList,
		authorList,
      } = useSelect(
         ( select ) => {
            const { getEntityRecords, getUsers } = select( coreStore );
            const settings = select( blockEditorStore ).getSettings();
            const catIds =
               categories && categories.length > 0
                  ? categories.map( ( cat ) => cat.id )
                  : [];
            const latestPostsQuery = pickBy(
               {
                  categories: catIds,
                  author: selectedAuthor,
                  order,
                  orderby: orderBy,
                  per_page: postsToShow,
                  _embed: 'wp:featuredmedia',
               },
               ( value ) => ! isUndefined( value )
            );

            return {
               defaultImageWidth: get(
                  settings.imageDimensions,
                  [ featuredImageSizeSlug, 'width' ],
                  0
               ),
               defaultImageHeight: get(
                  settings.imageDimensions,
                  [ featuredImageSizeSlug, 'height' ],
                  0
               ),
               imageSizes: settings.imageSizes,
               latestPosts: getEntityRecords(
                  'postType',
                  'post',
                  latestPostsQuery
               ),
               categoriesList: getEntityRecords(
                  'taxonomy',
                  'category',
                  CATEGORIES_LIST_QUERY
               ),
               tagsList: getEntityRecords(
                  'taxonomy',
                  'post_tag',
                  CATEGORIES_LIST_QUERY
               ),
               authorList: getUsers( USERS_LIST_QUERY ),
            };
         },
         [
            featuredImageSizeSlug,
            postsToShow,
            order,
            orderBy,
            categories,
            selectedAuthor,
         ]
      );

      
      const imageSizeOptions = imageSizes
		.filter( ( { slug } ) => slug !== 'full' )
		.map( ( { name, slug } ) => ( {
			value: slug,
			label: name,
		} ) );
      
      //restituisce solo nome ed id della categoria
      const formatCategorySuggestions =
         categoriesList?.reduce(
         ( accumulator, category ) => ( {
               ...accumulator,
               [ category.name ]: category.id,
            } ),
            {}
         ) ?? {};
      
      //restituisce solo nome ed id degli autori   
      const formatAuthorSuggestions =
         authorList?.reduce(
         ( accumulator, author ) => ( {
               ...accumulator,
               [ author.name ]: author.id,
            } ),
            {}
         ) ?? {};
     
     //restituisce solo nome ed id dei tag  
      const formatTagSuggestions =
         tagsList?.reduce(
         ( accumulator, tag ) => ( {
               ...accumulator,
               [ tag.name ]: tag.id,
            } ),
            {}
         ) ?? {};
     
     
      const categorySuggestions =
         categoriesList?.reduce(
            ( accumulator, category ) => ( {
               ...accumulator,
               //[ category.name ]: category,
			   [ category.name ]: {"id":category.id,"name":category.name},
            } ),
            {}
         ) ?? {};
        
      const selectCategories = ( tokens ) => {
         const hasNoSuggestion = tokens.some(
            ( token ) =>
               typeof token === 'string' && ! categorySuggestions[ token ]
         );
        if ( hasNoSuggestion ) {
            return;
         }
		// Categories that are already will be objects, while new additions will be strings (the name).
		// allCategories nomalizes the array so that they are all objects.
		const allCategories = tokens.map( ( token ) => {
			return typeof token === 'string'
				? categorySuggestions[ token ]
				: token;
		} );
		// We do nothing if the category is not selected
		// from suggestions.
		if ( includes( allCategories, null ) ) {
			return false;
		}
		setAttributes( { categories: allCategories } );
	};
      
      
      const blockProps = useBlockProps( {
         className: classNames( {
            'fm-advq-list': true,
            'is-layout-grid': postLayout === 'grid',
            [ `columns-${ columns }` ]: postLayout === 'grid',
         } ),
      } );
      
      const layoutControls = [
		{
			icon: list,
			title: __( 'List view' ),
			onClick: () => setAttributes( { postLayout: 'list' } ),
			isActive: postLayout === 'list',
		},
		{
			icon: grid,
			title: __( 'Grid view' ),
			onClick: () => setAttributes( { postLayout: 'grid' } ),
			isActive: postLayout === 'grid',
		},
      ];
      
      const hasPosts = 2;
      const hasPostsMAX = 6;
      
      //cancella dal blocco queryFreeValue i valori nulli o vuoti
      //viene passato anche il parametro che è appena stato impostato a zero per essere sicuri visto che setAttributes è asincrono
      const clearQueryFreeValue = (function(nomeParametro){
         
          //salvo in un array i dati di queryfreeValue  
          const arrayValori = Object.entries(queryFreeValue);
      
      
          let nuovoArrayPulito = [];
          
          arrayValori.forEach (elemento =>{
  
            if ((elemento[0]!=nomeParametro) && (elemento[1]!="")){
               nuovoArrayPulito.push( [elemento[0] , elemento[1]] );
            }
          })
         
         //sovrascrivo queryFreeValue con solo i parametri che hanno un valore
         
         setAttributes( {
            queryFreeValue: Object.fromEntries(nuovoArrayPulito)   
            }) ;
          
      
      });
      
      
      //funzione per convertire da ID a Nomi
      const convertiIDinNomi = (function(oggettoSuggerimenti,idElemento){
         const listaSuggerimentiID =   Object.entries(oggettoSuggerimenti);
          //verifico se ho una stringa o un array
         let arrayValIDElemento = [];
         if ((typeof (idElemento))=== 'string'){
            arrayValIDElemento = idElemento.split(',');
         }
         else {
            arrayValIDElemento = idElemento;
         }
         
         let returnListaNomi = [];
         //controllo che array non sia vuoto
         if (arrayValIDElemento.length){
            Array.prototype.forEach.call(arrayValIDElemento, singoloValore =>{
               {listaSuggerimentiID
                 .filter (sugg => sugg.find(nomeElemento => nomeElemento ==  singoloValore))
                 .map (sugg => returnListaNomi.push(sugg[0]) ) };
               });
         }      
     
        return (returnListaNomi);
       });
   
      //funzione per convertire da nomi a ID
      const convertiNomiinID = (function (oggettoSuggerimenti,nomeElemento,tipoRisultato){
         const listaSuggerimentiNome =   Object.entries(oggettoSuggerimenti);
 
         //verifico se ho una stringa o un array
         let arrayValNomeElemento = [];
         if ((typeof (nomeElemento))=== 'string'){
            arrayValNomeElemento = nomeElemento.split(',');
         }
         else {
            arrayValNomeElemento = nomeElemento;
         }
         let returnListaID = [];
         
         //controllo che array non sia vuoto
         if (arrayValNomeElemento.length){
            Array.prototype.forEach.call(arrayValNomeElemento, singoloValore =>{
               {listaSuggerimentiNome
                 .filter (sugg => sugg.find(idElemento => idElemento ==  singoloValore))
                 .map (sugg => returnListaID.push(sugg[1]) ) };
                           
               });
          } 
         //controllo se devo restituire un array o una stringa
         if (tipoRisultato != "array"){
            returnListaID=returnListaID.toString();
         }
         return (returnListaID);
      });
      
      
      
      //funzione per aggiornare le query con custom taxonomy e pulire i rispettivi oggetti
      const aggiornaQueryCustomTax = (function (nomeParametro, valoreParametro){
        
         const arrayPossibiliValori =["field", "terms", "include_children", "operator"];
         const valoreSeparatore = "---";
         
         let arrayQuery = new Map(Object.entries (queryFreeCustomTaxonomiesValue));
         
         //controllo se per caso ho disabilitato una tassonomia, in quel caso devo rimuovere tutte le chiavi relative
         const parametroTemp = nomeParametro.split (valoreSeparatore);
         if (valoreParametro === false && parametroTemp[1]==="enabled"){
            //pulisco il valore iniziale
               arrayQuery.delete (parametroTemp[0]+'---'+parametroTemp[1]);
            //pulisco tutte le chiavi relative   
            arrayPossibiliValori.forEach (possibileValore=>{
               arrayQuery.delete (parametroTemp[0]+'---'+possibileValore);
            });   
         }
         
         //altrimenti cambio il singolo valore
         else {
            arrayQuery.set (nomeParametro, valoreParametro);
         }
         
         //setto oggetto queryFreeCustomTaxonomiesValue con i nuovi parametri
         setAttributes( {
            queryFreeCustomTaxonomiesValue: Object.fromEntries(arrayQuery)   
            }) 
         

        //variabile per vedere quante tassonomie devo mettere nella query finale..se sono più di una devo mettere anche campo relation, se sono zero non devo mettere nulla
         let conteggioQuery = 0;
         
         //costruisco array finale con tutti i parametri da mettere in queryFreeValue
         //faccio loop su tutte le tassonomie
         let arrayTaxFinale = [];
         queryFreeListCustomTaxonomies.forEach (tassonomia =>{
            let arrayTaxTemp={};
            //verifico se la tassonomia è attiva
            if (arrayQuery.has(tassonomia+'---enabled')){
               //ho una tassonomia, incremento il contatore
               conteggioQuery ++;
               
               arrayTaxTemp['taxonomy'] = tassonomia; 
               if (arrayQuery.has(tassonomia+'---field')){
                  arrayTaxTemp['field'] = arrayQuery.get(tassonomia+'---field'); 
               }
               if (arrayQuery.has(tassonomia+'---terms')){               
                  arrayTaxTemp['terms'] = (arrayQuery.get(tassonomia+'---terms')).split(','); 
               }
               if (arrayQuery.has(tassonomia+'---include_children')){               
                  arrayTaxTemp['include_children'] = arrayQuery.get(tassonomia+'---include_children');
               }
               if (arrayQuery.has(tassonomia+'---operator')){               
                  arrayTaxTemp['operator'] = arrayQuery.get(tassonomia+'---operator');
               }
               //costruisco il singolo array temporaneo
               arrayTaxFinale.push (arrayTaxTemp);   
            }
         });
         
         
         let arrayQueryCompleto=[];
         //verifico se ho trovato qualcosa
         if (conteggioQuery == 0){
            //non ho trovato nulla, la query finale è vuota
            //la cancello se c'è in queryfreeValue
            if (queryFreeValue.tax_query){
               delete queryFreeValue.tax_query;
            }
         }
         //se ho un solo elemento costruisco una query "semplice"
         else {
            if (conteggioQuery == 1) {
               arrayQueryCompleto = arrayTaxFinale;
            }
         
         //se ho più di una query devo mettere anche il campo relation
            else if (conteggioQuery >1 ){
               let eleTemp={};
               if (arrayQuery.has('---relation')){
                  eleTemp['relation'] = arrayQuery.get('---relation');
               }
               else {
                  eleTemp['relation']='AND';
               }
               arrayQueryCompleto=[eleTemp,arrayTaxFinale];  
            }
         //setto il valore in queryfreeValue   
            setAttributes({
               queryFreeValue:{...queryFreeValue, ['tax_query']: arrayQueryCompleto  }
            }) 
         }
         
      });
      
   
    //richiamato da inspectorBlockQuery
    //passa oggetto querypar
    const inspectorCreateSingleBlock =(function (parametriQuery){
      const listaCampi = Object.keys(parametriQuery);
      
      //let outSubBlocchiTemp={};
      let outSubBlocchi =[];
      //costruisco il singolo blocco
	  
      listaCampi.forEach (campo =>{
         //controllo se il campo è abilitato)
         if (parametriQuery[campo].enabled){
            let campoType = parametriQuery[campo].type ? parametriQuery[campo].type : '';
            let campoFieldOption  =  parametriQuery[campo].fieldOption ? parametriQuery[campo].fieldOption : '';
            const campoDescription  =  parametriQuery[campo].description ?' ('+ parametriQuery[campo].description +' )' : '';
            
            
            //controllo che tipo di campo è e creo il blocco relativo
            if ( parametriQuery[campo].fieldType == "suggestion"){
               //se sul singolo campo vanno messi i suggerimenti richiamo la ricostruzione del campo ad hoc...  
               let valoriSuggerimento ={};
               if (campoFieldOption=="formatAuthorSuggestions"){
                   valoriSuggerimento = formatAuthorSuggestions ;
               }
               else if (campoFieldOption=="formatCategorySuggestions"){
                  valoriSuggerimento = formatCategorySuggestions;
               }       
                else if (campoFieldOption=="formatTagSuggestions"){
                  valoriSuggerimento = formatTagSuggestions;
               }
               
               const listaNomiSuggerimenti =   Object.keys(valoriSuggerimento);
			   
               const valListaNomi =  queryFreeValue[campo] ? convertiIDinNomi (valoriSuggerimento,queryFreeValue[campo]) : [];
               const outSubBlocchiTemp =( <FormTokenField
                              label = {campo + campoDescription}
                              value = { valListaNomi }
                              suggestions= { listaNomiSuggerimenti }
                              onChange={(tokens) => {
                              if (tokens != ""){
                                 setAttributes ({
                                    queryFreeValue:{...queryFreeValue, [campo]: convertiNomiinID(valoriSuggerimento,tokens,campoType)} 
                                    });
                                 }   
                                if (tokens == ""){
                                    clearQueryFreeValue(campo);
                                 }  
                                }   
                              }
                              />
                            ); 
               outSubBlocchi.push (outSubBlocchiTemp);      
            }
            else if ( parametriQuery[campo].fieldType == "textField"){
               const valElemento =  queryFreeValue[campo] ? queryFreeValue[campo] : '';
               
               const outSubBlocchiTemp= ( <TextControl
                                    label= {campo + campoDescription}
                                    help= {'Insert value for ' +campo + ' (type: '+campoType+') '}
                                    value= { valElemento } 
                                    onChange={(value) =>{
                                          setAttributes ({
                                            queryFreeValue:{...queryFreeValue, [campo]:value} 
                                          })
                                       if (value===""){
                                          clearQueryFreeValue(campo);
                                       }   
                                      }
                                    }
                                 />);
            
            
            
            
            outSubBlocchi.push (outSubBlocchiTemp);  
 
            }
            else if ( parametriQuery[campo].fieldType == "optionField"){
               const valElemento =  queryFreeValue[campo] ? queryFreeValue[campo] : '';
               const optionValue = Object.keys(campoFieldOption).map(key => ({value: key, label: campoFieldOption[key]}));
               
               //aggiungo campo vuoto alle opzioni
               optionValue.unshift({value: '', label: 'Please select'});
               const outSubBlocchiTemp = ( <SelectControl
                           label= {campo + campoDescription}
                           value={ valElemento }
                           options={ optionValue }
                           onChange={ ( value ) => {
                                 setAttributes( {
                                    queryFreeValue:{...queryFreeValue, [campo]:value} 
                                 } )
                                 if (value===""){
                                       clearQueryFreeValue(campo);
                                 }   
                              }
                           }
                         />);
                                 
              outSubBlocchi.push (outSubBlocchiTemp); 
            }
         }
         
      })
      return  (outSubBlocchi);    
    })
   
   //richiamato da inspectorCreateBlockTaxonomy passando il nome della tassonomi.
   //serve per creare i blocchi standard per ogni custom taxonomy   
   //vengono passati i parametri:
   // tassonomia -> nome della tassonomia
   // parametriSingleQuery -> lista dei parametri da mettere in ogni singola query/tassonomia
   const inspectorCreateSubBlockTaxonomy = (function (tassonomia,parametriSingleQuery){
      //trovo i campi da mettere nel singolo blocco
     
      let campiSingolaQuery = Object.keys(parametriSingleQuery);
      
      let outSubBlocchi=[];
      
      const parCustomQueryField =  queryFreeCustomTaxonomiesValue[tassonomia+'---field'] ? queryFreeCustomTaxonomiesValue[tassonomia+'---field'] :'';
      const parCustomQueryTerms = queryFreeCustomTaxonomiesValue[tassonomia+'---terms'] ? queryFreeCustomTaxonomiesValue[tassonomia+'---terms'] :'';
      const parCustomQueryIncChild = queryFreeCustomTaxonomiesValue[tassonomia+'---include_children'] ? queryFreeCustomTaxonomiesValue[tassonomia+'---include_children'] :'';
      const parCustomQueryOperator = queryFreeCustomTaxonomiesValue[tassonomia+'---operator'] ? queryFreeCustomTaxonomiesValue[tassonomia+'---operator'] :'';
      
      
      //costruisco il blocco in base al tipo:
      campiSingolaQuery.forEach (campo =>{
         
         const campoDescription = parametriSingleQuery[campo].description ? ' ('+ parametriSingleQuery[campo].description+')': '';
         const valElemento = queryFreeCustomTaxonomiesValue[tassonomia+'---'+campo] ? queryFreeCustomTaxonomiesValue[tassonomia+'---'+campo] : '';
         if (parametriSingleQuery[campo].fieldType =="optionField"){
             //recupero le info e le opzioni sul campo
             const optionValue = Object.keys(parametriSingleQuery[campo].fieldOption).map(key => ({value: key, label: parametriSingleQuery[campo].fieldOption[key]}));
             
             optionValue.unshift({value: '', label: 'Please select'});
            //costruisco il blocco
            
            const outSubBlocchiTemp = ( <SelectControl
                           label= {campo + campoDescription}
                           value={ valElemento }
                           options={ optionValue }
                           onChange={ ( value ) =>{
                                    setAttributes( {
                                       queryFreeCustomTaxonomiesValue:{...queryFreeCustomTaxonomiesValue, [tassonomia+'---'+campo]:value} 
                                    } )
                                    aggiornaQueryCustomTax(tassonomia+'---'+campo , value);
                                    }
                           }
                         />);
                                 
              outSubBlocchi.push (outSubBlocchiTemp); 
         }
         
         else if (parametriSingleQuery[campo].fieldType =="textField"){
            const outSubBlocchiTemp =(<TextControl
                           label= {campo + campoDescription}
                           value= { valElemento } 
                           onChange={(value) =>{
                              setAttributes ({
                                 queryFreeCustomTaxonomiesValue:{...queryFreeCustomTaxonomiesValue, [tassonomia+'---'+campo]:value} 
                                 })
                              aggiornaQueryCustomTax(tassonomia+'---'+campo , value);
                              }
                           }
                         />);
            
            outSubBlocchi.push (outSubBlocchiTemp); 
         }
         
      
      });   
      
      return (outSubBlocchi);
   
   });
     
     //richiamato da inspectorBlockQuery per creare la query per le custom taxonomy
    //passa array con lista tassonomie
    
   const inspectorCreateBlockTaxonomy = (function  (oggettoTassonomia){
      
      //variabili 
      const arrayTassonomie = oggettoTassonomia.customTaxonomyArray;
      const parametriSingleQuery = oggettoTassonomia.singleTaxQueryPar;
  
      
      //preparo le variabili che mi serviranno dopo   
         
         let outBlocchiCtTemp={};
         let outBlocchiCT =[];
         let contatoreTassonomie = 0; //serve per vedere quante tassonomie ho attive    
         
          arrayTassonomie.forEach(tassonomia =>{
                  const parCustomQueryTaxEnabled = queryFreeCustomTaxonomiesValue[tassonomia+'---enabled'] ? queryFreeCustomTaxonomiesValue[tassonomia+'---enabled'] : false ;
                  //se la tassonomia è attiva incremento il contatore
                  if (parCustomQueryTaxEnabled){
                     contatoreTassonomie ++;
                  }
                  outBlocchiCtTemp = (<PanelBody title={ __( tassonomia ) } initialOpen={ false }>
                                       <ToggleControl
                                          label={ __( 'Use custom taxonomy "'+tassonomia+' "' ) }
                                          checked={ parCustomQueryTaxEnabled }
                                          onChange={ ( value ) =>{
                                             setAttributes( {
                                                queryFreeCustomTaxonomiesValue:{...queryFreeCustomTaxonomiesValue, [tassonomia+'---enabled']:value   }
                                             }) 
                                             aggiornaQueryCustomTax(tassonomia+'---enabled',value);
                                          }   
                                          }
                                       />
                                       { parCustomQueryTaxEnabled && (
                                          <BaseControl>
                                             { inspectorCreateSubBlockTaxonomy (tassonomia,parametriSingleQuery) }
                                          </BaseControl>
                                       )}
                                    </PanelBody>);
                  outBlocchiCT.push(outBlocchiCtTemp);
               });
           
         
         //se ho più di una tassonomia attiva mostro il campo per la "relatzione"
         if (contatoreTassonomie > 1){
            const campo = Object.keys(oggettoTassonomia.subQueryPar);
            const campoDescription = oggettoTassonomia.subQueryPar[campo].description ? ' ('+oggettoTassonomia.subQueryPar[campo].description+')' : '';
            const valElemento = queryFreeCustomTaxonomiesValue['---'+campo] ? queryFreeCustomTaxonomiesValue['---'+campo] : '';
            const optionValue = Object.keys(oggettoTassonomia.subQueryPar[campo].fieldOption).map(key => ({value: key, label: oggettoTassonomia.subQueryPar[campo].fieldOption[key]}));
            
            optionValue.unshift({value: '', label: 'Please select'});
            
            outBlocchiCtTemp = (<SelectControl
                           label= {campo + campoDescription}
                           value= {valElemento}
                           options= { optionValue }
                           onChange={ ( value ) =>{
                              setAttributes( {
                                 queryFreeCustomTaxonomiesValue:{...queryFreeCustomTaxonomiesValue, ['---'+campo]:value   } 
                              } )
                              aggiornaQueryCustomTax('---'+campo ,value);
                              }
                           }
                         />
            )
            outBlocchiCT.push(outBlocchiCtTemp);
         }
        
         
       return (outBlocchiCT);  
      
    });
     
     const inspectorBlockQuery = (function (){
         const ListaBlocchiJson = metadataquery.ParametersBlock;
         const ListaBlocchi =  Object.entries(ListaBlocchiJson);
         
         var outBlocchiTemp={};
         var outBlocchi=[];

 
         ListaBlocchi.forEach(blocco => {
            if ( blocco[0]!="Taxonomy Parameters"){
               //contollo che il blocco sia abilitato
               if (blocco[1].enabled){
                  outBlocchiTemp = (<PanelBody title={ __( blocco[0] ) } initialOpen={ false }>
                                        <BaseControl>
                                        {inspectorCreateSingleBlock (blocco[1].querypar)}
                                        </BaseControl>
                                 </PanelBody>);
                  outBlocchi.push(outBlocchiTemp);
               }
            
            }
            else {
                //verifico che il blocco sia abilitato
               if (blocco[1].enabled){
				  //controllo se ho la lista delle tassonomie impostate nel file query_param.json 
				let listaTassonomie = [];
				  if ((blocco[1].customTaxonomyArray) && (blocco[1].customTaxonomyArray.length!==0)){
					listaTassonomie = blocco[1].customTaxonomyArray;
				  }
				  //controllo se ho tassonomie custom impostate in wp
				  else {
					listaTassonomie = ListCustomTaxonomies;
				  }
                  //if ((blocco[1].customTaxonomyArray) && (blocco[1].customTaxonomyArray.length!==0)){
					if ((listaTassonomie)&&(listaTassonomie.length!==0)){  
						blocco[1].customTaxonomyArray=listaTassonomie;
                       //setto il valore della lista delle custom taxonomy (serve dopo per ricreare array corretto
                       setAttributes( {
                          queryFreeListCustomTaxonomies:blocco[1].customTaxonomyArray 
                        });
                        outBlocchiTemp = (<PanelBody title={ __( blocco[0] ) } initialOpen={ false }>
                                           <BaseControl>
                                           { inspectorCreateBlockTaxonomy (blocco[1] )}
                                           </BaseControl>
                                    </PanelBody>);
                        outBlocchi.push(outBlocchiTemp);
                     }
               }
            }   
          });  
         return (outBlocchi);
      });
      
      const showFormattedQueryParp = (function(){
         const stringQueryPar = JSON.stringify(queryFreeValue,null,'<br>');
         let outputHTML ="";
         if (stringQueryPar !== undefined){
            outputHTML = stringQueryPar.replaceAll("}","<br>}");
            outputHTML = outputHTML.replaceAll ("<br><br>","");
            outputHTML = outputHTML.replaceAll ("<br>]","]");
            outputHTML = outputHTML.replaceAll ("[","array (");
            outputHTML = outputHTML.replaceAll ("]",")");
            outputHTML = outputHTML.replaceAll (":"," : ");
            outputHTML += "<p></p>";
         }   
         
         return (outputHTML);
      });

      const inspectorControls = (
           <InspectorControls>
				<PanelBody title={( 'Tipo query' ) }>
					<BaseControl>
						<RadioControl
							label={__('Seleziona tipo di query da usare')}
							help="Imposta il tipo di query da utilizzare, 'No Query' richiede template esterno"
							selected={ TipoQuery }
							options={ [
									{ label: 'No query', value: 'no-query' },
									{ label: 'Wordpress query', value: 'wp-query' },
									{ label: 'Custom query', value: 'custom-query' },
								] }
							onChange={ ( option ) => { setAttributes( { TipoQuery: option } ) } }
						/>
					</BaseControl>
			   </PanelBody>  
			   <PanelBody title={( 'Tipo visualizzzione' ) }>
					<BaseControl>
						 <ToggleControl
							label={ __(  'External Pattern' ) }
							help={ __( 'Attiva per usare file esterno come pattern di visualizzazione.') }
							checked={ ExtView }
							onChange={ ( value ) => 
								setAttributes( {
								ExtView:value,
								})
							}	
						/>
						{ ExtView == true && (
						<BaseControl>
							<SelectControl
								   label="Tipo visualizzazione"
								   value={ Visualizzazione }
								   options= {ListaVisualizzazioni }
								   onChange={ ( value ) =>
											setAttributes( {
											   Visualizzazione: value,
											} )
										 }
								 />
								 
							<TextControl
								label='Additional Parameters (optional)'
								help='Enter parameters required by external PHP template. Not work with json template'
								value={ ExtParameters }
								onChange={(value) =>
									setAttributes ({
									ExtParameters: value
									})
								}
                     />	 
								 
						 </BaseControl>
						) }		 
					</BaseControl>  
				</PanelBody>  
				{ TipoQuery != 'no-query' && ( 
					<BaseControl>
						<PanelBody title={( 'Wp Custom Query parameters' ) }>
							<NumberControl
								label='Numero di post'
								help='Insert numero di post da visualizzare'
								value={ postsToShow }
									onChange={(value) =>
										setAttributes ({
											postsToShow:  Number.parseInt(value)
											})
									   }
							/>
							<ToggleControl
								label={ __( 'Use pagination' ) }
								help='Non funziona con pattern esterni in php. Con pattern json funziona solo se definito nel pattern'
								checked={ displayPagination }
								onChange={ ( value ) =>
								   setAttributes( {
									  displayPagination:value,
								   }) 
								}   
							 />
							 
							 <ToggleControl
							 label={  __( 'Mostra Riassunto')  }
							 help='Non funziona con pattern esterni in php. Con pattern json funziona solo se definito nel pattern'
							 checked={ displayPostContent }
							 onChange={ ( value ) =>
								setAttributes( { displayPostContent: value } )
							 }
						  />
						  
						  { displayPostContent && (
						  <BaseControl>
								<RangeControl
								   label={ __( 'Max number of words in excerpt' ) }
								   value={ excerptLength }
								   onChange={ ( value ) =>
									  setAttributes( { excerptLength: value } )
								   }
								   min={ MIN_EXCERPT_LENGTH }
								   max={ MAX_EXCERPT_LENGTH }
								/>
						  </BaseControl>      
							 ) }
							 
					
						  { TipoQuery == 'custom-query' && (
							 <BaseControl>
							 
							 
							 <ToggleControl
								label={ __( 'Use advanced version for query' ) }
								checked={ queryTypeAdvanced }
								onChange={ ( value ) =>
								   setAttributes( {
									  queryTypeAdvanced:value,
								   }) 
								}   
							 />
							 
							 { queryTypeAdvanced == false && (
								<BaseControl>
								   <TextControl
									  label='Post ID'
									  help='Insert post ID or posts ID list with comma'
									  value={ postID }
									  onChange={(value) =>
												  setAttributes ({
													 postID: value
												  })
											   }
								   />
								   
								   
								   
								   <SelectControl
									  label="Order"
									  value={ order }
									  options={ [
										 { value: 'ASC', label: 'ascending (A -> Z)' },
										 { value: 'DESC', label: 'descending (Z -> A)' },
									  ] }
									  onChange={ ( value ) =>
											   setAttributes( {
												  order: value,
											   } )
											}
									/>
								   <SelectControl
									  label="Orderby"
									  value={ orderBy }
									  options={ [
										 { value: 'ID‘', label: 'post ID' },
										 { value: 'author', label: 'Author' },
										 { value: 'title', label: 'Post title' },
										 { value: 'name', label: 'Post name (slug)' },
										 { value: 'date', label: 'Date' },
										 { value: 'modified', label: 'Modified date' },
										 { value: 'rand', label: 'Random' },
									  ] }
									  onChange={ ( value ) =>
											   setAttributes( {
												  orderBy: value,
											   } )
											}
									  />                         
									
										
								   <QueryControls  
									  onAuthorChange={ ( value ) =>
										 setAttributes( {
											selectedAuthor:
											'' !== value ? Number( value ) : undefined,

										 } )
									  }
									  authorList={ authorList ?? [] }
									  selectedAuthorId={ selectedAuthor } 
								   
									  categorySuggestions={ categorySuggestions }
									  onCategoryChange={ selectCategories }
									  //selectedCategories={ categories }
									  selectedCategories={ categories }
								   />
								   
								</BaseControl> 
							   ) }
							 { queryTypeAdvanced  && (
								<>
								   
								   <p>{ __( 'Current query args:' ) }</p>
								   

								   { React.createElement("div", { dangerouslySetInnerHTML: { __html: showFormattedQueryParp() } }) }

								   <p>{ __( 'Select array args' ) }</p>
									  
								   { inspectorBlockQuery() } 
								</>
								
							   ) }
						   </BaseControl>    
						  ) }
					</PanelBody> 
				   
				   { ExtView == false  && (
					   <PanelBody title={ __( 'Featured image settings' ) }>
						  <ToggleControl
							 label={ __( 'Display featured image' ) }
							 checked={ displayFeaturedImage }
							 onChange={ ( value ) =>
								setAttributes( { displayFeaturedImage: value } )
							 }
						  />
						  { displayFeaturedImage && (
							 <>
								<fieldset>
								   <label>{  __( 'Image Background color')  }</label> 
								   <ColorPalette 
									  onChange={(value) =>
										 setAttributes ({
											featuredImageBgColor: value
										 })
									  }
								   />
								</fieldset>
							 
								<ImageSizeControl
								   onChange={ ( value ) => {
									  const newAttrs = {};
									  if ( value.hasOwnProperty( 'width' ) ) {
										 newAttrs.featuredImageSizeWidth =
											value.width;
									  }
									  if ( value.hasOwnProperty( 'height' ) ) {
										 newAttrs.featuredImageSizeHeight =
											value.height;
									  }
									  setAttributes( newAttrs );
								   } }
								   slug={ featuredImageSizeSlug }
								   width={ featuredImageSizeWidth }
								   height={ featuredImageSizeHeight }
								   imageWidth={ defaultImageWidth }
								   imageHeight={ defaultImageHeight }
								   imageSizeOptions={ imageSizeOptions }
								   onChangeImage={ ( value ) =>
									  setAttributes( {
										 featuredImageSizeSlug: value,
										 featuredImageSizeWidth: undefined,
										 featuredImageSizeHeight: undefined,
									  } )
								   }
								/>
								<BaseControl>
								   <label>
									  { __( 'Image alignment' ) }
								   </label>
								   <BlockAlignmentToolbar
									  value={ featuredImageAlign }
									  onChange={ ( value ) =>
										 setAttributes( {
											featuredImageAlign: value,
										 } )
									  }
									  controls={ [ 'left', 'center', 'right' ] }
									  isCollapsed={ false }
								   />
								</BaseControl>
								<ToggleControl
								   label={ __( 'Add link to featured image' ) }
								   checked={ addLinkToFeaturedImage }
								   onChange={ ( value ) =>
									  setAttributes( {
										 addLinkToFeaturedImage: value,
									  } )
								   }
								/>
							 </>
						  ) }
					   </PanelBody>
					)}
					{ ExtView == false  && (
					   <PanelBody title={ __( 'Title settings' ) }>
						  <SelectControl
									label="Select TAG"
									value={ postTitleFormat }
									options={ [
										{ value: 'H1', label: 'H1' },
								{ value: 'H2', label: 'H2' },
								{ value: 'H3', label: 'H3' },
								{ value: 'H4', label: 'H4' },
								{ value: 'H5', label: 'H5' },
								{ value: 'H6', label: 'H6' },
								{ value: 'p', label: 'p' },
									] }
									onChange={ ( value ) =>
									  setAttributes( {
										 postTitleFormat: value,
									  } )
								   }
								/>
						  <BaseControl>
							 <BaseControl.VisualLabel>
								{ __( 'Title alignment' ) }
							 </BaseControl.VisualLabel>
							 <BlockAlignmentToolbar
								value={ postTitleAlign }
								   onChange={ ( value ) =>
									  setAttributes( {
										 postTitleAlign: value,
									  } )
								   }
								controls={ [ 'left', 'center', 'right' ] }
								isCollapsed={ false }
							 />
							 <fieldset>
								<label>{  __( 'Title Background color')  }</label> 
								<ColorPalette 
								   onChange={(value) =>
									  setAttributes ({
										 postTitleBgColor: value
									  })
								   }
								/>
							 </fieldset>
						  </BaseControl>
					   </PanelBody>
					   )}
					{ ExtView == false  && displayPostContent && (
						  <PanelBody title={ __( 'Post content settings' ) }>
						  <BaseControl>
								 <fieldset>
								   <label>{  __( 'Content Background color')  }</label> 
								   <ColorPalette 
									  onChange={(value) =>
										 setAttributes ({
											postContentBgColor: value
										 })
									  }
								   />
								</fieldset>
						  </BaseControl>      
						  </PanelBody>
							 ) }
					   
					{ ExtView == false  && (
					   <PanelBody title={( 'Post Layout Control' ) }>
						  { postLayout === 'grid' && (
							 <RangeControl
								label={ __( 'Columns' ) }
								value={ columns }
								onChange={ ( value ) =>
								   setAttributes( { columns: value } )
								}
								min={ 2 }
								max={
								   ! hasPosts
									  ? MAX_POSTS_COLUMNS
									  : Math.min(
											MAX_POSTS_COLUMNS,
											hasPostsMAX
										)
								}
								required
							 />
						  ) }
					   </PanelBody> 
				   
						) }	
				</BaseControl>	
				)} 
             </InspectorControls>
         );

         
        return (
            <div { ...blockProps }>
               { inspectorControls }
               
               <BlockControls>
                  <ToolbarGroup controls={ layoutControls } />
               </BlockControls>   
               
               
               <ServerSideRender
                    block = 'format-advq-ep/fm-ql-show'
                    attributes={ attributes }
                    LoadingResponsePlaceholder={ () => <Spinner /> }
                />


            </div>
        );
};



