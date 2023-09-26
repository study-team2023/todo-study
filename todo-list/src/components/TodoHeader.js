import style from "../css/TodoHeader.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cn = classNames.bind(style);

const TodoHeader = () => {

    return (
        <header className={cn("header")}>
            <Link to="/">
                <h1>TodoList</h1>
            </Link>
            <div className={cn("loginWrap")}>
                <div className={cn("'headerButtonWrap', 'login'")}>
                    <Link to="./components/TodoLogin">로그인</Link>
                </div>
                <div className={cn("'headerButtonWrap', 'join'")}>
                    <Link to="./components/TodoJoin">회원가입</Link>
                </div>
            </div>
        </header>
    )
}

export default TodoHeader;
