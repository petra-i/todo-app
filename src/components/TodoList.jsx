import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import ListGroup from "react-bootstrap/ListGroup";

function TodoList({ todos, setCompleted, deleteTodo }) {
	return (
		<ListGroup>
			{todos.map((todo, index) => {
				if (todo && typeof todo.completed !== "undefined") {
					return (
						<ListGroup.Item key={uuidv4()}>
							<TodoItem
								id={index}
								todo={todo}
								setCompleted={setCompleted}
								deleteTodo={deleteTodo}
							/>
						</ListGroup.Item>
					);
				}
				return null;
			})}
		</ListGroup>
	);
}

export default TodoList;
