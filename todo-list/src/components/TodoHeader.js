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
                <div className={cn("login_box")}>
                    <div className={cn("loginInputWrap")}>
                        <input id="loginEmail" type="email" placeholder="이메일" className={cn("loginInput")}/>
                    </div>
                    <div className={cn("loginInputWrap")}>
                        <input id="loginPw" type="password" placeholder="비밀번호" className={cn("loginInput")}/>
                    </div>
                    <div className={cn("loginButtonWrap")}>
                        <button>로그인</button>
                    </div>
                    <div className={cn("loginButtonWrap")}>
                        <Link to="./components/TodoJoin">회원가입</Link>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default TodoHeader;
