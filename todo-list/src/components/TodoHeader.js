import style from "../css/TodoHeader.module.css";
import classNames from "classnames/bind";
import {Link} from "react-router-dom";
const cn  = classNames.bind(style);

const TodoHeader = () => {

    return (
        <>
        <header className={cn("header")}>
            <Link to="/">
                <h1>TodoList</h1>
            </Link>
            <div className={cn("login_wrap")}>
                <div className="login_box">
                    <label htmlFor="loginEmail">
                        <input id="loginEmail" type="email" placeholder="이메일"/>
                    </label>
                    <label htmlFor="loginPw">
                        <input id="loginPw" type="password" placeholder="비밀번호"/>
                    </label>
                </div>
                <div className="button_box">
                    <a href="">로그인</a>
                    <Link to="./components/TodoJoin">회원가입</Link>
                </div>
            </div>
        </header>
        </>
    )
}

export default TodoHeader;
