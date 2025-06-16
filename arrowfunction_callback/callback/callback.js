// Callback?

// 1. Là hàm
// 2. Được truyền vào như một tham số của hàm khác 
// 3. Gọi lại sau khi hàm khác thực hiện xong

const myFunction = (param) => {
    param("Hello, this is a callback function!");
}

const callbackFunction = (param) => {
    console.log("Value: ", param);
}

myFunction(callbackFunction);