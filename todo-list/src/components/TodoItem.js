import style from "../css/TodoItem.module.css";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdOutlineModeEdit, MdCancel, MdDone } from "react-icons/md";
import classNames from "classnames/bind";
import { useState } from "react";
const cn  = classNames.bind(style);

const TodoItem = ({todo, onRemove, onToggle, onClickEdit, onClickCancel, onClickDone}) => {
    const { id, text, checked, edit } = todo;

    const [newInputText, setNewInputText] = useState(text);

    const onItemInputChange = (e) => {
        const newText = e.target.value;
        setNewInputText(newText);
    }

    return (
        <div id={`TodoListItem${id}`} className={cn("TodoListItem")}>
          <div id={`checkbox${id}`} className={cn("checkbox", { checked })}>
            <div className={cn("checkicon")} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>
            { edit ? 
            <input id={`todoInput${id}`} className={cn("text")} value={newInputText} onChange={onItemInputChange} /> : 
            <input id={`todoInput${id}`} className={cn("text")} value={text} readOnly />
            }
          </div>
          <div id={`btnGroup${id}`} className={cn("btnGroup", { edit })}>
            <div className={cn("first")}>
                <div id={`editBtn${id}`} className={cn("edit")} onClick={(e) => onClickEdit(e,id)}><MdOutlineModeEdit /></div>
                <div className={cn("remove")} onClick={() => onRemove(id)}><MdRemoveCircleOutline /></div>
            </div>
            <div className={cn("second")}>
                <div id={`done${id}`} className={cn("done")} onClick={(e) => onClickDone(e,id,newInputText)}><MdDone /></div>
                <div id={`cancel${id}`} className={cn("cancel")} onClick={(e) => onClickCancel(e,id)}><MdCancel /></div>
            </div>
          </div>
        </div>
      );
}

export default TodoItem;