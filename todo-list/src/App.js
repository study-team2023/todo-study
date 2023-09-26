

import { Route, Routes, Link } from 'react-router-dom';
import TodoHeader from "./components/TodoHeader";
import TodoHome from "./components/TodoHome";
import TodoJoin from './components/TodoJoin';
import TodoLogin from './components/TodoLogin';
import "./css/reset.css";
import TodoLayout from './components/TodoLayout';

const App = () => {

    return (
        <>
        <TodoHeader/>
        
        <Routes>
            <Route path='/' element={<TodoLayout/>}>
                {/* public routes */}
                <Route path='/components/TodoJoin' element={<TodoJoin/>}></Route>
                <Route path='/components/TodoLogin' element={<TodoLogin/>}></Route>
                {/* private routes (admin page) */}
                {/* catch all */}
            </Route>
        </Routes>
        </>
    )
}

export default App;
