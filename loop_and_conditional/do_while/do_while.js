// do...while – chạy ít nhất một lần
// ✅ Lý thuyết:

// Giống while, nhưng luôn chạy ít nhất 1 lần, vì kiểm tra điều kiện sau khi chạy.

let i = 10;

console.log("Bắt đầu vòng lặp do...while");
do {
    console.log("Giá trị của i là: " + i);
    i++;
} while (i < 10); 

let j = 10;
console.log("Bắt đầu vòng lặp while");
while (j < 10) {
    console.log("Giá trị của i là: " + j);
    j++;
}

//Kết quả: 

// Bắt đầu vòng lặp do...while: In ra giá trị của i là: 10

// Bắt đầu vòng lặp while: Không in ra gì vì điều kiện không thỏa
