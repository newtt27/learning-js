const {loadTodos, saveTodos, deleteTodos} = require('./todoService'); // Import các hàm loadTodos và saveTodos từ todoService.js
const prompt = require('prompt-sync')(); // Import thư viện prompt-sync để nhận input từ người dùng

const AddTodo = () => {
    let todos = loadTodos();
    const title = prompt("Nhập tiêu đề công việc: ");
    const completedInput = prompt("Công việc đã hoàn thành? (yes/no): ").toLowerCase();
    const completed = completedInput === 'yes' ? true : false; // Chuyển đổi input thành boolean nếu yes thì sẽ trả true, nếu no thì sẽ trả false

    const newTodo = {
        id: todos.length + 1, // Tạo ID mới dựa trên độ dài của mảng todos
        title: title,
        completed: completed
    }
    todos.push(newTodo); // Thêm công việc mới vào mảng todos
    saveTodos(todos) // Lưu mảng todos vào file todoData.json
    console.log("Công việc đã được thêm thành công.");
}
const ShowTodos = () => {
    let todo_reload = loadTodos() 
    if (todo_reload.length === 0) {
        console.log("Không có công việc nào để hiển thị.");
        Menu(); // Hiển thị lại menu nếu không có công việc
    }
    console.log("----------Danh sách công việc----------");
    todo_reload.forEach(todo => {
        console.log(`ID: ${todo.id}, Tiêu đề: ${todo.title}, Hoàn thành: ${todo.completed ? 'Có' : 'Không'}`);
    })
}
const DeleteTodos = () => {
    console.log("Tất cả công việc: \n")
    ShowTodos();
    let option = prompt("Bạn muốn xóa công việc nào: ")
    const id = parseInt(option);
    deleteTodos(id);
    console.log(`Xóa thành công công việc: ${option}`);
    Menu();
}   
const MarkComplete = () => {
    let todos = loadTodos();
    let todoId = parseInt(prompt("Công việc đã hoàn thành: "));
    const updateTodo = todos.map((todo) => {
        if(todo.id === todoId)
            return{
                ...todo,
                completed: true
            }
        return todo;
    })
    saveTodos(updateTodo);
    console.log("Đánh dấu công việc thành công");
}
const FilterTodos = () => {
    let todos = loadTodos();
    console.log("Bạn muốn lọc công việc nào?")
    console.log("1. Hoàn thành\n2. Chưa hoàn thành")

    let option = prompt("Nhập lựa chọn (1-2): ")
    let filtered = []
    switch(option) {
        case '1':
            const Completed = todos.filter((todo) => {
                return todo.completed === true
            })
            filtered = Completed;
            break;
        case '2':
            const unCompleted = todos.filter((todo) => {
                return todo.completed === false
            })
            filtered = unCompleted;
            break;
    }

    if(filtered === 0){
        console.log("Không có công việc nào thỏa điều kiện")
    }
    else{
        console.log("Các công việc thỏa điều kiện:")
        filtered.forEach((filter) => console.log(`ID: ${filter.id}, Completed: ${filter.completed}`))
    }
}
const TodoStatistics = () => {
    let todos = loadTodos();
    const Completed = todos.filter((todo) => todo.completed === true)
    const UnCompleted = todos.filter((todo) => todo.completed === false)
    console.log("Thống Kê")
    console.log(`Số lương công việc: ${todos.length}`);
    console.log(`Công việc đã hoàng thành: ${Completed.length}`)
    console.log(`Công việc chưa hoàn thành: ${UnCompleted.length}`)
}
function Menu() {
    console.log("+--------------------MENU--------------------+");
    console.log("|              1. Thêm công việc             |");
    console.log("|              2. Hiển thị công việc         |");
    console.log("|              3. Xóa công việc              |");
    console.log("|    4. Đánh dấu công việc đã hoàn thành     |");
    console.log("|              5. Lọc công việc              |");
    console.log("|              6. Thống kê                   |");
    console.log("|              7. Thoát chương trình         |");
    console.log("+--------------------------------------------+");
    let option = prompt("Lựa chọn của bạn: ");
    switch(option) {
        case '1':
            AddTodo();
            Menu(); 
        case '2':
            ShowTodos();
            break;
        case '3':
            DeleteTodos();
            Menu();
            break;
        case '4':
            MarkComplete();
            Menu();
            break;
        case '5':
            FilterTodos();
            Menu();
            break;
        case '6':
            TodoStatistics();
            break;
        case '7':
            console.log("Thoát chương trình.");
            return; // Kết thúc chương trình
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
            Menu(); // Hiển thị lại menu nếu lựa chọn không hợp lệ
    }
}
Menu();

