

import { Route, Routes, Link } from 'react-router-dom';
import TodoHeader from "./components/TodoHeader";
import TodoHome from "./components/TodoHome";
import TodoJoin from './components/TodoJoin';
import TodoLogin from './components/TodoLogin';
import "./css/reset.css";

const App = () => {

    return (
        <>
        <TodoHeader/>
        
        <Routes>
            <Route path='/' exact element={<TodoHome/>}></Route>
            <Route path='/components/TodoJoin' element={<TodoJoin/>}></Route>
            <Route path='/components/TodoLogin' element={<TodoLogin/>}></Route>
        </Routes>
        </>
    )
}

export default App;
