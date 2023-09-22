import style from "../css/TodoJoin.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {MdArrowBack} from "react-icons/md";
const cn  = classNames.bind(style);

const TodoJoin = () => {

    return (
        <div className={cn("joinPageWrap")}>
            <div className={cn("joinFlexWrap")}>
                <div className={cn("goBack")}>
                    <Link to="/">
                        <MdArrowBack color="#000" size="40"/>
                    </Link>
                </div>
                <h2 className={cn("joinTitle")}>회원가입을 진심으로<br/>환영합니다. 🥳</h2>
                <form className={cn("joinForm")}>
                    <label htmlFor="joinEmail">이메일</label>
                    <div className={cn("joinInputWrap")}>
                        <input id="joinEmail" placeholder="test@gmail.com" required/>
                    </div>
                    <div className={cn("joinErrorMsg")}>
                        <p>이메일 형식이 잘못되었습니다.</p>
                    </div>
                    <label htmlFor="joinPassword">비밀번호</label>
                    <div className={cn("joinInputWrap")}>
                        <input id="joinPassword" placeholder="비밀번호를 입력하세요." required/>
                    </div>
                    <div className={cn("joinErrorMsg")}>
                        <p>영문, 숫자, 특수문자 조합 8자 이상이어야 합니다.</p>
                    </div>
                    <label htmlFor="joinPassword">비밀번호 확인</label>
                    <div className={cn("joinInputWrap")}>
                        <input id="joinPassword" placeholder="비밀번호를 다시 확인합니다." required/>
                    </div>
                    <div className={cn("joinErrorMsg")}>
                        <p>비밀번호가 일치하지 않습니다.</p>
                    </div>
                    <div className={cn("joinButtonWrap")}>
                        <button type="button">완료</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoJoin;
