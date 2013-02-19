/**
 * @exports App
 */

window.trace = function(msg) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  if(args && args[0]) {
    console.log(msg, args);
  } else {
    console.log(msg);
  }
};

var libPath = './lib/';
window.require.config({
  urlArgs: "bust=v61", // use this to force a reload of all js files
  paths: {
    jquery                       : libPath + 'jquery-1.8.2.min',
    jquery_ui                    : libPath + 'jquery-ui-1.10.0',
    test_tester                  : libPath + 'frame-tester/tester',
    test_testerHelper            : libPath + 'frame-tester/testerHelper',
    test_frame                   : libPath + 'frame-tester/frame',
    test_frameHelper             : libPath + 'frame-tester/frameHelper',
    test_domHelper               : libPath + 'frame-tester/domHelper'
 }
});

// https://browserling.com/queue?uri=http%3A%2F%2Ftunnel.browserling.com%3A50011&browser=firefox&version=15.0

window.require(["jquery"], function($) {
    var selectedScenario;

  $.ajaxSetup ({
              // Disable caching of AJAX responses
              cache: false
          });


    $("#scenarioList").change(function () {
      trace("scenario changed");
      runSelectedScenario();
    });

    $('#runScenario').click(function() {
      trace("scenario execution requested");
      runSelectedScenario();
    });


    function runSelectedScenario() {
      selectedScenario = $('#scenarioList').val();
      selectedDelay    = $('#delayList').val();
      trace("scenario loading", selectedScenario);
      window.require(['scenarios/' + selectedScenario], function(Scenario) {
        trace('scenarioLoaded', Scenario.name);
        Scenario.run({stepDelay: selectedDelay});
      } );
    }

});

/*

deprecated()

    $('#loadUrl').click(function() {
      urlToTest = $("#urlToLoad").val();
      loadInFrame(urlToTest);
    });



*/