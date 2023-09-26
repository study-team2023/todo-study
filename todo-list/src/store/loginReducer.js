// 기본 상태 저장
const initialState = {
    isLoggedIn: false,
};

// type 저장
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = () => ({type:LOGIN})
export const logout = () => ({type:LOGOUT})

// action 지정
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          isLoggedIn: true,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;