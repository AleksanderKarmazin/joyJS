const copyArray = require('./CoppyArrayFunc')
const arr = require('./data.json')
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */


// sourceArray = [1,2,3,4,5]
// injectArray =[0, 9,9,9,5,456,8,56,8456,85,468,]
// console.log('sourceArrayBEFORE',sourceArray)
// console.log('injectArrayBEFORE',injectArray)
// result = copyArray(sourceArray,injectArray)

// console.log('result',result)



// console.log('sourceArrayAFTER',sourceArray)
// console.log('injectArrayAFTER',injectArray)
// injectArray.forEach(element => {
//     console.log('injectArrayAFTER',element)
// });

// injectArray.map(element => {
//     console.log('injectArrayAFTER_____MAP',element)
// })


let res = copyArray(arr.results[0].incorrect_answers)


console.log('JSON',arr.results[0].incorrect_answers)
console.log('RED',res)