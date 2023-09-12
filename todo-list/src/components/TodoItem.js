import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdOutlineModeEdit } from "react-icons/md";
import cn from "classnames";
import style from "../css/TodoItem.module.css";

const TodoItem = ({todo, onRemove, onToggle}) => {
    const { id, text, checked } = todo;

    return (
        <div className={style.TodoListItem}>
          <div className={cn(style.checkbox, { checked })} onClick={() => onToggle(id)}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className={style.text}>{text}</div>
          </div>
          <div className={style.edit}><MdOutlineModeEdit /></div>
          <div className={style.remove} onClick={() => onRemove(id)}><MdRemoveCircleOutline /></div>
        </div>
      );
}

export default TodoItem;