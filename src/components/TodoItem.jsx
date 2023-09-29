import React from "react";
import { Form, CloseButton } from "react-bootstrap";

function TodoItem({ id, todo, setCompleted, deleteTodo }) {
	return (
		<li className="list-item">
			<Form.Check
				type="checkbox"
				id={`checkbox-${id}`}
				checked={todo.completed}
				onChange={() => setCompleted(id)}
				className="checkbox"
			/>
			<span className="todo-text">{todo.text}</span>{" "}
			<CloseButton onClick={() => deleteTodo(id)} className="delete-button" />
		</li>
	);
}

export default TodoItem;
