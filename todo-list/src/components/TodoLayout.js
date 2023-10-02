import { Outlet } from "react-router-dom";

const TodoLayout = () => {
    return (
        <>
        <main className="App">
            <Outlet/>
        </main>
        </>
    )
}

export default TodoLayout;