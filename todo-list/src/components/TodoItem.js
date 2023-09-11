import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdOutlineModeEdit } from "react-icons/md";
import cn from "classnames";
import "../scss/TodoItem.scss";

const TodoItem = ({todo, onRemove, onToggle}) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
          <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
          </div>
          <div className="edit"><MdOutlineModeEdit /></div>
          <div className="remove" onClick={() => onRemove(id)}><MdRemoveCircleOutline /></div>
        </div>
      );
}

export default TodoItem;