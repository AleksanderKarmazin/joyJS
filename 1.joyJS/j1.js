const arr = [1,2,3,4,5,6,7,8,9,10]
const arr2 = [1,2,3,4,5,6,7,8,9,10]


const ar = 'ar'




//Проверяет есть ли значение 3 в массиве
// if (3 in arr) {
//     console.log('yes');
// } else {
//     console.log('no');
// }


// Проверяте является ли это массивом 
// if (Array.isArray(ar)) {
//     console.log('yes');
// } else {
//     console.log('no');
// }


// Добавляет все элементы массива в строку
// в качестве параметра принимает разделитель 
// который в виде строки вставляет между элементами массива 
// console.log(arr.join('-seporator-'));


// Меняет порядок следования элементов в массиве на обратный 
// console.log(arr);
// arr.reverse()
// console.log(arr);
// arr.reverse()
// console.log(arr);


// const ABC = ['h','r','ew','d','hre','b','sf','gh','ewtr','hweht','ds','fhds','f','dsf','sdf','g']
// // сортировка по алфовиту
// console.log(ABC); 
// ABC.sort()
// console.log(ABC);
// ABC.sort((a,b)=>{
//     console.log(a+'|'+b);
//     return b-a
// })
// console.log(ABC);


// Слияние значений нескольких массивов 
// const concat = arr.concat(
// arr , 
// 'здесь закончился первый массив ',
//  arr2, 
// 'здесь закончился 2 массив ',
//  1,2,3,4,5,6,6,7,8,9,0,0, 
// 'здесь закончился  массив 3' 
//  )


// console.log(concat);


// Возвращает фрагмент или подмассив указанного массива 
// В качестве параметров принимает начало и конец массива по индексам 
// const fragmentOfArr = arr2.slice(3,-2)
// console.log(fragmentOfArr);




// Удаляет элементы из массива 
// начинает с указанного индекса и отсчитывает колличество элементов
// ИЗМЕНЯЕТ ТОЛЬКО СУЩЕСТВУЮЩИЙ МАССИВ  
// console.log(arr);

// i1 = вмещает в себя фрагмент который удаляют после 4 индекса включительно 
// arr = изменённый массив до 4 индекса не включительно 
// const i1 = arr.splice(4,10)
// console.log('i1',i1);
// console.log('i1 = arr',arr);

// const i5 = arr.splice(5,10)
// console.log('i5',i5);
// console.log('i5 = arr', arr);


// const i7 = arr.splice(7,10)
// console.log('i7',i7);
// console.log('i7 = arr',arr);


//Добавление элементов с индекса 7 вставка новых  
// const newArr = arr2.slice(3,-3)



// const replase = arr.splice(7,10, 'A','B','C', newArr[0], newArr[0],newArr[0],newArr[0], )
// console.log('replase', replase);
// console.log('replase = arr',arr);


// const newArr = arr2.copyWithin(5,-5)
// const replase = arr.splice(7,10,newArr)
// console.log('replase', replase);
// console.log('replase = arr',arr);


//Добавление элементов в конец массивов 
// const addToArr = arr.push(11,12,13,14,15)
// console.log(arr);
// console.log(addToArr);

//Удаление последнего элемента 
// const l = arr.pop()
// console.log(arr);
// console.log(l);



// Добавление элементов в начало массива 
// const l = arr.unshift('A','B','C')
// console.log(arr);
// //Возвращает длинну массива 
// console.log(l);


// Удаление первый элемент в начале массива 
// const l = arr.shift()
// console.log(arr);
// //Возвращает удалённый элемент
// console.log(l);


// array.forEach(element => {
    
// });

// arr.forEach(element => {
//     const newEl =  element*element
//     console.log(newEl);
// });

// arr.forEach((element) => {
//     const newEl =  element*element
//     console.log(newEl);
// });

// arr.forEach(function(element)  {
//     const newEl =  element*element
//     console.log(newEl);
// });

// IMPORTENT For EACH
//v - значение элемента массива 
//i - индекс  элемента массива 
//arr - сам массив 
// arr.forEach(function(v,i,arr)  {
//     arr.push(ar)
//     console.log(v);
//     console.log(i);
//     console.log(arr);

// });
// console.log(arr);

// arr.forEach(function(v,i,arr)  {
//     // arr[i] = v + 1
//     arr[i] = v * v
//     console.log(`${v + '*' + v + '='+ arr[i] }`);
// });
// console.log(arr);


// MAP
// Возвращает массив значений, которые возвращаются вложенной функцией 
// Функция должна иметь return 
// map возвращает новый массив 


// const res = arr.map(function(v,i,arr)  {
//     const mapRes = v * v 
//     return mapRes
// });
// console.log(res);
// [
//     1,  4,  9, 16,  25,
//    36, 49, 64, 81, 100
//  ]

// // только значения которые дадут труе поподут в массив res 
// const res = arr.filter(function(v,i,arr)  {
//         const filterRes = v > 5
//         return filterRes
//     })

//     console.log(res);




// в массиве среди ВСЕХ  элементов есть те у которых значение меньше 10 
// const res = arr.every(function(v,i,arr)  {
//     const filterRes = v < 10
//     return filterRes
// })

// console.log(res);

// в массиве среди ВСЕХ элементов есть те у которых индекс  меньше 9
// const res = arr.every(function(v,i,arr)  {
//     const filterRes = i < 9
//     return filterRes
// })

// console.log(res);


// Хотябы 1 элемент выполняет условие 
// const res = arr.some(function(v,i,arr)  {
//         const filterRes = v > 53
//         return filterRes
//     })

//     console.log(res);




// REDUCE 
// const res = arr.reduce(function(x,y)  {
//         return x+y
// },500)
// console.log(res);


