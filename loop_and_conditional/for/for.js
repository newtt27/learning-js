// for – vòng lặp cố định
// ✅ Lý thuyết:

// Dùng khi bạn biết trước số lần lặp. Có 3 phần:

//     Khởi tạo biến

//     Điều kiện chạy

//     Tăng/giảm biến sau mỗi vòng lặp

// Ví dụ: In ra các số từ 1-5
const prompt = require('prompt-sync')();

const ForExample = () =>{
    const n = parseInt(prompt("Nhập số n (số lần lặp): "));
    for (let i = 1; i <= n; i++) {
        console.log(`Số hiện tại là: ${i}`);
    }
}

// Gọi hàm ForExample để bắt đầu quá trình lặp
ForExample();