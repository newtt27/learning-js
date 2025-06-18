const { courses } = require('./courses_data');

//-------------------- MAP -------------------//
// Chức năng: Tạo ra mảng mới bằng cách biến đổi từng phần tử
// Trả về: Mảng mới có cùng độ dài

//Lưu ý:
// -Mỗi phần tử được xử lí qua 1 hàm callback
// -Mảng mới sẽ có cùng độ dài với mảng gốc
// -Không thay đổi mảng gốc

// Ví dụ: Tạo mảng mới chỉ chứa tiêu đề khóa học
const courseTitles = courses.map((course) => {
    return course.title;
})

// Ví dụ: Tạo mảng mới chứa tiêu đề và giá khóa học dưới dạng chuỗi
const courseDetails = courses.map((course) => {
    return `${course.title} - ${course.price} VNĐ`;
});

// Ví dụ: Tăng giá mỗi khóa học lên 10%
const increasedPrices = courses.map(course => ({
  ...course,
  price: course.price * 100 * 1.1 // Tăng giá lên 10%
}));

// Ví dụ: Chuyển đổi tiêu đề khóa học thành chuỗi (đảm bảo an toàn với các giá trị không phải chuỗi)
const safeTitles = courses.map(course => ({
  ...course,
  title: String(course.title)
}));

// Ví dụ: Đánh dấu khóa học là "rẻ" nếu giá dưới 300 bằng cách thêm trường mới `isCheap`
const markedCourses = courses.map(course => ({
  ...course,
  isCheap: course.price < 300
}));


console.log("Tiêu đề khóa học:", courseTitles);
console.log("Chi tiết khóa học:", courseDetails);
console.log("Giá khóa học sau khi tăng 10%:", increasedPrices);
console.log("Tiêu đề khóa học an toàn:", safeTitles);
console.log("Khóa học đã đánh dấu:", markedCourses);
