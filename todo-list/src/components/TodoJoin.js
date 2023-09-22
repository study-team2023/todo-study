import style from "../css/TodoJoin.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {MdArrowBack} from "react-icons/md";
import { useEffect, useState } from "react";
const cn  = classNames.bind(style);

const TodoJoin = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw ] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pwValidConfirm, setPwValidConfirm] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
          /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if(regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        const regex =
          /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        
        if(regex.test(pw)) {
            setPwValid(true);
        }else {
            setPwValid(false);
        }
    }

    useEffect(() => {
        if(emailValid && pwValid && pwValidConfirm) {
            setNotAllow(false);
            return
        }
        setNotAllow(true);
    },[emailValid, pwValid, pwValidConfirm])

    const handlePwConfirm = (e) => {
        setPwConfirm(e.target.value);
    }

    useEffect(() => {
        if( pw === pwConfirm && pwConfirm.length > 0 ){
            setPwValidConfirm(true);
        }else {
            setPwValidConfirm(false);
        }
    },[pwConfirm, pw])

    return (
        <div className={cn("joinPageWrap")}>
            <div className={cn("joinFlexWrap")}>
                <div className={cn("goBack")}>
                    <Link to="/">
                        <MdArrowBack color="#000" size="40"/>
                    </Link>
                </div>
                <h2 className={cn("joinTitle")}>TodoList에 오신것을<br/>진심으로 환영합니다. 🥳</h2>
                <form className={cn("joinForm")}>
                    <label htmlFor="joinEmail">이메일</label>
                    <div className={cn("joinInputWrap")}>
                        <input id="joinEmail"
                        placeholder="test@gmail.com" 
                        value={email} 
                        onChange={handleEmail}
                        required
                        />
                    </div>
                    <div className={cn("joinErrorMsg")}>
                        {
                            !emailValid && email.length > 0 && (
                                <p>이메일 형식이 잘못되었습니다.</p>
                            )
                        }
                    </div>
                    <label htmlFor="joinPassword">비밀번호</label>
                    <div className={cn("joinInputWrap")}>
                        <input id="joinPassword" type="password" autocomplete="off"
                        placeholder="비밀번호를 입력하세요." 
                        value={pw} 
                        onChange={handlePw}
                        equired/>
                    </div>
                    <div className={cn("joinErrorMsg")}>
                        {
                            !pwValid && pw.length > 0 && (
                                <p>영문, 숫자, 특수문자 조합 8자 이상이어야 합니다.</p>
                            )
                        }
                    </div>
                    <label htmlFor="joinPassword">비밀번호 확인</label>
                    <div className={cn("joinInputWrap")}>
                        <input id="joinPassword" type="password" autocomplete="off"
                        placeholder="비밀번호를 다시 확인합니다." 
                        value={pwConfirm} 
                        onChange={handlePwConfirm}
                        required/>
                    </div>
                    <div className={cn("joinErrorMsg")}>
                        {
                            !pwValidConfirm && pwConfirm.length > 0 && (
                                <p>비밀번호가 일치하지 않습니다.</p>
                            )
                        }
                    </div>
                    <div className={cn("joinButtonWrap")}>
                        <button type="button" disabled={notAllow}>완료</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoJoin;
