// switch dùng để kiểm tra nhiều trường hợp cụ thể của một biến. Dễ đọc hơn khi có nhiều lựa chọn (case).

const prompt = require('prompt-sync')();

const NhapThu = () => {
    const thu = prompt("Nhập thứ trong tuần (1-7): ");
    CheckThu(thu); // Gọi hàm CheckThu với giá trị đã nhập - callback function
}

const CheckThu = (thu) => {
    switch (thu) {
        case '1':
            console.log("Thứ Hai");
            break;
        case '2':
            console.log("Thứ Ba");
            break;
        case '3':
            console.log("Thứ Tư");
            break;
        case '4':
            console.log("Thứ Năm");
            break;
        case '5':
            console.log("Thứ Sáu");
            break;
        case '6':
            console.log("Thứ Bảy");
            break;
        case '7':
            console.log("Chủ Nhật");
            break;
        default:
            console.log("Nhập không hợp lệ, vui lòng nhập từ 1 đến 7.");
    }
}

// Gọi hàm NhapThu để bắt đầu quá trình nhập thứ
NhapThu();