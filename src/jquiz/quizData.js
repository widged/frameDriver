/**
 * @author Marielle Lange, 2013
 * NOT part of current contract, please ask for permission before using. No support provided.
 */
define(['jquery'], function($){

	var exports = {};

	var undefVar, answerInfo = ["When == is called, type casting is performed. ", "=== does no type casting."],
	    arr = [1, 2, 3, 4];
      	arr["five"] = 5;

	exports.quiz = {
	multiList: [
		{
			ques: "Which is not a javascript keyword.",
			ans: "local",
			ansSel: ["new", "delete"]
		},
		{
			ques: "What function is x?<br/><code>arr = [ 1,2,3,4 ];<br/>arr.x();<br/>alert(arr) //[2,3,4]</code>",
			ans: "shift",
			ansSel: ["pop", "push", "unpush"]
		}
	],
	multi: [
		{
			ques: "!!-1 = ?",
			ans: ( !! -1),
			ansSel: ["error", "false"],
			ansInfo: "!!x is the same as Boolean(x).<br/>More info on <a href='http://www.jibbering.com/faq/faq_notes/type_convert.html' target='_blank'>Type conversion</a>"
		}
	],
	tf: [
		{
			ques: "(1 == '1') = ?",
			ans: (1 == '1'),
			ansInfo: answerInfo[0]
		},
		{
			ques: "(1 === '1') = ?",
			ans: (1 === '1'),
			ansInfo: answerInfo[1]
		},
		{
			ques: "(0.1 + 0.2)",
			ans: (0.1 + 0.2),
			ansSel: ["0.3"],
			ansInfo: "(0.1 + 0.2) = " + (0.1 + 0.2)
		},
		{
			ques: "(0.1 + 0.1) == 0.2",
			ans: ((0.1 + 0.1) == 0.2),
			ansInfo: "(0.1 + 0.1) = " + (0.1 + 0.1)
		},
		{
			ques: "What value is returned?<br/><code> function(undefVar){<br/>return undefVar == null;<br/>};<br/></code>",
			ans: (undefVar == null),
			ansInfo: answerInfo[0] + "Both 'undefined' and 'null' return false when converted to a boolean."
		},
		{
			ques: 'The following returns what value?<br/><code>isNaN( "1" );</code>',
			ans: isNaN("1"),
			ansInfo: 'Type conversion was performed.'
		}
	],
	fill: [
		{
			ques: "What is the value of x?<br/><code>x = '1'+2+3</code>",
			ans: ("1" + 2 + 3)
		},
		{
			ques: "What is the value of x?<br/><code>x = 9 + 8 + '7'</code>",
			ans: (9 + 8 + "7")
		},
		{
			ques: "<code>arr = [ 1, 2, 3, 4 ]; <br/>arr[ 'five' ] = 5;</code><br/>arr.length == ?",
			ans: arr.length
		}
	]
	}

	exports.options = {
	help: "Try...<ul><li><a href='https://developer.mozilla.org/en/a_re-introduction_to_javascript' target ='_blank'>A Re-introduction to Javascript</a><li><a href='http://www.hunlock.com/blogs/Mastering_Javascript_Arrays' target='_blank'>Mastering Arrays</a></li><li><a href='http://www.jibbering.com/faq/faq_notes/type_convert.html' target='_blank'>Type casting</a></li></ul>",
	intro: "Find out if you know the basics in <i>Javascript</i>.<br/>Follow the link back to make your own quiz.",
	allRandom: false,
	title: "Basic Javascript Quiz1"
	};


  return exports;


});




