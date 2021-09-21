import React from "react";

import "./quiz-category.styles.css";

import Button from "../button/button.component";

const QuizCategory = ({ categoryChangeHandler }) => (
	<div className="quiz-category">
		<img
			className="quiz__logo"
			src={require("../../assets/adventure_logo.svg").default}
			alt="Adventure Logo"
		/>
		<h2>Select Category:</h2>
		<Button
			className="btn--outline btn-w-100"
			label="Capital of the country"
			handleClick={() => categoryChangeHandler("capital")}
		/>
		<Button
			className="btn--outline btn-w-100"
			label="Flag of the country"
			handleClick={() => categoryChangeHandler("flag")}
		/>
	</div>
);

export default QuizCategory;

QuizCategory.default = {
	categoryChangeHandler: () => {},
};
