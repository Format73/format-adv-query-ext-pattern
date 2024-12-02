/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/grid.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/grid.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const grid = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grid);
//# sourceMappingURL=grid.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/list.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/list.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const list = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_EXCERPT_LENGTH: () => (/* binding */ MAX_EXCERPT_LENGTH),
/* harmony export */   MAX_POSTS_COLUMNS: () => (/* binding */ MAX_POSTS_COLUMNS),
/* harmony export */   MIN_EXCERPT_LENGTH: () => (/* binding */ MIN_EXCERPT_LENGTH)
/* harmony export */ });
const MIN_EXCERPT_LENGTH = 10;
const MAX_EXCERPT_LENGTH = 100;
const MAX_POSTS_COLUMNS = 6;

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormatCustomQueryEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/list.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/grid.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _query_param_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./query_param.json */ "./src/query_param.json");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

/**
 * aggiunte matteo
 */




/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */









//aggiunta matteo


//importa valori per arg query


/**
 * Internal dependencies
 */


/**
 * Module Constants
 */
const CATEGORIES_LIST_QUERY = {
  per_page: -1,
  context: 'view'
};
const USERS_LIST_QUERY = {
  per_page: -1,
  has_published_posts: ['post'],
  context: 'view'
};

//lista delle custom taxonomy passato da script php
const ListCustomTaxonomies = external_data.lista_tassonomie;

