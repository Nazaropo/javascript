const user = {
  name: "Dicoding",
  lastname: "Indonesia",
  age: 9,
};

console.log(user.name);
console.log(user.lastname);
console.log(user.age);

//Mengakses menggunakan object destructuring
const { name, lastname, age } = user; // Mengambil nilai dari properti name, lastname, dan age
console.log(name, lastname, age); 

//menghapus properti dengan beberapa jenis
delete user.age; // Menghapus properti age
delete user["lastname"]; // Menghapus properti lastname
console.log(user);

//array
const foo = Array.from('foo'); // Membuat array dari string 'foo'
console.log(foo); // Output: ['f', 'o', 'o']

const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users); // Mengcopy isi dari array users ke array customer
console.log(customer);

const food = ['Pisang', 'Mangga', 'Pepaya', 'Salak'];
food[2] = 'Jeruk'; // Mengganti 'Pepaya' menjadi 'Jeruk'
food.push('Kiwi'); // Menambahkan 'Kiwi' ke array
delete food[3]; // Menghapus data dari array
food.splice(3, 1); // Menghapus elemen dan data dari array(3, 1) artinya menghapus 1 elemen dari index ke 3
food.shift(); // Menghapus elemen pertama dari array
food.pop(); // Menghapus elemen terakhir dari array
food.reverse(); // Membalik urutan array
console.log(food); // Output: Jeruk sesuai no array
console.log(food[2]); // Output: salak sesuai no array