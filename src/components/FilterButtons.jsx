import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function FilterButtons({ setFilterOption }) {
	return (
		<ButtonGroup className="button-group">
			<Button variant="outline-dark" onClick={() => setFilterOption("all")}>
				All
			</Button>
			<Button variant="outline-dark" onClick={() => setFilterOption("active")}>
				Active
			</Button>
			<Button
				variant="outline-dark"
				onClick={() => setFilterOption("completed")}>
				Completed
			</Button>
		</ButtonGroup>
	);
}

export default FilterButtons;
