const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
//aggiungere il nome del file php che contiene la funzione di callback
const nomeFilePhp = '*.php';


//aggiungere il nome del file json aggiuntivo che contiene tutti i parametri per la query
const nomeFileJson = 'query_param.json';

//nome file json AUTOgenerato con lista dei parametri che richiedono un array in input, usato in funzione callback php

const nomeAutogenerato = 'array_query_param.json';

function autogenerateJson(buffer) {
   // copy-webpack-plugin passes a buffer
   const readFileJson = JSON.parse(buffer.toString());

   // make any modifications you like, such as
   readFileJson.Description ="File autogenerato contiene lista parametri che richiedono array in input";
   
   const valoriInput = readFileJson.ParametersBlock;
   const arrayValoriInput =  Object.entries(valoriInput);

   let outValori='';
   let subArrayValori =[];
   
   arrayValoriInput.forEach(valore => {
         subArrayValori = Object.entries(valore[1].querypar);
         subArrayValori.forEach (subvalore =>{
             if (subvalore[1].type ==='array'){
               outValori +=subvalore[0]+',';
            }
         });
         
   });
   readFileJson.ListaArray = outValori;   
   readFileJson.ParametersBlock ='';
   // pretty print to JSON with two spaces
   outputFileJson = JSON.stringify(readFileJson, null, 2);
   return outputFileJson;
   
}


module.exports = {
	...defaultConfig,
	module: {
		...defaultConfig.module,
	},
   
   plugins: [
   ...defaultConfig.plugins,
   
     new CopyWebpackPlugin( {
			patterns: [
				{
					from: nomeFilePhp,
					context: 'src',
					noErrorOnMissing: true,
				},
			],
		} ),
      
      new CopyWebpackPlugin( {
			patterns: [
				{
					from: nomeFileJson,
					context: 'src',
					noErrorOnMissing: true,
				},
			],
		} ),
      
      new CopyWebpackPlugin( {
			patterns: [
				{
					from: "./src/"+nomeFileJson,
               to:   "./"+nomeAutogenerato,
					transform (content, path) {
                  return autogenerateJson(content)
               }
				},
			],
		} ),
      
      
   ],   
};
 