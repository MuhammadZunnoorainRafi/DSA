// const match = (A, B) => {
//   const a = A.toLowerCase();
//   const b = B.toLowerCase();

//   let result = {};

//   if (a.length !== b.length) {
//     return false;
//   }

//   for (let i = 0; i < a.length; i++) {
//     result[a[i]] ? (result[a[i]] += 1) : (result[a[i]] = 1);
//   }

//   for (let i = 0; i < b.length; i++) {
//     if (!result[b[i]]) {
//       return false;
//     } else {
//       result[b[i]] -= 1;
//     }
//   }
//   console.log(result);
//   return true;
// };

// const ma = match('pak', 'apc');
// console.log(ma);

const compare = (A, B) => {
  const a = A.toLowerCase();
  const b = B.toLowerCase();
  const result = {};
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    result[a[i]] ? result[a[i]] + 1 : (result[a[i]] = 1);
  }

  for (let i = 0; i < b.length; i++) {
    // result[b[i]] ? (result[b[i]] -= 1) : false;
    if (!result[b[i]]) {
      return false;
    } else {
      result[b[i]] -= 1;
    }
  }
  console.log(result);
  return true;
};

const res = compare('pak', 'apk');
console.log(res);
