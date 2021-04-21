import React from "react";
import classNames from "classnames";

import "./answer-item.styles.css";

const AnswerItem = ({ item, correct, checking, handleClick }) => {
	const classes = classNames("answer-item", {
		"answer-item--bg-correct": correct && checking,
		"answer-item--bg-wrong": !correct && checking,
	});

	return (
		<li className={classes} onClick={handleClick}>
			<div className="answer-item__details">
				<span className="answer-item__letter">{item.letter}</span>
				<span className="answer-item__name">{item.name}</span>
			</div>
			{checking && correct ? (
				<i className="material-icons">check_circle_outline</i>
			) : (
				checking && <i className="material-icons">highlight_off</i>
			)}
		</li>
	);
};

export default AnswerItem;

AnswerItem.defaultProps = {
	checking: false,
	correct: false,
	item: { letter: "A", name: "Afghanistan" },
	handleClick: () => {},
};
