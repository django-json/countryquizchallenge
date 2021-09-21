import React, { Fragment } from "react";

import AnswerItem from "../answer-item/answer-item.component";
import Button from "../button/button.component";
import Results from "../../pages/results/results.component";

const QuizContent = ({
	quiz,
	quizEnd,
	score,
	question,
	options,
	currentIndex,
	answer,
	wrongAnswer,
	userAnswer,
	selected,
	disabled,
	checkAnswer,
	finishQuizHandler,
	nextQuestionHandler,
	tryAgain,
	category,
}) => {
	return !quizEnd ? (
		<Fragment>
			<img
				className="quiz__logo"
				src={require("../../assets/adventure_logo.svg").default}
				alt="Adventure Logo"
			/>
			{category === "flag" && quiz.length > 0 && (
				<img
					className="quiz__flag"
					src={quiz[currentIndex].flag_link}
					alt="Country Flag"
				/>
			)}
			<p className="quiz__question">{question}</p>
			<p className="quiz__select-answer">Select an answer:</p>
			<div className="quiz__options">
				{options.map((answerOption, index) => (
					<AnswerItem
						key={index}
						index={index}
						answer={answer}
						wrongAnswer={wrongAnswer}
						answerOption={answerOption}
						userAnswer={userAnswer}
						selected={selected}
						handleClick={checkAnswer}
					/>
				))}
			</div>
			<div className="quiz__btn-wrapper">
				{//Show Next if not the last question, answer is correct, and disabled is false
				//Otherwise, show Finish
				currentIndex < quiz.length - 1 && !disabled && !wrongAnswer ? (
					<Button label="Next" handleClick={nextQuestionHandler} />
				) : (
					(wrongAnswer ||
						(currentIndex === quiz.length - 1 && !disabled)) && (
						<Button
							label="Finish"
							handleClick={finishQuizHandler}
						/>
					)
				)}
			</div>
		</Fragment>
	) : (
		<Results score={score} tryAgain={tryAgain} />
	);
};

export default QuizContent;
