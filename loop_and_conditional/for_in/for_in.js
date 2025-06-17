// for...in – duyệt thuộc tính của object
// ✅ Lý thuyết:

// Dùng để lặp qua các key (tên thuộc tính) trong một đối tượng (object).
const person = {
  name: "Nghĩa",
  age: 21
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
