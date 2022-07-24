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
console.log(`\nSentence1 : The lenght of sentence-1 equals :${sentence2}`);
sentence2 = sentence2 >= 10 ? result1 = 15 : result1 = 25; 
console.log(`result1 ${result1}`);

//const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

const sentence3 = "heAlth wAs eArlier said to be the AbIlitY of the bOdY funcTiOnInG WElL.";
let sentence_Replace_All_a_Z = sentence3.replace(/A/g, 'Alpha');
console.log(`\nSentence-2 : a/A replace with Alpha : ${sentence_Replace_All_a_Z}`);



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
//3.1 - The length of sentence-3
const sentence4 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence5 = sentence4.length;
console.log(`\nSentence-3.1 : The length of sentence-3 equals :${sentence5}`);
//3.2 - Does sentence-3 starts with 'health' (ignore cases)
let checkStarts = 'health';
let healthlowerCase = checkStarts.toLowerCase();
let sentence3_Lowercase = sentence3.toLowerCase();
let includeresult = sentence3_Lowercase.startsWith(healthlowerCase);
console.log(`Sentence-3.2 : startsWith "${checkStarts}" : ${includeresult}`)

//3.3 - Does sentence-3 contains with 'Body" (ignore cases)
checkContains = 'Body';
let bodyupperCase = checkContains.toUpperCase();
let sentence3_upperCase = sentence3.toUpperCase();
let includeResult = sentence3_upperCase.includes(sentence3_upperCase);
console.log(`Sentence-3.3 : contains "${checkContains}" : ${includeResult}`);

//3.4 Index of 'Body' in sentence-3
let indexBody = 'Body';
let bodyLowerCase = indexBody.toLowerCase();
let indexof_Body = bodyLowerCase.indexOf('Body');
let indexof_Body1 = bodyLowerCase.indexOf('y');
console.log(`Sentence-3.4 : indexof 'Body' "${indexof_Body}" indexof 'y' "${indexof_Body1}"`);

//3.5 last-character in sentence-3
const sentence6 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let lastChar = sentence6.charAt(-1);
console.log(`Sentence-3.5 : lastChar ${lastChar}`);

//3.6 word 'Body' is present only once T/F 
let s3LowerCase = sentence3.toLowerCase();
let word_Body = 'Body';
let pattern = word_Body.toLowerCase();
let indexOfBody = s3LowerCase.indexOf();
let lastindexofBody = s3LowerCase.lastIndexOf();
indexOfBody === lastindexofBody && indexOfBody >= 0;
console.log(`Sentence-3.6 : ${indexOfBody} and ${lastindexofBody}`);







 














