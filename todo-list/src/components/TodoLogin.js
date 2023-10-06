import style from "../css/TodoForm.module.css";
import {MdArrowBack} from "react-icons/md";
import classNames from "classnames/bind";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";

const cn  = classNames.bind(style);

const TodoLogin = () => {
    // const isLoggedIn = useSelector((state) => state.isLoggedIn);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { setAuth } = useAuth();
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState("");
    const [pw, setPw ] = useState("");
    const [notAllow, setNotAllow] = useState(true);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [email, pw]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePw = (e) => {
        setPw(e.target.value);
    }
    
    useEffect(() => {
        if( email.length > 0 && pw.length > 0){
            setNotAllow(false);
        }else {
            setNotAllow(true);
        }
    },[email, pw])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 혹시라도 어떤 오류로 인해 인풋에 값이 없는데 버튼 활성화 될 경우 한번더 return
        if( email.length <= 0 || pw.length <= 0 ){
            setErrMsg("이메일 혹은 비밀번호를 입력해 주세요.")
            return;
        }
        
        try {
            const response = await axios.post("auth/login", 
                {email, password:pw},
                {
                    headers: {
                        Authorization:`Bearer ${sessionStorage.getItem("userToken")}`,

                    },
                    withCredentials: true,
                }
            );
            
            console.log(JSON.stringify(response.data));
            const accessToken = response.data?.access_token;
            setAuth({ email, pw, accessToken });
            sessionStorage.setItem("userToken", response.data.access_token);
            setEmail("");
            setPw("");
            dispatch({
                type: "LOGIN",
            });
            
            navigate(from, {replace: true});

        } catch(err) {
            if(!err?.response) {
                setErrMsg("서버가 응답하지 않습니다.");
            }else if(err.response?.status === 400) {
                setErrMsg("이메일과 비밀번호를 다시 확인해 주세요.")
            }else if(err.response?.status === 401) {
                setErrMsg("권한이 없거나, 존재하지 않는 회원입니다.")
            }else {
                setErrMsg("로그인에 실패하였습니다.")
            }
            errRef.current.focus();
            console.log(err)
        }
    }

    return (
        <>
        <div className={cn("formPageWrap")}>
            <div className={cn("formFlexWrap")}>
                {/* <div className={cn("goBack")}>
                    <Link to="/">
                        <MdArrowBack color="#000" size="40"/>
                    </Link>
                </div> */}
                <h2 className={cn("formTitle")}>로그인을 통해 TodoList를<br/>활용해 보세요 🤓</h2>
                {/* <div ref={errRef} className={`${errMsg ? "" : cn("hide")}`}> */}
                <div ref={errRef} className={cn("formErrMsgWrap") + (errMsg ? "" : cn("hide"))}>
                    <p className={cn("formErrMsg")} aria-live="assertive">{errMsg}</p>
                </div>
                <form className={cn("formAreaWrap")} onSubmit={handleSubmit}>
                    <label htmlFor="loginEmail" className={cn("formAreaLabel")}>이메일</label>
                    <div className={cn("formInputWrap")}>
                        <input id="loginEmail" type="text" autoComplete="off"
                        placeholder="이메일을 입력해 주세요."
                        required
                        value={email}
                        onChange={handleEmail}
                        ref={userRef}
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