import axios from "axios";
const BASE_URL = "https://port-0-todo-study-backend-iciy2almpz5uyx.sel5.cloudtype.app/";

export default axios.create({
    baseURL: BASE_URL
});