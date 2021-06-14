// //Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable

// //slice
// let arr=['a','b','c','d','e']
// console.log(arr.slice(2))
// console.log(arr.slice(2,4))
// console.log(arr.slice(-2))
// console.log(arr.slice(1,-2))
// console.log(arr.slice())

// //extracted elements actually gone from the original array means deleted from the original array
// //splice
// console.log(arr.splice(1,2))
// //from position one deleted two element
// console.log(arr)
// //Reverse
// let arr1=['a','b','c','d','e']
// console.log(arr1.reverse())
// console.log(arr1)
// //concate method
// const arr2=[1,2,3,4,5,6]
// const letters=['a','b','c','d']
// console.log(arr2.concat(letters))
// //same question using spread operator
// const arr3=[1,2,3,4,5,6]
// const letters1=['a','b','c','d']
// console.log(...arr3,...letters1)
// //join
// console.log(arr2.join(letters1))
// function addComment() {
//       var ul = document.getElementById("dynamic-list");
//       var candidate = document.getElementById("candidate");
//       var li = document.createElement("p");
//       li.setAttribute('id', candidate.value);
//       li.appendChild(document.createTextNode(candidate.value));
//       ul.appendChild(li);
//   }


//forEach loop
// let movement=[200,450,-400,300,-650,-130];
// let movements
// for(let movement of movements){
// if(movement>0){
//   console.log(`You deposited ${movement}`)
// }
// }

// Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
// Rotate array by k steps from begining
// let arr = [1,2,3,4,5,6]
// let k = arr.length - 2 // Rotating by two positions from left

// for(let i=0;i<k;i++)
// {
//   arr.unshift(arr.pop())
// }
// document.write(arr)

// Second method using array.shift() method
// let arr = [1,2,3,4,5,6]
// let k =  2 // Rotating by two positions from left

// for(let i=0;i<k;i++)
// {
//   arr.push(arr.shift())
// }
// document.write(arr)
