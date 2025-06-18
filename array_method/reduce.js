const { courses } = require('./courses_data');

//-------------------- REDUCE -------------------//
// Chức năng: Tính toán hoặc biến đổi mảng thành một giá trị duy nhất
// Trả về: Giá trị duy nhất (có thể là số, chuỗi, object, v.v.)
// Cú pháp:
// array.reduce((accumulator, currentValue) => { /* logic */ }, initialValue);
// - `accumulator`: Giá trị tích lũy từ các lần lặp trước
// - `currentValue`: Giá trị hiện tại trong mảng
// - `initialValue`: Giá trị khởi tạo cho `accumulator` (nếu không có, sẽ dùng phần tử đầu tiên của mảng)

// Ví dụ cú pháp: 
// const courseTitles = courses.reduce((titles, course) => {
//     titles.push(course.title);
//     return titles;
// })  - Cách viết này sẽ báo lỗi, do `titles` không được khởi tạo mảng để chứa các tiêu đề khóa học.

// Ví dụ 1: Tính tổng giá của tất cả khóa học
const totalPrice = courses.reduce((total, course) => {
    return total + course.price;
}, 0); // Khởi tạo giá trị ban đầu là 0

// Ví dụ 2: Tạo một object chứa số lượng khóa học theo từng giá
const courseCountByPrice = courses.reduce((acc, course) => {
    acc[course.price] = (acc[course.price] || 0) + 1;
    return acc;
})

// Ví dụ 3: Tạo một mảng chứa tiêu đề khóa học
const courseTitles = courses.reduce((titles, course) => {
    titles.push(course.title);
    return titles;
}, []); // Khởi tạo mảng rỗng để chứa tiêu đề

// Ví dụ 4: Tạo một object chứa khóa học có giá cao nhất
const highestPricedCourse = courses.reduce((highest, course) => {
    return (highest.price || 0) < course.price ? course : highest;
})

// Ví dụ 5: Tạo một mảng chứa các khóa học có giá dưới 300
const affordableCourses = courses.reduce((affordable, course) => {
    if (course.price < 300) {
        affordable.push(course);
    }
    return affordable;
})

console.log("Tổng giá của tất cả khóa học:", totalPrice);
console.log("Số lượng khóa học theo từng giá:", courseCountByPrice);
console.log("Tiêu đề khóa học:", courseTitles);
console.log("Khóa học có giá cao nhất:", highestPricedCourse);
console.log("Khóa học có giá dưới 300:", affordableCourses);