//recupero lista dei possibili template passato da script php
const ArrayListaTemplate = external_data.array_template;
function FormatCustomQueryEdit({
  attributes,
  setAttributes
}) {
  var _categoriesList$reduc, _authorList$reduce, _tagsList$reduce, _categoriesList$reduc2;
  const ListaVisualizzazioni = Object.keys(ArrayListaTemplate).map(key => ({
    value: ArrayListaTemplate[key],
    label: key
  }));
  const {
    TipoQuery,
    ExtView,
    Visualizzazione,
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
    addLinkToFeaturedImage
  } = attributes;
  const {
    imageSizes,
    latestPosts,
    defaultImageWidth,
    defaultImageHeight,
    categoriesList,
    tagsList,
    authorList
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => {
    const {
      getEntityRecords,
      getUsers
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_10__.store);
    const settings = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.store).getSettings();
    const catIds = categories && categories.length > 0 ? categories.map(cat => cat.id) : [];
    const latestPostsQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.pickBy)({
      categories: catIds,
      author: selectedAuthor,
      order,
      orderby: orderBy,
      per_page: postsToShow,
      _embed: 'wp:featuredmedia'
    }, value => !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(value));
    return {
      defaultImageWidth: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.get)(settings.imageDimensions, [featuredImageSizeSlug, 'width'], 0),
      defaultImageHeight: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.get)(settings.imageDimensions, [featuredImageSizeSlug, 'height'], 0),
      imageSizes: settings.imageSizes,
      latestPosts: getEntityRecords('postType', 'post', latestPostsQuery),
      categoriesList: getEntityRecords('taxonomy', 'category', CATEGORIES_LIST_QUERY),
      tagsList: getEntityRecords('taxonomy', 'post_tag', CATEGORIES_LIST_QUERY),
      authorList: getUsers(USERS_LIST_QUERY)
    };
  }, [featuredImageSizeSlug, postsToShow, order, orderBy, categories, selectedAuthor]);
  const imageSizeOptions = imageSizes.filter(({
    slug
  }) => slug !== 'full').map(({
    name,
    slug
  }) => ({
    value: slug,
    label: name
  }));

  //restituisce solo nome ed id della categoria
  const formatCategorySuggestions = (_categoriesList$reduc = categoriesList?.reduce((accumulator, category) => ({
    ...accumulator,
    [category.name]: category.id
  }), {})) !== null && _categoriesList$reduc !== void 0 ? _categoriesList$reduc : {};

  //restituisce solo nome ed id degli autori   
  const formatAuthorSuggestions = (_authorList$reduce = authorList?.reduce((accumulator, author) => ({
    ...accumulator,
    [author.name]: author.id
  }), {})) !== null && _authorList$reduce !== void 0 ? _authorList$reduce : {};

  //restituisce solo nome ed id dei tag  
  const formatTagSuggestions = (_tagsList$reduce = tagsList?.reduce((accumulator, tag) => ({
    ...accumulator,
    [tag.name]: tag.id
  }), {})) !== null && _tagsList$reduce !== void 0 ? _tagsList$reduce : {};
  const categorySuggestions = (_categoriesList$reduc2 = categoriesList?.reduce((accumulator, category) => ({
    ...accumulator,
    [category.name]: category
  }), {})) !== null && _categoriesList$reduc2 !== void 0 ? _categoriesList$reduc2 : {};
  const selectCategories = tokens => {
    const hasNoSuggestion = tokens.some(token => typeof token === 'string' && !categorySuggestions[token]);
    if (hasNoSuggestion) {
      return;
    }
    // Categories that are already will be objects, while new additions will be strings (the name).
    // allCategories nomalizes the array so that they are all objects.
    const allCategories = tokens.map(token => {
      return typeof token === 'string' ? categorySuggestions[token] : token;
    });
    // We do nothing if the category is not selected
    // from suggestions.
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.includes)(allCategories, null)) {
      return false;
    }
    setAttributes({
      categories: allCategories
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      'fm-advq-list': true,
      'is-layout-grid': postLayout === 'grid',
      [`columns-${columns}`]: postLayout === 'grid'
    })
  });
  const layoutControls = [{
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('List view'),
    onClick: () => setAttributes({
      postLayout: 'list'
    }),
    isActive: postLayout === 'list'
  }, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__["default"],
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Grid view'),
    onClick: () => setAttributes({
      postLayout: 'grid'
    }),
    isActive: postLayout === 'grid'
  }];
  const hasPosts = 2;
  const hasPostsMAX = 6;

  //cancella dal blocco queryFreeValue i valori nulli o vuoti
  //viene passato anche il parametro che è appena stato impostato a zero per essere sicuri visto che setAttributes è asincrono
  const clearQueryFreeValue = function (nomeParametro) {
    //salvo in un array i dati di queryfreeValue  
    const arrayValori = Object.entries(queryFreeValue);
    let nuovoArrayPulito = [];
    arrayValori.forEach(elemento => {
      if (elemento[0] != nomeParametro && elemento[1] != "") {
        nuovoArrayPulito.push([elemento[0], elemento[1]]);
      }
    });

    //sovrascrivo queryFreeValue con solo i parametri che hanno un valore

    setAttributes({
      queryFreeValue: Object.fromEntries(nuovoArrayPulito)
    });
  };

  //funzione per convertire da ID a Nomi
  const convertiIDinNomi = function (oggettoSuggerimenti, idElemento) {
    const listaSuggerimentiID = Object.entries(oggettoSuggerimenti);
    //verifico se ho una stringa o un array
    let arrayValIDElemento = [];
    if (typeof idElemento === 'string') {
      arrayValIDElemento = idElemento.split(',');
    } else {
      arrayValIDElemento = idElemento;
    }
    let returnListaNomi = [];
    //controllo che array non sia vuoto
    if (arrayValIDElemento.length) {
      Array.prototype.forEach.call(arrayValIDElemento, singoloValore => {
        {
          listaSuggerimentiID.filter(sugg => sugg.find(nomeElemento => nomeElemento == singoloValore)).map(sugg => returnListaNomi.push(sugg[0]));
        }
        ;
      });
    }
    return returnListaNomi;
  };

  //funzione per convertire da nomi a ID
  const convertiNomiinID = function (oggettoSuggerimenti, nomeElemento, tipoRisultato) {
    const listaSuggerimentiNome = Object.entries(oggettoSuggerimenti);

    //verifico se ho una stringa o un array
    let arrayValNomeElemento = [];
    if (typeof nomeElemento === 'string') {
      arrayValNomeElemento = nomeElemento.split(',');
    } else {
      arrayValNomeElemento = nomeElemento;
    }
    let returnListaID = [];

    //controllo che array non sia vuoto
    if (arrayValNomeElemento.length) {
      Array.prototype.forEach.call(arrayValNomeElemento, singoloValore => {
        {
          listaSuggerimentiNome.filter(sugg => sugg.find(idElemento => idElemento == singoloValore)).map(sugg => returnListaID.push(sugg[1]));
        }
        ;
      });
    }
    //controllo se devo restituire un array o una stringa
    if (tipoRisultato != "array") {
      returnListaID = returnListaID.toString();
    }
    return returnListaID;
  };

  //funzione per aggiornare le query con custom taxonomy e pulire i rispettivi oggetti
  const aggiornaQueryCustomTax = function (nomeParametro, valoreParametro) {
    const arrayPossibiliValori = ["field", "terms", "include_children", "operator"];
    const valoreSeparatore = "---";
    let arrayQuery = new Map(Object.entries(queryFreeCustomTaxonomiesValue));

    //controllo se per caso ho disabilitato una tassonomia, in quel caso devo rimuovere tutte le chiavi relative
    const parametroTemp = nomeParametro.split(valoreSeparatore);
    if (valoreParametro === false && parametroTemp[1] === "enabled") {
      //pulisco il valore iniziale
      arrayQuery.delete(parametroTemp[0] + '---' + parametroTemp[1]);
      //pulisco tutte le chiavi relative   
      arrayPossibiliValori.forEach(possibileValore => {
        arrayQuery.delete(parametroTemp[0] + '---' + possibileValore);
      });
    }

    //altrimenti cambio il singolo valore
    else {
      arrayQuery.set(nomeParametro, valoreParametro);
    }

    //setto oggetto queryFreeCustomTaxonomiesValue con i nuovi parametri
    setAttributes({
      queryFreeCustomTaxonomiesValue: Object.fromEntries(arrayQuery)
    });

    //variabile per vedere quante tassonomie devo mettere nella query finale..se sono più di una devo mettere anche campo relation, se sono zero non devo mettere nulla
    let conteggioQuery = 0;

    //costruisco array finale con tutti i parametri da mettere in queryFreeValue
    //faccio loop su tutte le tassonomie
    let arrayTaxFinale = [];
    queryFreeListCustomTaxonomies.forEach(tassonomia => {
      let arrayTaxTemp = {};
      //verifico se la tassonomia è attiva
      if (arrayQuery.has(tassonomia + '---enabled')) {
        //ho una tassonomia, incremento il contatore
        conteggioQuery++;
        arrayTaxTemp['taxonomy'] = tassonomia;
        if (arrayQuery.has(tassonomia + '---field')) {
          arrayTaxTemp['field'] = arrayQuery.get(tassonomia + '---field');
        }
        if (arrayQuery.has(tassonomia + '---terms')) {
          arrayTaxTemp['terms'] = arrayQuery.get(tassonomia + '---terms').split(',');
        }
        if (arrayQuery.has(tassonomia + '---include_children')) {
          arrayTaxTemp['include_children'] = arrayQuery.get(tassonomia + '---include_children');
        }
        if (arrayQuery.has(tassonomia + '---operator')) {
          arrayTaxTemp['operator'] = arrayQuery.get(tassonomia + '---operator');
        }
        //costruisco il singolo array temporaneo
        arrayTaxFinale.push(arrayTaxTemp);
      }
    });
    let arrayQueryCompleto = [];
    //verifico se ho trovato qualcosa
    if (conteggioQuery == 0) {
      //non ho trovato nulla, la query finale è vuota
      //la cancello se c'è in queryfreeValue
      if (queryFreeValue.tax_query) {
        delete queryFreeValue.tax_query;
      }
    }
    //se ho un solo elemento costruisco una query "semplice"
    else {
      if (conteggioQuery == 1) {
        arrayQueryCompleto = arrayTaxFinale;
      }

      //se ho più di una query devo mettere anche il campo relation
      else if (conteggioQuery > 1) {
        let eleTemp = {};
        if (arrayQuery.has('---relation')) {
          eleTemp['relation'] = arrayQuery.get('---relation');
        } else {
          eleTemp['relation'] = 'AND';
        }
        arrayQueryCompleto = [eleTemp, arrayTaxFinale];
      }
      //setto il valore in queryfreeValue   
      setAttributes({
        queryFreeValue: {
          ...queryFreeValue,
          ['tax_query']: arrayQueryCompleto
        }
      });
    }
  };

  //richiamato da inspectorBlockQuery
  //passa oggetto querypar
  const inspectorCreateSingleBlock = function (parametriQuery) {
    const listaCampi = Object.keys(parametriQuery);

    //let outSubBlocchiTemp={};
    let outSubBlocchi = [];
    //costruisco il singolo blocco

    listaCampi.forEach(campo => {
      //controllo se il campo è abilitato)
      if (parametriQuery[campo].enabled) {
        let campoType = parametriQuery[campo].type ? parametriQuery[campo].type : '';
        let campoFieldOption = parametriQuery[campo].fieldOption ? parametriQuery[campo].fieldOption : '';
        const campoDescription = parametriQuery[campo].description ? ' (' + parametriQuery[campo].description + ' )' : '';

        //controllo che tipo di campo è e creo il blocco relativo
        if (parametriQuery[campo].fieldType == "suggestion") {
          //se sul singolo campo vanno messi i suggerimenti richiamo la ricostruzione del campo ad hoc...  
          let valoriSuggerimento = {};
          if (campoFieldOption == "formatAuthorSuggestions") {
            valoriSuggerimento = formatAuthorSuggestions;
          } else if (campoFieldOption == "formatCategorySuggestions") {
            valoriSuggerimento = formatCategorySuggestions;
          } else if (campoFieldOption == "formatTagSuggestions") {
            valoriSuggerimento = formatTagSuggestions;
          }
          const listaNomiSuggerimenti = Object.keys(valoriSuggerimento);
          const valListaNomi = queryFreeValue[campo] ? convertiIDinNomi(valoriSuggerimento, queryFreeValue[campo]) : [];
          const outSubBlocchiTemp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FormTokenField, {
            label: campo + campoDescription,
            value: valListaNomi,
            suggestions: listaNomiSuggerimenti,
            onChange: tokens => {
              if (tokens != "") {
                setAttributes({
                  queryFreeValue: {
                    ...queryFreeValue,
                    [campo]: convertiNomiinID(valoriSuggerimento, tokens, campoType)
                  }
                });
              }
              if (tokens == "") {
                clearQueryFreeValue(campo);
              }
            }
          });
          outSubBlocchi.push(outSubBlocchiTemp);
        } else if (parametriQuery[campo].fieldType == "textField") {
          const valElemento = queryFreeValue[campo] ? queryFreeValue[campo] : '';
          const outSubBlocchiTemp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: campo + campoDescription,
            help: 'Insert value for ' + campo + ' (type: ' + campoType + ') ',
            value: valElemento,
            onChange: value => {
              setAttributes({
                queryFreeValue: {
                  ...queryFreeValue,
                  [campo]: value
                }
              });
              if (value === "") {
                clearQueryFreeValue(campo);
              }
            }
          });
          outSubBlocchi.push(outSubBlocchiTemp);
        } else if (parametriQuery[campo].fieldType == "optionField") {
          const valElemento = queryFreeValue[campo] ? queryFreeValue[campo] : '';
          const optionValue = Object.keys(campoFieldOption).map(key => ({
            value: key,
            label: campoFieldOption[key]
          }));

          //aggiungo campo vuoto alle opzioni
          optionValue.unshift({
            value: '',
            label: 'Please select'
          });
          const outSubBlocchiTemp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
            label: campo + campoDescription,
            value: valElemento,
            options: optionValue,
            onChange: value => {
              setAttributes({
                queryFreeValue: {
                  ...queryFreeValue,
                  [campo]: value
                }
              });
              if (value === "") {
                clearQueryFreeValue(campo);
              }
            }
          });
          outSubBlocchi.push(outSubBlocchiTemp);
        }
      }
    });
    return outSubBlocchi;
  };

  //richiamato da inspectorCreateBlockTaxonomy passando il nome della tassonomi.
  //serve per creare i blocchi standard per ogni custom taxonomy   
  //vengono passati i parametri:
  // tassonomia -> nome della tassonomia
  // parametriSingleQuery -> lista dei parametri da mettere in ogni singola query/tassonomia
  const inspectorCreateSubBlockTaxonomy = function (tassonomia, parametriSingleQuery) {
    //trovo i campi da mettere nel singolo blocco

    let campiSingolaQuery = Object.keys(parametriSingleQuery);
    let outSubBlocchi = [];
    const parCustomQueryField = queryFreeCustomTaxonomiesValue[tassonomia + '---field'] ? queryFreeCustomTaxonomiesValue[tassonomia + '---field'] : '';
    const parCustomQueryTerms = queryFreeCustomTaxonomiesValue[tassonomia + '---terms'] ? queryFreeCustomTaxonomiesValue[tassonomia + '---terms'] : '';
    const parCustomQueryIncChild = queryFreeCustomTaxonomiesValue[tassonomia + '---include_children'] ? queryFreeCustomTaxonomiesValue[tassonomia + '---include_children'] : '';
    const parCustomQueryOperator = queryFreeCustomTaxonomiesValue[tassonomia + '---operator'] ? queryFreeCustomTaxonomiesValue[tassonomia + '---operator'] : '';

    //costruisco il blocco in base al tipo:
    campiSingolaQuery.forEach(campo => {
      const campoDescription = parametriSingleQuery[campo].description ? ' (' + parametriSingleQuery[campo].description + ')' : '';
      const valElemento = queryFreeCustomTaxonomiesValue[tassonomia + '---' + campo] ? queryFreeCustomTaxonomiesValue[tassonomia + '---' + campo] : '';
      if (parametriSingleQuery[campo].fieldType == "optionField") {
        //recupero le info e le opzioni sul campo
        const optionValue = Object.keys(parametriSingleQuery[campo].fieldOption).map(key => ({
          value: key,
          label: parametriSingleQuery[campo].fieldOption[key]
        }));
        optionValue.unshift({
          value: '',
          label: 'Please select'
        });
        //costruisco il blocco

        const outSubBlocchiTemp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
          label: campo + campoDescription,
          value: valElemento,
          options: optionValue,
          onChange: value => {
            setAttributes({
              queryFreeCustomTaxonomiesValue: {
                ...queryFreeCustomTaxonomiesValue,
                [tassonomia + '---' + campo]: value
              }
            });
            aggiornaQueryCustomTax(tassonomia + '---' + campo, value);
          }
        });
        outSubBlocchi.push(outSubBlocchiTemp);
      } else if (parametriSingleQuery[campo].fieldType == "textField") {
        const outSubBlocchiTemp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
          label: campo + campoDescription,
          value: valElemento,
          onChange: value => {
            setAttributes({
              queryFreeCustomTaxonomiesValue: {
                ...queryFreeCustomTaxonomiesValue,
                [tassonomia + '---' + campo]: value
              }
            });
            aggiornaQueryCustomTax(tassonomia + '---' + campo, value);
          }
        });
        outSubBlocchi.push(outSubBlocchiTemp);
      }
    });
    return outSubBlocchi;
  };

  //richiamato da inspectorBlockQuery per creare la query per le custom taxonomy
  //passa array con lista tassonomie

  const inspectorCreateBlockTaxonomy = function (oggettoTassonomia) {
    //variabili 
    const arrayTassonomie = oggettoTassonomia.customTaxonomyArray;
    const parametriSingleQuery = oggettoTassonomia.singleTaxQueryPar;

    //preparo le variabili che mi serviranno dopo   

    let outBlocchiCtTemp = {};
    let outBlocchiCT = [];
    let contatoreTassonomie = 0; //serve per vedere quante tassonomie ho attive    

    arrayTassonomie.forEach(tassonomia => {
      const parCustomQueryTaxEnabled = queryFreeCustomTaxonomiesValue[tassonomia + '---enabled'] ? queryFreeCustomTaxonomiesValue[tassonomia + '---enabled'] : false;
      //se la tassonomia è attiva incremento il contatore
      if (parCustomQueryTaxEnabled) {
        contatoreTassonomie++;
      }
      outBlocchiCtTemp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(tassonomia),
        initialOpen: false
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Use custom taxonomy "' + tassonomia + ' "'),
        checked: parCustomQueryTaxEnabled,
        onChange: value => {
          setAttributes({
            queryFreeCustomTaxonomiesValue: {
              ...queryFreeCustomTaxonomiesValue,
              [tassonomia + '---enabled']: value
            }
          });
          aggiornaQueryCustomTax(tassonomia + '---enabled', value);
        }
      }), parCustomQueryTaxEnabled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, inspectorCreateSubBlockTaxonomy(tassonomia, parametriSingleQuery)));
      outBlocchiCT.push(outBlocchiCtTemp);
    });

    //se ho più di una tassonomia attiva mostro il campo per la "relatzione"
    if (contatoreTassonomie > 1) {
      const campo = Object.keys(oggettoTassonomia.subQueryPar);
      const campoDescription = oggettoTassonomia.subQueryPar[campo].description ? ' (' + oggettoTassonomia.subQueryPar[campo].description + ')' : '';
      const valElemento = queryFreeCustomTaxonomiesValue['---' + campo] ? queryFreeCustomTaxonomiesValue['---' + campo] : '';
      const optionValue = Object.keys(oggettoTassonomia.subQueryPar[campo].fieldOption).map(key => ({
        value: key,
        label: oggettoTassonomia.subQueryPar[campo].fieldOption[key]
      }));
      optionValue.unshift({
        value: '',
        label: 'Please select'
      });
      outBlocchiCtTemp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
        label: campo + campoDescription,
        value: valElemento,
        options: optionValue,
        onChange: value => {
          setAttributes({
            queryFreeCustomTaxonomiesValue: {
              ...queryFreeCustomTaxonomiesValue,
              ['---' + campo]: value
            }
          });
          aggiornaQueryCustomTax('---' + campo, value);
        }
      });
      outBlocchiCT.push(outBlocchiCtTemp);
    }
    return outBlocchiCT;
  };
  const inspectorBlockQuery = function () {
    const ListaBlocchiJson = _query_param_json__WEBPACK_IMPORTED_MODULE_12__.ParametersBlock;
    const ListaBlocchi = Object.entries(ListaBlocchiJson);
    var outBlocchiTemp = {};
    var outBlocchi = [];
    ListaBlocchi.forEach(blocco => {
      if (blocco[0] != "Taxonomy Parameters") {
        //contollo che il blocco sia abilitato
        if (blocco[1].enabled) {
          outBlocchiTemp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(blocco[0]),
            initialOpen: false
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, inspectorCreateSingleBlock(blocco[1].querypar)));
          outBlocchi.push(outBlocchiTemp);
        }
      } else {
        //verifico che il blocco sia abilitato
        if (blocco[1].enabled) {
          //controllo se ho la lista delle tassonomie impostate nel file query_param.json 
          let listaTassonomie = [];
          if (blocco[1].customTaxonomyArray && blocco[1].customTaxonomyArray.length !== 0) {
            listaTassonomie = blocco[1].customTaxonomyArray;
          }
          //controllo se ho tassonomie custom impostate in wp
          else {
            listaTassonomie = ListCustomTaxonomies;
          }
          //if ((blocco[1].customTaxonomyArray) && (blocco[1].customTaxonomyArray.length!==0)){
          if (listaTassonomie && listaTassonomie.length !== 0) {
            blocco[1].customTaxonomyArray = listaTassonomie;
            //setto il valore della lista delle custom taxonomy (serve dopo per ricreare array corretto
            setAttributes({
              queryFreeListCustomTaxonomies: blocco[1].customTaxonomyArray
            });
            outBlocchiTemp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(blocco[0]),
              initialOpen: false
            }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, inspectorCreateBlockTaxonomy(blocco[1])));
            outBlocchi.push(outBlocchiTemp);
          }
        }
      }
    });
    return outBlocchi;
  };
  const showFormattedQueryParp = function () {
    const stringQueryPar = JSON.stringify(queryFreeValue, null, '<br>');
    let outputHTML = "";
    if (stringQueryPar !== undefined) {
      outputHTML = stringQueryPar.replaceAll("}", "<br>}");
      outputHTML = outputHTML.replaceAll("<br><br>", "");
      outputHTML = outputHTML.replaceAll("<br>]", "]");
      outputHTML = outputHTML.replaceAll("[", "array (");
      outputHTML = outputHTML.replaceAll("]", ")");
      outputHTML = outputHTML.replaceAll(":", " : ");
      outputHTML += "<p></p>";
    }
    return outputHTML;
  };
  const inspectorControls = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: 'Tipo query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Seleziona tipo di query da usare'),
    help: "Imposta il tipo di query da utilizzare, 'No Query' richiede template esterno",
    selected: TipoQuery,
    options: [{
      label: 'No query',
      value: 'no-query'
    }, {
      label: 'Wordpress query',
      value: 'wp-query'
    }, {
      label: 'Custom query',
      value: 'custom-query'
    }],
    onChange: option => {
      setAttributes({
        TipoQuery: option
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: 'Tipo visualizzzione'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('External Pattern'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Attiva per usare file esterno come pattern di visualizzazione.'),
    checked: ExtView,
    onChange: value => setAttributes({
      ExtView: value
    })
  }), ExtView == true && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: "Tipo visualizzazione",
    value: Visualizzazione,
    options: ListaVisualizzazioni,
    onChange: value => setAttributes({
      Visualizzazione: value
    })
  })))), TipoQuery != 'no-query' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: 'Wp Custom Query parameters'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalNumberControl, {
    label: "Numero di post",
    help: "Insert numero di post da visualizzare",
    value: postsToShow,
    onChange: value => setAttributes({
      postsToShow: Number.parseInt(value)
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Use pagination'),
    help: "Non funziona con pattern esterni in php. Con pattern json funziona solo se definito nel pattern",
    checked: displayPagination,
    onChange: value => setAttributes({
      displayPagination: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Mostra Riassunto'),
    help: "Non funziona con pattern esterni in php. Con pattern json funziona solo se definito nel pattern",
    checked: displayPostContent,
    onChange: value => setAttributes({
      displayPostContent: value
    })
  }), displayPostContent && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Max number of words in excerpt'),
    value: excerptLength,
    onChange: value => setAttributes({
      excerptLength: value
    }),
    min: _constants__WEBPACK_IMPORTED_MODULE_13__.MIN_EXCERPT_LENGTH,
    max: _constants__WEBPACK_IMPORTED_MODULE_13__.MAX_EXCERPT_LENGTH
  })), TipoQuery == 'custom-query' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Use advanced version for query'),
    checked: queryTypeAdvanced,
    onChange: value => setAttributes({
      queryTypeAdvanced: value
    })
  }), queryTypeAdvanced == false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Post ID",
    help: "Insert post ID or posts ID list with comma",
    value: postID,
    onChange: value => setAttributes({
      postID: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: "Order",
    value: order,
    options: [{
      value: 'ASC',
      label: 'ascending (A -> Z)'
    }, {
      value: 'DESC',
      label: 'descending (Z -> A)'
    }],
    onChange: value => setAttributes({
      order: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: "Orderby",
    value: orderBy,
    options: [{
      value: 'ID‘',
      label: 'post ID'
    }, {
      value: 'author',
      label: 'Author'
    }, {
      value: 'title',
      label: 'Post title'
    }, {
      value: 'name',
      label: 'Post name (slug)'
    }, {
      value: 'date',
      label: 'Date'
    }, {
      value: 'modified',
      label: 'Modified date'
    }, {
      value: 'rand',
      label: 'Random'
    }],
    onChange: value => setAttributes({
      orderBy: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.QueryControls, {
    onAuthorChange: value => setAttributes({
      selectedAuthor: '' !== value ? Number(value) : undefined
    }),
    authorList: authorList !== null && authorList !== void 0 ? authorList : [],
    selectedAuthorId: selectedAuthor,
    categorySuggestions: categorySuggestions,
    onCategoryChange: selectCategories,
    selectedCategories: categories
  })), queryTypeAdvanced && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Current query args:')), React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: showFormattedQueryParp()
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Select array args')), inspectorBlockQuery()))), ExtView == false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Featured image settings')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Display featured image'),
    checked: displayFeaturedImage,
    onChange: value => setAttributes({
      displayFeaturedImage: value
    })
  }), displayFeaturedImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Image Background color')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.ColorPalette, {
    onChange: value => setAttributes({
      featuredImageBgColor: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.__experimentalImageSizeControl, {
    onChange: value => {
      const newAttrs = {};
      if (value.hasOwnProperty('width')) {
        newAttrs.featuredImageSizeWidth = value.width;
      }
      if (value.hasOwnProperty('height')) {
        newAttrs.featuredImageSizeHeight = value.height;
      }
      setAttributes(newAttrs);
    },
    slug: featuredImageSizeSlug,
    width: featuredImageSizeWidth,
    height: featuredImageSizeHeight,
    imageWidth: defaultImageWidth,
    imageHeight: defaultImageHeight,
    imageSizeOptions: imageSizeOptions,
    onChangeImage: value => setAttributes({
      featuredImageSizeSlug: value,
      featuredImageSizeWidth: undefined,
      featuredImageSizeHeight: undefined
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Image alignment')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.BlockAlignmentToolbar, {
    value: featuredImageAlign,
    onChange: value => setAttributes({
      featuredImageAlign: value
    }),
    controls: ['left', 'center', 'right'],
    isCollapsed: false
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Add link to featured image'),
    checked: addLinkToFeaturedImage,
    onChange: value => setAttributes({
      addLinkToFeaturedImage: value
    })
  }))), ExtView == false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Title settings')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: "Select TAG",
    value: postTitleFormat,
    options: [{
      value: 'H1',
      label: 'H1'
    }, {
      value: 'H2',
      label: 'H2'
    }, {
      value: 'H3',
      label: 'H3'
    }, {
      value: 'H4',
      label: 'H4'
    }, {
      value: 'H5',
      label: 'H5'
    }, {
      value: 'H6',
      label: 'H6'
    }, {
      value: 'p',
      label: 'p'
    }],
    onChange: value => setAttributes({
      postTitleFormat: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl.VisualLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Title alignment')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.BlockAlignmentToolbar, {
    value: postTitleAlign,
    onChange: value => setAttributes({
      postTitleAlign: value
    }),
    controls: ['left', 'center', 'right'],
    isCollapsed: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Title Background color')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.ColorPalette, {
    onChange: value => setAttributes({
      postTitleBgColor: value
    })
  })))), ExtView == false && displayPostContent && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Post content settings')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Content Background color')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.ColorPalette, {
    onChange: value => setAttributes({
      postContentBgColor: value
    })
  })))), ExtView == false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: 'Post Layout Control'
  }, postLayout === 'grid' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Columns'),
    value: columns,
    onChange: value => setAttributes({
      columns: value
    }),
    min: 2,
    max: !hasPosts ? _constants__WEBPACK_IMPORTED_MODULE_13__.MAX_POSTS_COLUMNS : Math.min(_constants__WEBPACK_IMPORTED_MODULE_13__.MAX_POSTS_COLUMNS, hasPostsMAX),
    required: true
  }))));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, inspectorControls, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToolbarGroup, {
    controls: layoutControls
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default()), {
    block: "format-advq-ep/fm-ql-show",
    attributes: attributes,
    LoadingResponsePlaceholder: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Spinner, null)
  }));
}
;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
* Import per internazionalizzazione
*/


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 * import di save non serve per blocchi dinamici
 */

