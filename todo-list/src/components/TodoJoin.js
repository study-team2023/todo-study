import style from "../css/TodoJoin.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {MdArrowBack} from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
const cn  = classNames.bind(style);

const TodoJoin = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw ] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pwValidConfirm, setPwValidConfirm] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const [success, setSuccess] = useState(false);
    const USER_REGEX =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const PW_REGEX =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

    const handleEmail = (e) => {
        setEmail(e.target.value);

        if(USER_REGEX.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        
        if(PW_REGEX.test(pw)) {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 혹시라도 오류로 버튼이 활성화 되었을때, 한번더 체크하여 잘못된 정보라면 return
        const v1 = USER_REGEX.test(email);
        const v2 = PW_REGEX.test(pw);
        if( !v1 || !v2 ){
            alert("잘못된 접근입니다. 다시 시도해 주세요.")
            return;
        }

        try {
            // API 엔드포인트 URL
            const apiUrl = 'https://port-0-todo-study-backend-iciy2almpz5uyx.sel5.cloudtype.app/auth/register';
      
            // POST 요청으로 사용자 정보를 서버에 전송
            const response = await axios.post(apiUrl, email, pw);
      
            // 응답 처리
            console.log('등록 성공:', response.data);
            setSuccess(true);
          } catch (error) {
            // 오류 처리
            console.error('등록 실패:', error);
          }
    }

    return (
        <div className={cn("joinPageWrap")}>
            <div className={cn("joinFlexWrap")}>
                <div className={cn("goBack")}>
                    <Link to="/">
                        <MdArrowBack color="#000" size="40"/>
                    </Link>
                </div>
                <h2 className={cn("joinTitle")}>TodoList에 오신것을<br/>진심으로 환영합니다. 🥳</h2>
                <form className={cn("joinForm")} onSubmit={handleSubmit}>
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
                        <button type="submit" disabled={notAllow}>완료</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoJoin;
