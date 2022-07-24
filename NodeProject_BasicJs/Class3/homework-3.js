/**
 * Felipe Ruiz (Phil)
 * Technosoft Summer 2022
 * JS Homework-1 
 * 
 * 
 * 
 * 
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */


// F -> C
// T(°C) = (T(°F) - 32) × 5/9
let fTemp1 = parseFloat(90);
let cTemp1 = parseFloat((fTemp1 - 32) * 5/9).toFixed(2);
console.log(`\n${fTemp1}°F is equal to ${cTemp1}°C`);

// F -> k 
// T(K) = (T(°F) + 459.67)× 5/9
let fTemp2 = parseFloat(77);
let kTemp1 = parseFloat((fTemp2 + 459.67) * 5 / 9).toFixed(2);
console.log(`\n${fTemp2}°F is equal to ${kTemp1} K`);

// C -> F 
// T(°F) = T(°C) × 9/5 + 32
let cTemp2 = parseFloat(26);
let ftemp3 = parseFloat((cTemp2 * 9 / 5) + 32).toFixed(2);
console.log(`\n${cTemp2}°C is equal to ${ftemp3}°F`);


//C -> K 
//T(K) = T(°C) + 273.15
let cTemp3 = parseFloat(27);
let kTemp2 = parseFloat(cTemp3 + 273.15).toFixed(2);
console.log(`\n${cTemp3}°C is equal to ${kTemp2} K`);

//K -> F 
//T(°F) = T(K) × 9/5 - 459.67
let kTemp3 = parseFloat(300.15);
let fTemp4 = parseFloat(((kTemp3 * 9 / 5) - 459.67)).toFixed(2);
console.log(`\n${kTemp3}K is equal to ${fTemp4}°F `);

//K -> C 
//T(°C) = T(K) - 273.15
let kTemp5 = parseFloat(300.15);
let cTemp4 = parseFloat(kTemp5 - 273.15).toFixed(2);
console.log(`\n${kTemp5}K is equal to ${cTemp4}°C`);











