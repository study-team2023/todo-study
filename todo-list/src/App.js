import {useRef, useState} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
    const [todos, setTodos] = useState([]);

    const nextId = useRef(0);

    const onInsert = (text) => {
        const todo = {
            id:nextId.current,
            text,
            checked: false,
            edit: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    };

    const onRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const onClickEdit = (e, id) => {
        let clickedInputEl =  document.getElementById(`todoInput${id}`);
        clickedInputEl.readOnly = false;
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, edit: !todo.edit } : todo)));
    }

    const onClickCancel = (e, id, text) => {
        let clickedInputEl =  document.getElementById(`todoInput${id}`);
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, edit: !todo.edit } : todo)));
        clickedInputEl.readOnly = true;
    }

    const onClickDone = (e, id, text) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, edit: !todo.edit, text: text} : todo)));
    }

    const onToggle = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    }

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList 
            todos={todos} 
            onRemove={onRemove} 
            onClickEdit={onClickEdit} 
            onClickCancel={onClickCancel} 
            onToggle={onToggle}
            onClickDone={onClickDone}
            />
        </TodoTemplate>
    )
}

export default App;
