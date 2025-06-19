// Kỹ thuật destructuring (giải cấu trúc) trong JavaScript là một cú pháp giúp tách giá trị từ mảng hoặc thuộc tính từ đối tượng và gán chúng vào các biến một cách ngắn gọn, dễ đọc.

// Ví dụ 1: Hoán đổi giá trị của hai biến
let a = 10;
let b = 20;
[a, b] = [b, a]; // Sử dụng destructuring để hoán đổi giá trị
console.log(a); // 20
console.log(b); // 10

// Ví dụ 2: Hoán đổi vị trí của các phần tử trong mảng
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]]; // Hoán đổi màu đỏ và màu trắng
console.log(colors); // ["white", "green", "blue", "black", "red"]

// Ví dụ 3: Gán phần tử mảng vào biến
const [firstColor, secondColor, ...restColors] = colors; // Gán các phần tử mảng vào biến
console.log(firstColor); // "white"
console.log(secondColor); // "green"
console.log(restColors); // ["blue", "black", "red"]

// Ví dụ 4: Trích xuất thuộc tính từ đối tượng và gán vào biến
const person1 = {   // Đối tượng person1
    name: "John",
    age: 30
}
const person2 = { // Đối tượng person2
    name: "Jane",
    age: 25,
    job: "Developer"
}
// const { name, age } = person1; // Sử dụng destructuring để lấy thuộc tính từ đối tượng
// console.log(name); // "John"
// console.log(age); // 30


// Trường hợp đối tượng 1 không có thuộc tính job, ta có thể gán giá trị mặc định cho nó
// const { name, age, job="Unemployed"} = person1;
// console.log(name); // "John"
// console.log(age); // 30
// console.log(job); // "Unemployed"


// Ví dụ 5: Destructing với hàm và tham số
const displayPerson = ({name, age, job="Unemployed"}) => {
    console.log(`Name: ${name}, Age: ${age}, Job: ${job}`);
}
displayPerson(person2); // Gọi hàm với đối tượng person2
//Kết quả: Name: Jane, Age: 25, Job: Developer
displayPerson(person1); // Gọi hàm với đối tượng person1
//Kết quả: Name: John, Age: 30, Job: Unemployed
