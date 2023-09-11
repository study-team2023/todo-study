import {MdAdd} from "react-icons/md";
import "../scss/TodoInsert.scss";
import { useState, useCallback } from "react";

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState("");

    const onInputChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onInputSubmit = useCallback((e) => {
        // App,js에 text를 넘겨줌
        onInsert(value);
        // 그리곤 value값 초기화
        setValue("");
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <>
        <form className="TodoInsert" onSubmit={onInputSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onInputChange} />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
        </>
    )
}

export default TodoInsert;