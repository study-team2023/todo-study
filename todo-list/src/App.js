

import { Route, Routes, Link } from 'react-router-dom';
import TodoHeader from "./components/TodoHeader";
import TodoHome from "./components/TodoHome";
import TodoJoin from './components/TodoJoin';
import "./css/reset.css";

const App = () => {

    return (
        <>
        <TodoHeader/>
        
        <Routes>
            <Route path='/' exact element={<TodoHome/>}></Route>
            <Route path='/components/TodoJoin' element={<TodoJoin/>}></Route>
        </Routes>
        </>
    )
}

export default App;
