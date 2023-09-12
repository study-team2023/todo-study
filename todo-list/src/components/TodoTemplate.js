import style from "../css/TodoTemplate.module.css";

const TodoTemplate = ({children}) => {
    return (
        <div className={style.TodoTemplate}>
            <div className={style.appTitle}>일정 관리</div>
            <div className={style.content}>{children}</div>
        </div>
    );
}

export default TodoTemplate;