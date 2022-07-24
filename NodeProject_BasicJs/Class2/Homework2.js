/**
 * URGENT - NO VERZON FIOS 
 * JUST GOT HOME FROM TRAVELING 
 * ISSUES W INTERNET 
 * 
 * Felipe Ruiz (Phil)
 * Homework-2 / strings & Concepts
 * Due Date : Tuesday Jul-05
 * 
 * 
 */
//const sentence1 = 'Hello world!';
//console.log(sentence1.length);
//function WordCounter(str) {
  //  var result1 = str.split("Hello dear, how are you doing?").length;
    //return result1;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
const sentence1 = 'Hello dear, how are you doing?';
//const sentence1 = 'Felipe J. Ruiz (Phil)'
let result1 = 0;
let sentence2 = sentence1.length;
console.log(sentence2);
if (sentence2 >= 10)
    result1 = 15;
else
    result1 = 25;
console.log(`result1 -> ${result1}`);

//const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

const sentence3 = "heAlth wAs eArlier said to be the AbIlitY of the bOdY funcTiOnInG WElL.";
let sentence_Replace_All_a_Z = sentence3.replace(/A/g, 'Alpha');
console.log(sentence_Replace_All_a_Z);



//const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */
const sentence4 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence5 = sentence4.length;
console.log(sentence5);
let healthMsgs = 'HeAlth wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.';
let indexof_h = healthMsgs.indexOf('h');
console.log(`\nindexof_H ${indexof_h}`);
let indexof_B = healthMsgs.indexOf('b');
console.log(`\nindexof_Body ${indexof_B}`);
let lastIndexof_Body = healthMsgs.lastIndexOf('body');
console.log(`\nlastIndesxof_Body ${lastIndexof_Body}`);
let bodyName = 'bOdY'
let bodyNameIncludes_bO = bodyName.includes('bOdY');
console.log(`\nbodyNameIncludes_bO ${bodyNameIncludes_bO}`);