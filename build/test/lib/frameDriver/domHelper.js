/**
 * @author Marielle Lange, 2013
 * NOT part of current contract, please ask for permission before using. No support provided.
 */
define('test_domHelper',['jquery', 'test_testerHelper'], function($, Test){

   var Helper = {};

// For frame
   Helper.getHTML = function(selector, $context) {
      var $el = "";
      if($context && selector) {
         $el = Helper.getElement(selector, $context);
      } else if($context) {
         $el = $context.contents();
      }
      return $el ? $el.html() : "";
   };

  Helper.getElement = function(selector, $context) {
   if(!selector) {
      return $context.contents();
   }
   return $context.contents().find(selector);
  };


  // ---------------------
  //  Public Interface
  // ---------------------
  return Helper;

});
