const {courses} = require('./courses_data');

//-------------------- FILTER -------------------//
// Chức năng: Lọc các phần tử thỏa điều kiện
// Trả về: 
// - Một mảng mới chứa các phần tử thỏa điều kiện - mảng con
// - Mảng rỗng nếu không có phần tử nào thỏa điều kiện
const coursesWithPriceHigherThan200 = courses.filter((course) => {
    return course.price > 200;
});

const coursesWithPriceHigherThan400 = courses.filter((course) => {
    return course.price > 400;
});

console.log("Khóa học có giá lớn hơn 200:", coursesWithPriceHigherThan200);
console.log("Khóa học có giá lớn hơn 400:", coursesWithPriceHigherThan400);