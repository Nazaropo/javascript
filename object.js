const user = {
  name: "Dicoding",
  lastname: "Indonesia",
  age: 9,
};

console.log(user.name);
console.log(user.lastname);
console.log(user.age);

//Mengakses menggunakan object destructuring
const { name, lastname, age } = user;
console.log(name, lastname, age);

//menghapus properti dengan beberapa jenis
delete user.age;
delete user["lastname"];
console.log(user);
