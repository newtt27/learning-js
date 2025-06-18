
const { courses } = require('./courses_data');


console.log("Dùng forEach để lặp qua mảng courses:");


courses.forEach((course, index, array) => {
    console.log(`Course ${index + 1}: ${course.title}, Price: ${course.price}`);
    console.log(`Array length: ${array.length}`);
})
//course: trả về object hiện tại trong vòng lặp
//index: trả về vị trí của object hiện tại trong vòng lặp


// Tăng giá mỗi khóa học lên 50
// Dùng forEach để cập nhật giá
courses.forEach((course) => {
    course.price += 50;
})
console.log("Sau khi tăng giá mỗi khóa học 50:");
courses.forEach((course) => {
    console.log(`Title: ${course.title}, New Price: ${course.price}`);
})

//Lưu ý: forEach sau khi dùng để cập nhật giá sẽ không trả về mảng mới, mà chỉ cập nhật trực tiếp trên mảng courses tại file này chứ k phải mảng courses trong file courses_data.js