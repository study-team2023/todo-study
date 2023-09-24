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
    const [username, setUsername] = useState("");
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

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

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
        if(emailValid && pwValid && pwValidConfirm && username.length > 0) {
            setNotAllow(false);
            return
        }
        setNotAllow(true);
    },[emailValid, pwValid, pwValidConfirm, username])

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
      
            // POST 요청으로 사용자 정보를 서버에 전송
            // const response = await axios.post(REGISTER_URL, username, email, pw);
            const response = await axios.post(
                "https://port-0-todo-study-backend-iciy2almpz5uyx.sel5.cloudtype.app/auth/register", 
                {username:username, email:email, password:pw},
                {
                    headers: {"Content-Type": "application/json"},
                }
            ); 
      
            // 응답 처리
            console.log('등록 성공:', response.data);
            console.log('토큰', response.accessToken);
            console.log('JOSN', JSON.stringify(response));
            setSuccess(true);
          } catch (error) {
            console.log('등록 실패:', error);
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
                {
                    success === true ? (
                        <h2 className={cn("joinTitle")}>회원가입 성공!<br/>로그인하고 시작해 보세요 ✨</h2>
                    ) : (
                        <>
                        <h2 className={cn("joinTitle")}>TodoList에 오신것을<br/>진심으로 환영합니다. 🥳</h2>
                        <form className={cn("joinForm")} onSubmit={handleSubmit}>
                            <label htmlFor="joinUsername" className={cn("joinLabel")}>이름/별명</label>
                            <div className={cn("joinInputWrap")}>
                                <input id="joinUsername" type="text" autoComplete="off"
                                placeholder="이름 및 별명 설정해주세요." 
                                value={username} 
                                onChange={handleUsername}
                                required
                                />
                            </div>
                            <label htmlFor="joinEmail" className={cn("joinLabel")}>이메일</label>
                            <div className={cn("joinInputWrap")}>
                                <input id="joinEmail" type="text" autoComplete="off"
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
                            <label htmlFor="joinPassword" className={cn("joinLabel")}>비밀번호</label>
                            <div className={cn("joinInputWrap")}>
                                <input id="joinPassword" type="password" autoComplete="off"
                                placeholder="비밀번호를 입력하세요." 
                                value={pw} 
                                onChange={handlePw}
                                required/>
                            </div>
                            <div className={cn("joinErrorMsg")}>
                                {
                                    !pwValid && pw.length > 0 && (
                                        <p>영문, 숫자, 특수문자 조합 8자 이상이어야 합니다.</p>
                                    )
                                }
                            </div>
                            <label htmlFor="joinPasswordConfirm" className={cn("joinLabel")}>비밀번호 확인</label>
                            <div className={cn("joinInputWrap")}>
                                <input id="joinPasswordConfirm" type="password" autoComplete="off"
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
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default TodoJoin;
