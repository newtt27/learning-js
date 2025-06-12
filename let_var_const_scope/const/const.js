//------------------ CONST ------------------ //

//------------------ HOISTING ------------------ // 
// Biến Const cũng được hoisting, nghĩa là nó được nâng lên đầu phạm vi của nó. nhưng nó sẽ không được khởi tạo cho đến khi dòng lệnh khai báo biến được thực thi. Tức là bạn không thể truy cập và sử dụng biến trước khi nó được khai báo, nếu không sẽ xảy ra lỗi Cannot access 'name' before initialization.

//------------------ LƯU Ý ------------------ //
// - Biến Const có phạm vi khối, nghĩa là nó chỉ có thể được truy cập trong phạm vi của khối mà nó được khai báo (Block Scope).
// - Biến Const không thể được khai báo lại trong cùng một phạm vi, và cũng không thể gán lại giá trị.
// - Biến Const cũng được hoisting, nhưng không thể truy cập trước khi nó được khai báo (Temporal Dead Zone).

// console.log("NameConst: ", nameConst); //nameConst is not defined

// - Khai báo biến:
let nameConst = "Concac";
console.log("NameConst: ", nameConst); //NameConst: Concac

    
// Tái khai báo:
let nameConst = "ConChoNgu"
console.log("NameConst: ", nameConst); //Identifier 'NameConst' has already been declared

// - Gán lại: Có thể gán lại giá trị của biến let
nameConst = "Toibingu"
console.log("NameConst: ", nameConst); //nameConst: Assignment to constant variable.
