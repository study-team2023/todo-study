import style from "../css/TodoForm.module.css";
import {MdArrowBack} from "react-icons/md";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; 

const cn  = classNames.bind(style);

const TodoLogin = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw ] = useState("");
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePw = (e) => {
        setPw(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 혹시라도 어떤 오류로 인해 인풋에 값이 없는데 버튼 활성화 될 경우 한번더 return
        if( email.length <= 0 || pw.length <= 0 ){
            alert("이메일 혹은 비밀번호를 입력해 주세요.")
            return;
        }
    }
    
    useEffect(() => {
        if( email.length > 0 && pw.length > 0){
            setNotAllow(false);
        }else {
            setNotAllow(true);
        }
    },[email, pw])

    return (
        <>
        <div className={cn("formPageWrap")}>
            <div className={cn("formFlexWrap")}>
                <div className={cn("goBack")}>
                    <Link to="/">
                        <MdArrowBack color="#000" size="40"/>
                    </Link>
                </div>
                <h2 className={cn("formTitle")}>로그인을 통해 TodoList를<br/>활용해 보세요 🤓</h2>
                <form className={cn("formAreaWrap")} onSubmit={handleSubmit}>
                    <label htmlFor="loginEmail" className={cn("formAreaLabel")}>이메일</label>
                    <div className={cn("formInputWrap")}>
                        <input id="loginEmail" type="text" autoComplete="off"
                        placeholder="이메일을 입력해 주세요."
                        required
                        value={email}
                        onChange={handleEmail}
                        />
                    </div>
                    <label htmlFor="loginPw" className={cn("formAreaLabel")}>비밀번호</label>
                    <div className={cn("formInputWrap")}>
                        <input id="loginPw" type="password" autoComplete="off"
                        placeholder="비밀번호를 입력해 주세요."
                        required
                        value={pw}
                        onChange={handlePw}
                        />
                    </div>
                    <div className={cn("formButtonWrap")}>
                        <button type="submit" disabled={notAllow}>로그인 하기</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default TodoLogin;