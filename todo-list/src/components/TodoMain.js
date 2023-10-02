import style from "../css/TodoMain.module.css";
import classNames from "classnames/bind";

const cn  = classNames.bind(style);

const TodoMain = () => {

    return (
        <>
        <div className={cn("mainWrap")}>
            <div className={cn("mainTextBox")}>
                <h1>회원가입을 통해 Todo List를 무료로!</h1>
                <p>회원가입을 완료하고 로그인하시면 Todo List가 보입니다.</p>
                <p>무료로, 제한없이, 마음껏 이용해 보세요.</p>
            </div>
        </div>
        </>
    )
}

export default TodoMain;
