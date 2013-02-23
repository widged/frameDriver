/**
 * @author Marielle Lange, 2013
 * NOT part of current contract, please ask for permission before using. No support provided.
 */
define('test_frameHelper',['jquery', 'test_testerHelper'], function($, Test){


   // The Helper part is really like the prototype of a javascript object. It stores all the functions that
   // are shared between object instances.
   // Storing these functions outside of an instance helps minimize the size of said instance.
   // The reason to go for the Helper solution instead of the prototype one is that the functions are easier to test as
   // there is no need to reference this. If functions have no access to this, then there is less opportunity for them
   // to create side effects.
   var Helper = {};

   Helper.$getFrame = function() {
     return $("#iframe");
   };

   Helper.resizeFrame= function(frame, newWidth) {
      frame.width = newWidth;
   };

  Helper.reloadFrame = function(frame) {
    frame.contentWindow.location.reload(true);
  };

  Helper.getFrameLocation = function() {
    return frame.contentDocument.location;
  };

   Helper.getHTML = function(selector, $frame) {
      var $el = "";
      if($frame && selector) {
         $el = Helper.getElement(selector, $frame);
      } else if($frame) {
         $el = $frame.contents();
      }
      return $el ? $el.html() : "";
   };

  Helper.getElement = function(selector, $frame) {
   if(!selector) {
      return $frame.contents();
   }
   return $frame.contents().find(selector);
  };

  // ---------------------
  //  Public Interface
  // ---------------------
  return Helper;

});
