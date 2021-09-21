import React from "react";
import classNames from "classnames";

import "./answer-item.styles.css";

const letters = ["A", "B", "C", "D"];

const AnswerItem = ({
	index,
	answerOption,
	userAnswer,
	answer,
	wrongAnswer,
	handleClick,
}) => {
	const correctCondition =
		(userAnswer === answerOption && userAnswer === answer) ||
		(answer === answerOption && wrongAnswer !== null);

	const classes = classNames("answer-item", {
		"answer-item--bg-correct": correctCondition,
		"answer-item--bg-wrong": wrongAnswer === answerOption,
		"answer-item--disabled": wrongAnswer || userAnswer, // disable options when user choose an answer
	});

	return (
		<li className={classes} onClick={() => handleClick(answerOption)}>
			<div className="answer-item__details">
				<span className="answer-item__letter">{letters[index]}</span>
				<span className="answer-item__name">{answerOption}</span>
			</div>
			{correctCondition ? (
				<i className="material-icons">check_circle_outline</i>
			) : (
				wrongAnswer === answerOption &&
				userAnswer !== null && (
					<i className="material-icons">highlight_off</i>
				)
			)}
		</li>
	);
};

export default AnswerItem;

AnswerItem.defaultProps = {
	index: 0,
	answerOption: "Philippines",
	answer: null,
	userAnswer: null,
	wrongAnswer: null,
	handleClick: () => {},
};
