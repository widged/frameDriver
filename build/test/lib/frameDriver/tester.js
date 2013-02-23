/**
 * @author Marielle Lange, 2013
 * NOT part of current contract, please ask for permission before using. No support provided.
 */
define('test_tester',['test_testerHelper', 'test_frame'], function(Helper, Frame){

  var UI_TIMEOUT = 5000;

   // annoying but we need an extra level
   return function() {
   
     "use strict";

     var _thenList,
         _stepDelay = 0,
         _currentStep,
         _frame;
         
      function tester(data) {
         return tester.flush();
      }

      tester.frame = function(value) {
         if (!arguments.length) { return _frame; }
         _frame = value;
         return tester;
      };

      tester.stepDelay = function(value) {
         if (!arguments.length) { return _stepDelay; }
         _stepDelay = value;
         return tester;
      };

      tester.useFrame = function(selector) {
        function isFrameLoaded() {
            return ($(selector).length) ? true : false;
        }
        function whenTimeOut() {
          console.log("FAIL TimeOut. The page couldn't be loaded");
        }
        function whenDone() {
          _frame = new Frame();
          _frame.selector(selector);
          tester.done();
        }
        Helper.waitFor(isFrameLoaded, whenDone, whenTimeOut, 150, UI_TIMEOUT);
        return tester;
      };

      tester.then = function(fn) {
         if (!arguments.length) {
            throw "then cannot be empty";
         }
         _thenList = _thenList || [];
         _thenList.push(fn);
         return tester;
      };


      tester.done = function() {
         if(_thenList.length)
         {
          if(!_stepDelay) {
            nextStep();
          } else {
            setTimeout(nextStep,_stepDelay);
          }
         }
         function nextStep() {
            _currentStep = _thenList.shift();
            if(_currentStep) { _currentStep(); }
         }
      };


      tester.waitForElement = function(selector, fnDone) {
          function isElementLoaded() {
              return _frame.find(selector).length ? true : false;
          }
          function whenTimeOut() {
            console.log("TimeOut. The element couldn't be loaded", selector);
          }
         Helper.waitFor(isElementLoaded, fnDone, whenTimeOut, 150, UI_TIMEOUT);
         return tester;
      };

      tester.find = function(selector, fnDone) {
        return _frame.find(selector);
      };

      tester.click = function(selector, whenDone) {
        var $el = _frame.find(selector);
        $el.on('click', function(event) {
          if(whenDone) { whenDone(); }
        });
        $el.trigger("click");
      };

      tester.sendKey = function(key, whenDone) {
        var $context = _frame.find('body');
        $context.bind('keypress', function(event) {
          $context.unbind('keypress');
          if(whenDone) { whenDone(); }
        });
        var e = $.Event("keypress");
        e.which  = key.which;
        e.keyCode = key.which;
        $context.trigger(e);
      };


      // ---------------------
      //  Public Interface
      // ---------------------
      return tester;
   };

});
