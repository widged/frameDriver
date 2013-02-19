var libPath = '../../src/embed/js/';
require.config({
  urlArgs: "bust=v4", // use this to force a reload of all js files
  paths: {
    scheduleEvent     : libPath + 'widged/components/scheduleEvent'
  }
});

/*
require(["experimental_ajaxProvider"], function(Provider) {
  Provider.setBaseUrl("http://localhost:3001/gentVocab/experimental/src/gno/");
});
*/