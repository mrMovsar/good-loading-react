function Todo(props) {
    return (
        <ul className="list-group-item">
            {props.todo.title}
        </ul>
    )
}

export default Todo;