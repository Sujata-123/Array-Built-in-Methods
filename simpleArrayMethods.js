//arrays methods are simply functions
//slice() method in this method we can extract the part of any array without changing the original array it does not mutate the original array
// let arr=['a','b','c','d']
// console.log(arr.slice(2))
// console.log(arr)
// console.log(typeof arr)
// //end is not included
// console.log(arr.slice(2,4))
// console.log(arr.slice(-2))
// //it will start stracting from index one it will extract everything except last 2
// console.log(arr.slice(1,-2))
// //we can use slice method to create shallow copy of any element
// console.log(arr.slice())
// //we can use spread operator to create shallow copy
// console.log([...arr])
//splice() method in this method it change the original array means it mutate the original array.
// const arr=['a','b','c','d']
// console.log(arr.splice(2))
// const arr=['a','b','c','d']
// // deleting last element and returing that element
// console.log(arr.splice(-1))
// console.log(arr)
// //In this first parameter is the from where we have to start and the second parameter is the no of element we have to splice
// console.log(arr.splice(1,2))
//reverse it mutate the original array 


// const arr=['a','b','c','d','e']
// const arr2=['j','k','l','m']
// console.log(arr.reverse())
// console.log(arr2.reverse())
// console.log(arr)


//concat
// const letters=['a','b','c','d','e']
// const arr2=[1,2,3,4,5]
// console.log(letters.concat(arr2))
// console.log([...letters,...arr2])
// //join
// console.log(letters.join('-'))
//forEach
const movement=[200,450,-400,3000,-650,-130,70,1300];
for(const movement of movements){
  if(movement>0){
    console.log(`You deposited ${movement}`);
  }else{
    console.log( `You withdrew ${Math.abs(movement)}`);
  }
}
movement.forEach(function())