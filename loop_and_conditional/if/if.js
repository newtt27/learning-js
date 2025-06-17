// if được dùng để kiểm tra một điều kiện. Nếu điều kiện đúng (true), đoạn code trong if sẽ được thực thi. //Nếu không, ta dùng else if để kiểm tra điều kiện khác, và cuối cùng là else nếu không điều kiện nào đúng.

// Ví dụ: Kiểm tra và in ra bằng khen, làm theo kĩ thuật viết hàm theo arrowFunction và callback function
const prompt = require('prompt-sync')();

const NhapDiem = () => {
    diem = parseFloat(prompt("Nhập điểm của bạn:"));
    CheckDiem(diem); // Gọi hàm CheckDiem với điểm đã nhập - callback function
}

const CheckDiem = (diem) => {
    if (diem >= 8) {
        console.log("Học sinh giỏi");
    } else if (diem >= 6) {
        console.log("Học sinh khá");
    } else if (diem >= 4) {
        console.log("Học sinh trug bình");
    } else {
        console.log("Bạn đã yếu");
    }
}

// Gọi hàm NhapDiem để bắt đầu quá trình nhập điểm
NhapDiem();