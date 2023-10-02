

import { Route, Routes, Link } from 'react-router-dom';
import TodoHeader from "./components/TodoHeader";
import TodoHome from "./components/TodoHome";
import TodoJoin from './components/TodoJoin';
import TodoLogin from './components/TodoLogin';
import "./css/reset.css";
import TodoLayout from './components/TodoLayout';
import ToodRequireAuth from './components/TodoRequireAuth';

const App = () => {

    return (
        <>
        <TodoHeader/>
        <Routes>
            <Route path='/' element={<TodoLayout/>}>
                <Route path='/components/TodoJoin' element={<TodoJoin/>}/>
                <Route path='/components/TodoLogin' element={<TodoLogin/>}/>
                {/* private routes (admin page) */}
                <Route element={<ToodRequireAuth/>}>
                    {/* put private routes here */}
                    <Route path='/' element={<TodoHome/>}/>
                </Route>
                {/* public routes */}
                {/* catch all */}
            </Route>
        </Routes>
        </>
    )
}

export default App;
