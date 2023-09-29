import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { v4 as uuidv4 } from "uuid";

const inputId = `todo-input-${uuidv4()}`;

function AddTodo({ addTodo }) {
	const [text, setText] = useState("");

	const handleAddTodo = () => {
		if (text.trim() !== "") {
			addTodo(text);
			setText("");
		}
	};

	const handleKeyPress = e => {
		if (e.key === "Enter") {
			handleAddTodo();
		}
	};

	return (
		<InputGroup>
			<FormControl
				id={inputId} // Use the generated unique id
				placeholder="Add todo"
				value={text}
				onChange={e => setText(e.target.value)}
				onKeyPress={handleKeyPress}
				autoFocus
			/>
			<Button
				variant="outline-secondary"
				id="button-addon2"
				onClick={handleAddTodo}
				aria-describedby="button-addon2">
				Add
			</Button>
		</InputGroup>
	);
}

export default AddTodo;
