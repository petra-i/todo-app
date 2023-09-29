import React from "react";

function DeleteCompletedTasks({ deleteCompleted }) {
	return (
		<div className="clear-button-container">
			<span onClick={deleteCompleted}>Clear completed</span>
		</div>
	);
}

export default DeleteCompletedTasks;
