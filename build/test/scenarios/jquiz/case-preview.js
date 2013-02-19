/**
 * @author Marielle Lange, 2013
 * NOT part of current contract, please ask for permission before using. No support provided.
 */
define(['jquery', 'test_tester'], function($, Tester){

   var exports = {name: 'jquiz/case-lite'};

   var trace = window.trace;
   var frameSelector = "#testerFrame",
       settings,
       tester,
       mockData;

   var _dom          =   {
     quiz      : {selector: '#quizArea'},
     intro     : {selector: '.q-intro-info'},
     beginBtn  : {selector: '.q-begin-btn'},
     helpbtn   : {selector: '.q-help-btn'},
     helpinfo  : {selector: '.q-help-info'},
     question  : {selector: '.q-ques'},
     userinput : {selector: '.userInputArea'},
     multiList : {selector: '.userInputArea .q-ol-li'},
     checkbtn  : {selector: '.q-check-btn'},
     nextbtn   : {selector: '.q-next-btn'}
   };


   exports.run = function(config) {
    settings = config;
    loadInFrame('../../src/jquiz/index.html');
   };

  function loadInFrame(url) {
    if(!url) { return; }

    trace("url load request", url);
    var $frame = $(frameSelector);

    $frame.ready(function() {
      trace("url load complete", url);
      // the following doesn't work as expected.
      $frame[0].contentWindow.console = window.firebug || window.console;
      whenFrameLoaded();
    });
    $frame.attr('src', url);
  }

  function whenFrameLoaded() {
    trace("whenFrameLoaded");
    start();
  }

  function start() {
    trace("start");
    tester = new Tester();
    trace("-- tester", tester);
    tester.useFrame(frameSelector)
          .stepDelay(settings.stepDelay)
          .then(doNothing)
          .then(beginQuiz)
          .then(answerQuestions);
  }


   function doNothing() {
      trace("doNothing");
   }


  return exports;




});
