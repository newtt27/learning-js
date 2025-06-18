const { courses } = require('./courses_data');

//-------------------- SOME -------------------//
// Chức năng: Kiểm tra xem có ít nhất một phần tử thỏa điều kiện
// Trả về: true hoặc false
//Cách viết 1:
const hasAnyCourseWithPriceHigherThan_200 = courses.some((course) => {
    return course.price > 200;
})

//Cách viết 2:
const hasAnyCourseWithPriceHigherThan_200_2 = courses.some(course => course.price > 200);

//Kiểm tra xem có ít nhất một khóa học nào có giá lớn hơn 400 hay không
const hasAnyCourseWithPriceHigherThan_400 = courses.some(course => course.price > 400);
console.log(`Có ít nhất một khóa học có giá lớn hơn 200: ${hasAnyCourseWithPriceHigherThan_200}`);
console.log(`Có ít nhất một khóa học có giá lớn hơn 200 (cách viết 2): ${hasAnyCourseWithPriceHigherThan_200_2}`);
console.log(`Có ít nhất một khóa học có giá lớn hơn 400: ${hasAnyCourseWithPriceHigherThan_400}`);

//Kết quả:
// Có ít nhất một khóa học có giá lớn hơn 200: true
// Có ít nhất một khóa học có giá lớn hơn 200 (cách viết 2): true
// Có ít nhất một khóa học có giá lớn hơn 400: false
