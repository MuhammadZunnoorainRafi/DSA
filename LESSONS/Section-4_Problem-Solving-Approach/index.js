function counter(str) {
  const obj = {};
  for (let char of str.toLowerCase()) {
    if (/[a-z0-9]/.test(char)) {
      obj[char] > 0 ? obj[char]++ : (obj[char] = 1);
      // obj.str > 0 ? obj.str++ : (obj.str = 1);
    }
  }
  return obj;
}

// counter('hello');
console.log(counter('HeLlo hi 123 !%$^'));

console.log('.');
console.log('.');
console.log('.');
console.log('.');
console.log('declaring object types :-');
console.log('');

let obj1 = { a: 'A', b: 'B', c: 'C' };
let obj2 = { a: 'A', b: 'B', c: 'C' };
let obj3 = { a: 'A', b: 'B', c: 'C' };
let str = 'hello';
obj1[str] = 'D';
obj2['str'] = 'D';
obj3.str = 'D';
console.log('Obj1[str] = ', obj1);
console.log("Obj2['str'] = ", obj2);
console.log('Obj3.str = ', obj3);
