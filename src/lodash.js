let property=require('lodash');

let arr1=["January","February","March","April","May","June","July","August","September","October","November","December"];
// console.log(property.chunk(arr1,3))

const arr2=[1,3,5,7,9,11,13,15,17,19];
// console.log(property.tail(arr2));

const arr3=property.union([2,5,4,2,7],[16,65,8,32,74],[61,46,16,74,61],[14,56,46,96,61],[65,74,81,96,23]);
// console.log(arr3);

const keyValue=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
// console.log(property.fromPairs(keyValue));

function concise(){
    console.log(property.chunk(arr1,3))
    console.log(property.tail(arr2))
    console.log(arr3)
    return(property.fromPairs(keyValue))
}
// concise()


module.exports.problem4=concise