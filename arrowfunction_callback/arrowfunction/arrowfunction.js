// Arrow Function là cú pháp viết hàm rút gọn
// Cú pháp cơ bản:
// const tenHam = (thamSo) => {thân hàm};


//---------------- PHÂN LOẠI ----------------//

// 1. Arrow Function không tham số
const sayHello = () => {
    console.log("Hello, World!");
}
console.log("\nLoại 1: Arrow Function không tham số");
console.log(sayHello());

// 2. Arrow Function có một tham số
const greet = name => {
    console.log(`Hello, ${name}!`);
}
console.log("\nLoại 2: Arrow Function có một tham số");
console.log(greet("Alice"));

// 3. Arrow Function có nhiều tham số
const add = (a, b) => {
    return a + b;
}
console.log("\nLoại 3: Arrow Function có nhiều tham số");
console.log(add(5, 10));

// 4. Arrow Function có tham số mặc định
const multiply = (a, b = 1) => {
    return a * b;
}
console.log("\nLoại 4: Arrow Function có tham số mặc định");
console.log(multiply(5)); 

// 5. Arrow Function không có thân hàm
const square = x => x * x;
console.log("\nLoại 5: Arrow Function không có thân hàm");
console.log(square(4));

// 6. Arrow Function với thân hàm là một biểu thức
const isEven = num => num % 2 === 0;
console.log("\nLoại 6: Arrow Function với thân hàm là một biểu thức");
console.log(isEven(10)); // true

// 7. Arrow Function với thân hàm là một đối tượng
const createPerson = (name, age) => ({
    name: name,
    age: age
});
console.log("\nLoại 7: Arrow Function với thân hàm là một đối tượng");
console.log(createPerson("Bob", 30));

// 8. Arrow Function với thân hàm là một mảng
const getNumbers = () => [1, 2, 3, 4, 5];
console.log("\nLoại 8: Arrow Function với thân hàm là một mảng");
console.log(getNumbers()); 

// 9. Arrow Function với thân hàm là một chuỗi
const getGreeting = () => "Hello, Arrow Function!";
console.log("\nLoại 9: Arrow Function với thân hàm là một chuỗi");
console.log(getGreeting());

// 10. Arrow Function với thân hàm là một hàm khác
const double = x => {
    const result = x * 2;
    return result;
};
console.log("\nLoại 10: Arrow Function với thân hàm là một hàm khác");
console.log(double(6));
