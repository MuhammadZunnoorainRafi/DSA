// <---------------------| Anagram Method ONE |--------------------->
// function anagramMethodOne(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     const correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// console.log(anagramMethodOne([1, 2, 3], [1, 4, 9]));

// <---------------------| Anagram Method TWO |--------------------->

// function anagramMethodTwo(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let arrOneObj = {};
//   let arrTwoObj = {};
//   for (let val of arr1) {
//     arrOneObj[val] = (arrOneObj[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     arrTwoObj[val] = (arrTwoObj[val] || 0) + 1;
//   }
//   console.log({ arrOneObj, arrTwoObj });
//   for (let key in arrOneObj) {
//     if (arrTwoObj[key ** 2] !== arrOneObj[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(anagramMethodTwo([2, 4, 4, 8], [16, 64, 16, 4]));

// <=====================| Anagram For String |======================>

// <---------------------| Anagram For String Method One |--------------------->

function anagramForStrings(strOne, strTwo) {
  if (strOne.length !== strTwo.length) {
    return false;
  }

  let objOne = {};
  let objTwo = {};

  for (let val of strOne) {
    objOne[val] = (objOne[val] || 0) + 1;
  }

  for (let val of strTwo) {
    objTwo[val] = (objTwo[val] || 0) + 1;
  }

  for (let key in objOne) {
    if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
}

console.log(anagramForStrings('helloworld', 'worldhello'));
