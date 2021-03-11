
const a = 'sasha'

const arr = []
const arr2 = [1,2,3,4,5,6, a]


const arr3 = [1,2,3,4,5,6, a ]
const arr4 = [1,2,3,4,5,6, a, arr2]

// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

arr4[100] = 100
const arr12 = new Array()
const arr13 = new Array(5)
const arr14 = new Array(1,2,3,4,5,6, a, arr2, 2, 23,34,4,5,4)
// console.log('blanck');
// console.log(arr12);
// console.log(arr13);
// console.log(arr14[7]);


for (i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}

// const k = Object.keys(arr4)

// for (i = 0; i < k.length; i++) {
//     console.log( k[i] +'=>' + arr4[i]);
// }