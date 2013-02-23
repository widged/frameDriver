/**
 * @author Marielle Lange, 2013
 * NOT part of current contract, please ask for permission before using. No support provided.
 */
define('test_testerHelper',['test_domHelper'], function(Dom){

  "use strict";

  var Helper = {};


  Helper.waitFor = waitFor;
  function waitFor(fnEvaluate, fnDone, fnFail, timeInterval, timeOut) {
    var timeStart = new Date();
    maybeResolved(fnEvaluate);
    
    function maybeResolved(fnEvaluate) {
      var timeNow = new Date();
      setTimeout(function () {
        if (fnEvaluate()) {
          fnDone();
        } else if(timeNow - timeStart > timeOut) {
          fnFail();
        } else {
          maybeResolved(fnEvaluate);
        }
      }, timeInterval);
    }
  }

  // -------------------
  //  Public interface
  // -------------------
  return Helper;
});


/*

casper writeAPI

options
back()
base64encode()
click()
clickLabel()
capture()
captureBase64()
captureSelector()
clear()
debugHTML()
debugPage()
die()
download()
each()
echo()
evaluate()
evaluateOrDie()
exists()
exit()
fetchText()
forward()
log()
fill()
getCurrentUrl()
getElementAttribute()
getElementBounds()
getElementsBounds()
getElementInfo()
getFormValues()
getGlobal()
getHTML()
getPageContent()
getTitle()
mouseEvent()
open()
reload()
repeat()
resourceExists()
run()
sendKeys()
setHttpAuth()
start()
status()
then()
thenClick()
thenEvaluate()
thenOpen()
thenOpenAndEvaluate()
toString()
userAgent()
viewport()
visible()
wait()
waitFor()
waitForPopup()
waitForSelector()
waitForResource()
waitForText()
waitUntilVisible()
waitWhileSelector()
waitWhileVisible()
warn()
withFrame()
withPopup()
zoom()

*/