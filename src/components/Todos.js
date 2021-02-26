import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadTodos } from "../redux/actions";
import Todo from "./Todo";

function Todos() {
    const params = useParams();

    const dispatch = useDispatch();

    const todos = useSelector( state => state.todos.items);

    const loading = useSelector (state => state.todos.loading);

    useEffect(() => {
        if(params.id !== undefined) {
            dispatch(loadTodos(params.id))
        }
    }, [params]);

        if (loading) {
            return (
                <div>
                    Loading... Please wait
                </div>
            )
        }

    return (
        <ul className="list-group">
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </ul>
    )
}

export default Todos;