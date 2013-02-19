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
          .then(checkInstructions)
          .then(beginQuiz)
          .then(answerQuestions);
  }


   function checkInstructions() {
      trace("checkInstructions");
      tester.waitForElement(_dom.intro.selector, whenInstructionsLoaded);
   }

   function whenInstructionsLoaded() {
     trace("whenInstructionsLoaded");
     var $intro = tester.find(_dom.intro.selector);
     if($intro.html().substr(0, 10) === "Find out if you know the basics in".substr(0,10)) {
        trace("PASS instruction correct");
     }
     tester.done();
   }

   function beginQuiz() {
    trace("beginQuiz");
    tester.click(_dom.beginBtn.selector, whenDone);
    function whenDone() {
        trace("-- begin triggered");
        tester.done();
    }
   }

   function answerQuestions() {
    trace("answerQuestions");
    require(['../../src/jquiz/quizData'], function(Data) {
      trace("-- quizData loaded", Data);
      mockData = Data;
      answerOneQuestion();
    });
   }

   function answerOneQuestion() {
      var regex = /(<([^>]+)>)/ig; // remove tags as <br> gets converted to <br/> by some browsers
      var ques = tester.find(_dom.question.selector).html();
      var answer;
      var multiList = mockData.quiz.multiList;

      var i, list = multiList, qty = list.length, item;
      for(i = 0; i < qty; i++)
      {
        item = multiList[i];
        var same = item.ques.replace(regex, "") === ques.replace(regex, "") ? true : false;
        if(same) { answer = item.ans; }
      }
      tester.waitForElement(_dom.multiList.selector, function() {
        var $el = tester.find(_dom.multiList.selector).filter(function(index) {
          // IE6 adds spaces before string
          var ans = "" +  $(this).text();
          var regex = new RegExp("\s*" + answer + "\s*","gi");
          var empty = ans.replace(regex, "");
          return (!empty.length || empty == String.fromCharCode(160)) ? true : false;
        });
        trace("-- answer element", $el);
        tester.click($el.find('input'), whenAnswered);
        function whenAnswered() {
            trace('-- question answered');
        }

      });

   }


  return exports;




});
