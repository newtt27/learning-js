//------------------ VAR ------------------ //
//------------------ HOISTING ------------------ // 
// Biến var được hoisting, nghĩa là nó được nâng lên đầu phạm vi của nó. nhưng giá trị của nó sẽ là undefined cho đến khi dòng lệnh khai báo biến được thực thi. Tức là bạn có thể truy cập và sử dụng biến trước khi nó được khai báo

//------------------ LƯU Ý ------------------ //
// - Biến var có phạm vi toàn cục hoặc phạm vi hàm, không có phạm vi khối. (Scope)
// - Biến var có thể được khai báo lại và gán lại giá trị.
// - Biến var được hoisting, nghĩa là nó được nâng lên đầu phạm vi của nó (Hoisting).
// - Biến var có thể được khai báo nhiều lần trong cùng một phạm vi.

console.log("Namevar: ", nameVar); //nameVar: undefined

// - Khai báo biến:
var nameVar = "Concac";
console.log("Namevar: ", nameVar); //nameVar: Concac

    
// Tái khai báo:
var nameVar = "ConChoNgu"
console.log("Namevar: ", nameVar); //nameVar: ConChoNgu

// - Gán lại: Có thể gán lại giá trị của biến var
nameVar = "Toibingu"
console.log("Namevar: ", nameVar); //nameVar: Toibingu

