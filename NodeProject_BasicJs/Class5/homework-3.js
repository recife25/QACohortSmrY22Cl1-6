/**
 * Felipe J Ruiz (Phil)
 * homework-3.js 
 *
 *  Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
//let countryName = 'USA USA';
let countryName = 'United States of America'
const countryNameL = countryName.split('').length;
console.log(`Q1 - length of name w/o string-length ${countryNameL}`);

 /**
  * Q2:
  * Count the number of words in the sentence
  * call the split()method it includes spaces
  * split() method returns array here access length property 
  * \w between one & other word char
  * /g global keep counting after 1st match
  */
// 
numWords = ('If the function returns a truthy value, the element gets added to the array'.split(' '));
countWords = numWords.length;
console.log(`Q2 - Count the number of words > ${countWords}`);

 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  * 
  */

let statement3 = 'have a great day'
let split_word0 = (statement3.split(' '));
let word0 = split_word0[0].substring(0, 1).toUpperCase();
let word_0 = split_word0[0].substring(1).toLowerCase();
let concat_words0 = word0.concat(word_0);

let split_word1 = (statement3.split(' '));
let word1 = split_word0[1].substring(0, 1).toUpperCase();
let word_1 = split_word1[1].substring(1).toLowerCase();
let concat_words1 = word1.concat(word_1);
 
let split_word2 = (statement3.split(' '));
let word2 = split_word0[2].substring(0, 1).toUpperCase();
let word_2 = split_word0[2].substring(1).toLowerCase();
let concat_words2 = word2.concat(word_2);
 
let split_word3 = (statement3.split(' '));
let word3 = split_word0[3].substring(0, 1).toUpperCase();
let word_3 = split_word0[3].substring(1).toLowerCase();
let concat_words3 = word3.concat(word_3);
console.log(`Q3 - uppercase first letters : ${concat_words0}  ${concat_words1}  ${concat_words2}  ${concat_words3}`);
 
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
let statement = 'have a great day';
let split_result = statement.split(' ');
console.log(split_result);
let words0 = split_result[0].substring(0, 1).toUpperCase();
let words1 = split_result[1].substring(0, 1).toUpperCase();
let words2 = split_result[2].substring(0, 1).toUpperCase();
let words3 = split_result[3].substring(0, 1).toUpperCase();
let concat_abbrev = words0.concat(words1, words2, words3);
console.log(`Q4 - abbreviation : ${concat_abbrev}`);


  


  




