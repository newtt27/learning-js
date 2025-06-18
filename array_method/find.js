const { courses } = require('./courses_data');

//-------------------- FIND -------------------//
// Chức năng: Tìm phần tử đầu tiên thỏa điều kiện
// Trả về: Một object hoặc undefined

const courseWithPrice200 = courses.find((course) => {
    return course.price === 200;
})

const courseWithPrice400 = courses.find((course) => {
    return course.price === 400;
})

console.log("Khóa học có giá 200:", courseWithPrice200);
console.log("Khóa học có giá 400:", courseWithPrice400);

// Kết quả:
// Khóa học có giá 200: { title: 'JavaScript cơ bản', price: 200 }
// Khóa học có giá 400: undefined