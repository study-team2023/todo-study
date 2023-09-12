import TodoItem from "./TodoItem";
import style from "../css/TodoList.module.css";

const TodoList = ({todos, onToggle, onRemove}) => {
    return (
        <div className={style.TodoList}>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default TodoList;