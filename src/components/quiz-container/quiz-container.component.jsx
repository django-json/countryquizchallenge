import React from "react";

import "./quiz-container.styles.css";

const QuizContainer = ({ children }) => (
	<article className="quiz-container">
		<h1 className="quiz-container__label">Country Quiz</h1>
		<section className="quiz-container__wrapper">
			<img
				className="quiz-container__logo"
				src={require("../../assets/adventure_logo.svg").default}
				alt="Adventure Logo"
			/>
			<div className="quiz-container__questionaire">{children}</div>
		</section>
	</article>
);

export default QuizContainer;
