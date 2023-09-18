import TodoItem from "./TodoItem";
import style from "../css/TodoList.module.css";

const TodoList = ({todos, onToggle, onRemove, onClickEdit, onClickCancel, onClickDone, onChangeInput}) => {
    return (
        <div className={style.TodoList}>
            {todos.map((todo) => (
                <TodoItem 
                todo={todo} 
                key={todo.id} 
                onRemove={onRemove} 
                onToggle={onToggle} 
                onClickEdit={onClickEdit} 
                onClickCancel={onClickCancel}
                onClickDone={onClickDone}
                />
            ))}
        </div>
    )
}

export default TodoList;