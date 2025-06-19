// Toán tử spread (...) trong JavaScript được dùng để "trải" các phần tử của mảng, đối tượng, hoặc iterable (như chuỗi) ra từng phần riêng biệt. Nó giúp việc thao tác dữ liệu trở nên ngắn gọn, linh hoạt và dễ đọc hơn.

//Công dụng chính:
// Sao chép mảng hoặc object
// Kết hợp mảng hoặc object
// Thêm, chỉnh sửa dữ liệu trong mảng hoặc object
// Truyền tham số vào hàm

const numbers = [1, 2, 3, 4, 5];
const person = { name: "Alice", age: 25 };

// Ví dụ 1: Sao chép mảng, object
const number2 = [...numbers]; // Sử dụng spread operator để sao chép mảng
console.log(number2); // [1, 2, 3, 4, 5]

const person2 = { ...person }; // Sao chép object
console.log(person2); // { name: "Alice", age: 25 }

// Ví dụ 2: Kết hợp mảng
const moreNumbers = [6, 7, 8];
const combinedNumbers = [...numbers, ...moreNumbers]; // Kết hợp hai mảng
console.log(combinedNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

const person3 = {job: "Engineer"};
const combinedPerson = { ...person, ...person3 }; // Kết hợp hai object
console.log(combinedPerson); // { name: "Alice", age: 25, job: "Engineer" }

// Ví dụ 3: Thêm, chỉnh sửa phần tử vào mảng, object
// Thêm phần tử vào mảng
const newNumbers = [0, ...numbers, 6]; // Thêm phần tử 0 vào đầu và 6 vào cuối mảng
console.log(newNumbers); // [0, 1, 2, 3, 4, 5, 6]
// Thêm phần tử và update thuộc tính vào object
const updatedPerson = { ...person, age: 26, job: "Developer" }; 
console.log(updatedPerson); // { name: "Alice", age: 26, job: "Developer" }


// Ví dụ 4: Truyền tham số vào hàm
const sum = (a, b, c) => a + b + c; // Hàm tính tổng ba số
const numbersToSum = [1, 2, 3];
const total = sum(...numbersToSum); // Sử dụng spread operator để truyền tham số
console.log(total); // 6