//import save from './save';

/**
 * Import from json
 */

const {
  name,
  ...settings
} = _block_json__WEBPACK_IMPORTED_MODULE_4__;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * 
 * export di save non serve per blocchi dinamici
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  ...settings,
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]

  /**
   * @see ./save.js
   */
  // save,
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"format-advq-ep/fm-ql-show","title":"FM: Query Loop View","version":"0.2.0","category":"text","description":"Show Wp query loop with various views","icon":"location","attributes":{"TipoQuery":{"type":"string","default":"custom-query"},"ExtView":{"type":"boolean","default":false},"Visualizzazione":{"type":"string","default":""},"queryTypeAdvanced":{"type":"boolean","default":false},"queryFreeValue":{"type":"object","default":{}},"queryFreeCustomTaxonomiesValue":{"type":"object","default":{}},"queryFreeListCustomTaxonomies":{"type":"object","default":{}},"postID":{"type":"string","deafult":null},"categories":{"type":"array","items":{"type":"object","default":{}}},"selectedAuthor":{"type":"number"},"postsToShow":{"type":"number","default":2},"displayPagination":{"type":"boolean","default":false},"displayPostContent":{"type":"boolean","default":false},"postContentBgColor":{"type":"string"},"postTitleAlign":{"type":"string","enum":["left","center","right"]},"postTitleBgColor":{"type":"string"},"postTitleFormat":{"type":"string","default":"p"},"excerptLength":{"type":"number","default":55},"displayAuthor":{"type":"boolean","default":false},"displayPostDate":{"type":"boolean","default":false},"postLayout":{"type":"string","default":"list"},"columns":{"type":"number","default":3},"order":{"type":"string","default":"desc"},"orderBy":{"type":"string","default":"date"},"displayFeaturedImage":{"type":"boolean","default":false},"featuredImageBgColor":{"type":"string"},"featuredImageAlign":{"type":"string","enum":["left","center","right"]},"featuredImageSizeSlug":{"type":"string","default":"thumbnail"},"feat uredImageSizeWidth":{"type":"number"},"featuredImageSizeHeight":{"type":"number"},"addLinkToFeaturedImage":{"type":"boolean","default":false}},"supports":{"align":true,"html":false},"textdomain":"format-advq-ep","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/query_param.json":
/*!******************************!*\
  !*** ./src/query_param.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Description":"Parametri per costruire blocco query advanced","Version":1,"Doc":"https://developer.wordpress.org/reference/classes/wp_query/","Autor":"Format","ParametersBlock":{"Author Parameters":{"enabled":true,"querypar":{"author":{"enabled":true,"type":"int","fieldType":"suggestion","fieldOption":"formatAuthorSuggestions","description":"Display posts from one or more authors"},"author__in":{"enabled":true,"type":"array","fieldType":"suggestion","fieldOption":"formatAuthorSuggestions","description":"Display posts from one or more authors"},"author__not_in":{"enabled":true,"type":"array","fieldType":"suggestion","fieldOption":"formatAuthorSuggestions","description":"Exclude posts for one or more author"}}},"Category Parameters":{"enabled":true,"querypar":{"cat":{"enabled":true,"type":"array","fieldType":"suggestion","fieldOption":"formatCategorySuggestions","description":"Display posts that have this category/categories (and any children of that)"},"category__and":{"enabled":false,"type":"array","fieldType":"suggestion","fieldOption":"formatCategorySuggestions","description":"Display posts that are in ALL selected categories"},"category__in":{"enabled":true,"type":"array","fieldType":"suggestion","fieldOption":"formatCategorySuggestions","description":"Display posts that are at least in one of the selected categories (not show posts from any children of these categories)"},"category__not_in":{"enabled":true,"type":"array","fieldType":"suggestion","fieldOption":"formatCategorySuggestions","description":"Exclude multiple categories"}}},"Tag Parameters":{"enabled":true,"querypar":{"tag_id":{"enabled":true,"type":"array","fieldType":"suggestion","fieldOption":"formatTagSuggestions","description":"Display posts that have ONE of this tag/tags"},"tag__and":{"enabled":false,"type":"array","fieldType":"suggestion","fieldOption":"formatTagSuggestions","description":"Display posts that have ALL this tag/tags"},"tag__in":{"enabled":true,"type":"array","fieldType":"suggestion","fieldOption":"formatTagSuggestions","description":"Display posts that have ONE of this tag/tags"},"tag__not_in":{"enabled":true,"type":"array","fieldType":"suggestion","fieldOption":"formatTagSuggestions","description":"Display posts that NOT have any of this tag/tags"}}},"Taxonomy Parameters":{"enabled":true,"customTaxonomyArray":[],"querypar":{"tax_query":{"enabled":true,"type":"array","fieldType":"textField"}},"subQueryPar":{"relation":{"enabled":true,"type":"string","fieldType":"optionField","fieldOption":{"AND":"AND","OR":"OR"},"description":"Relation between taxonomies"}},"singleTaxQueryPar":{"field":{"enabled":true,"field":"string","fieldType":"optionField","fieldOption":{"term_id":"term_id","name":"name","slug":"slug","term_taxonomy_id":"term_taxonomy_id"},"description":"Select taxonomy term by"},"terms":{"enabled":true,"type":"array","fieldType":"textField","description":"Taxonomy term(s)"},"include_children":{"enabled":true,"type":"string","fieldType":"optionField","fieldOption":{"true":"true","false":"false"},"description":"...for hierarchical taxonomies."},"operator":{"enabled":true,"type":"string","fieldType":"optionField","fieldOption":{"IN":"IN","NOT IN":"NOT IN","AND":"AND","EXISTS":"EXISTS","NOT EXISTS":"NOT EXISTS"},"description":"Operator to test"}}},"Search Parameters":{"enabled":true,"querypar":{"s":{"enabled":true,"type":"string","fieldType":"textField","description":"Show Posts based on a keyword search"}}},"Post and Page Parameters":{"enabled":true,"querypar":{"p":{"enabled":true,"type":"int","fieldType":"textField","description":"Display post by ID"},"name":{"enabled":true,"type":"string","fieldType":"textField","description":"Show post/page by slug"},"page_id":{"enabled":true,"type":"int","fieldType":"textField","description":"Display page by ID"},"pagename":{"enabled":true,"type":"string","fieldType":"textField","description":"Display page by slug"},"post_parent":{"enabled":true,"type":"int","fieldType":"textField","description":"Display child pages using parent page ID. Use 0 exclude all child pages"},"post_parent__in":{"enabled":true,"type":"array","fieldType":"textField","description":"Display posts whose parent is in an array"},"post_parent__not_in":{"enabled":true,"type":"array","fieldType":"textField","description":"Display posts whose parent is NOT in an array"},"post__in":{"enabled":true,"type":"array","fieldType":"textField","description":"Display only the specific posts (use post ID)"},"post__not_int":{"enabled":true,"type":"array","fieldType":"textField","description":"Display all posts but NOT the specified ones"},"post_name__in":{"enabled":true,"type":"array","fieldType":"textField","description":"Display only the specific posts (use slug)"}}},"Post Type Parameters":{"enabled":true,"querypar":{"post_type":{"enabled":true,"type":"array","fieldType":"textField","description":"Show posts associated with certain type (post/page/revision ...)"}}},"Status Parameters":{"enabled":true,"querypar":{"post_type":{"enabled":true,"type":"array","fieldType":"textField","description":"Show posts associated with certain post status (publish, pending, raft ...)"}}},"Order & Orderby Parameters":{"enabled":true,"querypar":{"order":{"enabled":true,"type":"string","fieldType":"optionField","fieldOption":{"ASC":"Ascending","DESC":"Descending"},"description":"Order ascending or descending"},"orderby":{"enabled":true,"type":"string","fieldType":"optionField","fieldOption":{"none":"No order","ID":"Order by post id","author":"Order by author","title":"Order by title","name":"Order by post slug","type":"Order by post type","date":"Order by date","modified":"Order by last modified date","parent":"Order by post/page parent id","rand":"Random order","comment_count":"Order by number of comments","relevance":"Order by search terms..","menu_order":"Order by Page Order","post__in":"Preserve post ID order given in the post__in","post_name__in":"Preserve post slug order given in the ‘post_name__in","post_parent__in":"Preserve post parent order given in the ‘post_parent__in"},"description":"Sort retrieved posts by parameter "}}},"Custom Field (post meta) Parameters":{"enabled":true,"querypar":{"meta_key":{"enabled":true,"type":"string","fieldType":"textField"},"meta_value":{"enabled":true,"type":"string","fieldType":"textField"},"meta_value_num":{"enabled":true,"type":"string","fieldType":"textField"},"meta_compare":{"enabled":true,"type":"string","fieldType":"optionField","fieldOption":{"=":"=","!=":"!=",">":">",">=":">=","<":"<","<=":"<=","LIKE":"LIKE","NOT LIKE":"NOT LIKE","IN":"IN","NOT IN":"NOT IN","BETWEEN":"BETWEEN","NOT BETWEEN":"NOT BETWEEN","NOT EXISTS":"NOT EXISTS","REGEXP":"REGEXP","NOT REGEXP":"NOT REGEXP","RLIKE":"RLIKE"},"description":"Sort retrieved posts by parameter "}}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkformat_qg_view"] = globalThis["webpackChunkformat_qg_view"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map