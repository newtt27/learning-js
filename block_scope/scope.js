//Scope được hiểu là phạm vi mà biến có thể được truy cập và sử dụng trong chương trình. Trong JavaScript, có ba loại phạm vi chính: phạm vi toàn cục (global scope), phạm vi hàm (function scope) và phạm vi khối (block scope).

// Phạm vi toàn cục (Global Scope): Biến được khai báo bên ngoài bất kỳ hàm nào hoặc trong phạm vi toàn cục có thể được truy cập từ bất kỳ đâu trong chương trình.
// Phạm vi hàm (Function Scope): Biến được khai báo bên trong một hàm chỉ có thể được truy cập và sử dụng trong phạm vi của hàm đó. Biến này không thể được truy cập từ bên ngoài hàm.
// Phạm vi khối (Block Scope): Biến được khai báo bên trong một khối mã.

//Scope được xác định bởi các cặp dấu {} 

const testScope = () => {
    {
        var scopeVar = "I am a var variable";
        let scopeLet = "I am a let variable";
        const scopeConst = "I am a const variable";

        console.log("scopeVar: ", scopeVar); // scopeVar: I am a var variable
        console.log("scopeLet: ", scopeLet); // scopeLet: I am a let variable
        console.log("scopeConst: ", scopeConst); // scopeConst: I am a const variable
    }
    console.log("scopeVar: ", scopeVar); // scopeVar: I am a var variable
    console.log("scopeLet: ", scopeLet); // ReferenceError: scopeLet is not defined
    console.log("scopeConst: ", scopeConst); // ReferenceError: scopeConst is not defined
}
testScope();

// Trong ví dụ trên, biến `scopeVar` được khai báo bằng `var`, do đó nó có phạm vi toàn cục và có thể được truy cập bên ngoài khối mã. Ngược lại, biến `scopeLet` và `scopeConst` được khai báo bằng `let` và `const`, do đó chúng chỉ có thể được truy cập trong phạm vi của khối mã mà chúng được khai báo. Khi cố gắng truy cập chúng bên ngoài khối mã, sẽ xảy ra lỗi ReferenceError.
// Cho nên trong thực tế, bạn nên sử dụng `let` và `const` để khai báo biến trong phạm vi khối, vì chúng giúp tránh xung đột tên biến và lỗi không mong muốn do phạm vi toàn cục của `var`.
