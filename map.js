// const productMap = new Map([
//   ["shoes", 500],
//   ["cap", 350],
//   ["jeans", 250],
// ]);

// console.log(productMap);

const map = new Map();
map.set(1, "number one");
map.set("2", "number two");
map.delete(1);
console.log(map); // Output: undefined
//console.log(map.get(1)); // Output: number one

// const set = new Set();
// set.add(1);
// set.add('baju');
// set.add(2);
// set.add('celana');

// console.log(set); // Output: Set { 1, 'baju', 2, 'celana' }

const set = new Set();
set.add(1);
set.add(2);
set.delete(1);
console.log(set);
//cara mengakses nilai set:
//(1) menggunakan for...of
for (const number of set) {
  console.log(number);
}

//(2) menggunakan forEach
set.forEach((value) => console.log(value)); // Output: 1 2
