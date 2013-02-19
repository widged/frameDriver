var libPath = '../embed/js/';
require.config({
  urlArgs: "bust=v3", // use this to force a reload of all js files
  paths: {
    jquery             : libPath + 'jquery/jquery-1.8.2.min',
    jquiz              : libPath + 'jQuizMe/jQuizMe-2.2.1.min'
  }
});

require(["jquery"],function($) {

   require(["jquiz"],function($quiz) {

      require(["quizData"],function(Quiz) {
         if(!Quiz) { console.log("quiz data not found"); }
         $("#quizArea").jQuizMe(Quiz.quiz, Quiz.options);
      });
   });
});

