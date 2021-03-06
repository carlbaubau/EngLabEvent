/*******************
VISUALIZZA EVENTI
Questo controller si occuperà di gestire tutta la logica di visualizzazione della lista degli eventi e alcune semplici operazioni su di essa.
- Eliminazione evento
- Chiamata a pagina aggiunti evento
*/


(function() {
  'use strict';

  angular
    .module('engLabEvents')
    .controller('visualizzaEventi', visualizzaEventi);

  visualizzaEventi.$inject = ['$rootScope'];

  /* @ngInject */
  function visualizzaEventi($rootScope) {
    var ctrl = this;


    /*
      ATTRIBUTI
     */
    //la lista degli eventi
    ctrl.eventi=$rootScope.eventi; //rootScope lo usiamo solo finchè non faremo i service!!

    /*
    Variabili di flusso
     */


    /*
      FUNZIONI
     */

  }
})();
