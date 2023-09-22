import {MdAdd} from "react-icons/md";
import style from "../css/TodoInsert.module.css";
import { useState, useRef, useEffect } from "react";

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState("");

    const onInputChange = (e) => {
        setValue(e.target.value);
    };

    const onInputSubmit = (e) => {
        // App,js에 text를 넘겨줌
        onInsert(value);
        // 그리곤 value값 초기화
        setValue("");
        e.preventDefault();
    };

    const todoInputFocus = useRef();
    useEffect(() => {
        todoInputFocus.current.focus();
    }, []);

    return (
        <>
        <form className={style.TodoInsert} onSubmit={onInputSubmit}>
            <input placeholder="할 일을 입력하세요" className={style.TodoInsertInput} ref={todoInputFocus} value={value} onChange={onInputChange} />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
        </>
    )
}

export default TodoInsert;