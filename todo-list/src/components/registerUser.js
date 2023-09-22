import axios from 'axios';

const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      'https://port-0-todo-study-backend-iciy2almpz5uyx.sel5.cloudtype.app/auth/register',
      userData
    );
    return response.data; // API 응답 데이터 반환
  } catch (error) {
    throw error; // 오류 처리
  }
};

export default registerUser;
