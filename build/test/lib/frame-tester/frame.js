/**
 * @author Marielle Lange, 2013
 * NOT part of current contract, please ask for permission before using. No support provided.
 */
define('test_frame',['jquery', 'test_frameHelper'], function($, Helper){

   // annoying but we need an extra level
   return function() {
   
     "use strict";

      var _$element,
          _element,
          _selector,
          _width = 1024;
         
      function frame() {
         return frame.contents();
      }

      frame.getHTML = function(selector) {
         return Helper.getHTML(selector, _$element);
      };

      frame.debugHTML = function(selector) {
         console.log(Helper.getHTML(selector, _$element));
      };

      frame.selector = function(string) {
         if (!arguments.length) return _selector;
         _selector = string;
         _element = document.getElementById(_selector);
         _$element = $(_selector);
         return frame;
      };

      frame.contents = function() {
         return _$element;
      };

      frame.find = function(selector) {
         return $(_selector).contents().find(selector);
      };


      frame.element = function(domElement) {
         if (!arguments.length) return _element;
         _element = domElement;
         return frame;
      };


      frame.width = function(number) {
         if (!arguments.length) return _width;
         _width = number;
         // resizeFrame(frame, _width);
         return frame;
      };


      // ---------------------
      //  Public Interface
      // ---------------------
      return frame;
   };

});
