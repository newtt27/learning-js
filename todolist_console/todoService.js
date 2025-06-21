const fs = require('fs');
const path = './todoData.json';


const loadTodos = () => {
    try{
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    }
    catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        return [];
    }
}

const saveTodos = (todo) => {
    try {
        fs.writeFileSync(path, JSON.stringify(todo, null, 2));
    }
    catch (error) {
        console.error("Lỗi khi lưu dữ liệu:", error);
    }
}

const deleteTodos = (id) => {
    const todos = loadTodos();
    const newTodos = todos.filter(todo => todo.id !== id); //Tạo 1 mảng mới newTodos kh chứa todo cần xóa
    saveTodos(newTodos);
}

module.exports = {
    loadTodos,
    saveTodos,
    deleteTodos
}