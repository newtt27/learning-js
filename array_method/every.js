const { courses } = require('./courses_data');

//------------------- EVERY -------------------//
// Chức năng: Kiểm tra xem tất cả phần tử có thỏa điều kiện hay không
// Trả về: true hoặc false


// Dùng every để kiểm tra xem tất cả khóa học đều có giá lớn hơn 0 hay không
const allCoursesHavePrice = courses.every((course) => {
    return course.price > 0;
})

// Dùng every để kiểm tra xem title có phải là string hay không
const allTitlesAreStrings = courses.every(course => typeof course.title === 'string');

console.log(`Tất cả khóa học đều có giá lớn hơn 0: ${allCoursesHavePrice}`);
console.log(`Tất cả tiêu đề khóa học đều là chuỗi: ${allTitlesAreStrings}`);

//Kết quả:
// Tất cả khóa học đều có giá lớn hơn 0: true
// Tất cả tiêu đề khóa học đều là chuỗi: false
// Giải thích:
// - `allTitlesAreStrings` trả về false vì khóa học thứ 3 có title là số (123) thay vì chuỗi.