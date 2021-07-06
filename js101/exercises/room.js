let readlineSync = require("readline-sync");

const SQUARE_FEET_TO_SQUARE_METERS = 10.76939;


/**
 * Get user input (width or length)
 * @param {String} dimension length or width, to be used in the prompt
 * @return {String} width or length to 2 decimal points
 */
function getMeasurement(dimension) {

  console.log('Enter the ' + dimension + ' of the room in meters:');
  let measurement = Number( readlineSync.prompt() );

  return measurement.toFixed(2);

}

/**
 * Calculate area of the room
 * @param {Number} length length of the room
 * @param {Number} width width of the room
 * @param {Boolean} isSquareFeet true if calculating sq feet, false if calculating sq meter
 * @return {Number} area
 */
function calcArea(length, width, isSquareFeet) {

  return isSquareFeet ? length * width * SQUARE_FEET_TO_SQUARE_METERS : length * width;

}

let length = getMeasurement('length'); 
let width = getMeasurement('width'); 

console.log(`The area of the room is ${calcArea(length, width, false)} square meters (${calcArea(length, width, true)} square feet).`)