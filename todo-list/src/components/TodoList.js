import TodoItem from "./TodoItem";
import "../scss/TodoList.scss";

const TodoList = ({todos, onToggle, onRemove}) => {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default TodoList;