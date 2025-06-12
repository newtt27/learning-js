//------------------ LET ------------------ //

//------------------ HOISTING ------------------ // 
// Biến let cũng được hoisting, nghĩa là nó được nâng lên đầu phạm vi của nó. nhưng nó sẽ không được khởi tạo cho đến khi dòng lệnh khai báo biến được thực thi. Tức là bạn không thể truy cập và sử dụng biến trước khi nó được khai báo, nếu không sẽ xảy ra lỗi Cannot access 'name' before initialization.

//------------------ LƯU Ý ------------------ //
// - Biến let có phạm vi khối, nghĩa là nó chỉ có thể được truy cập trong phạm vi của khối mà nó được khai báo (Block Scope).
// - Biến let không thể được khai báo lại trong cùng một phạm vi, nhưng có thể gán lại giá trị.
// - Biến let cũng được hoisting, nhưng không thể truy cập trước khi nó được khai báo (Temporal Dead Zone).

// console.log("Namelet: ", nameLet); 
//Cannot access 'namelet' before initialization

// - Khai báo biến:
let nameLet = "Concac";
console.log("Namelet: ", nameLet); //nameLet: Concac

    
// Tái khai báo:
let nameLet = "ConChoNgu"
console.log("Namelet: ", nameLet); //Identifier 'nameLet' has already been declared

// - Gán lại: Có thể gán lại giá trị của biến let
nameLet = "Toibingu"
console.log("Namelet: ", nameLet); //nameVar: Toibingu
