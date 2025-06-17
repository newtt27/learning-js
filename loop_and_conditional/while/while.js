// While: Kiểm tra điều kiện trước khi lặp lại.
// Lặp lại khi điều kiện còn đúng, nhưng kiểm tra trước.

// Ví dụ: Nhập điểm và kiểm tra cho đến khi nhập điểm hợp lệ (0-10).
const prompt = require('prompt-sync')();

const NhapDiem = (NhapSoLanLap) => {
    let soLanLap = NhapSoLanLap();
    while (soLanLap > 0) {
        console.log(`Số lần lặp còn lại: ${soLanLap}`);
        soLanLap--;
    }
}

const NhapSoLanLap = () => {
    let soLanLap = parseInt(prompt("Nhập số lần lặp (tối thiểu 1): "));
    while (isNaN(soLanLap) || soLanLap < 1) {
        console.log("Số lần lặp không hợp lệ. Vui lòng nhập lại.");
        soLanLap = parseInt(prompt("Nhập số lần lặp (tối thiểu 1): "));
    }
    return soLanLap;
}

NhapDiem(NhapSoLanLap);