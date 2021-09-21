import React, { Component } from "react";

import "./quiz.styles.css";

import QuizCategory from "../quiz-category/quiz-category.component";
import QuizContentContainer from "../quiz-content/quiz-content.container";

class Quiz extends Component {
	constructor() {
		super();
		this.state = {
			quiz: [], //quiz data from API
			userAnswer: null, //current user answer
			question: null, //current question
			answer: null, //current question answer
			wrongAnswer: null, //current wrong answer
			options: [], //answer options
			score: 0,
			currentIndex: 0,
			disabled: true,
			quizEnd: false,
			category: null,
		};

		this.loadQuiz = this.loadQuiz.bind(this);
		this.getQuiz = this.getQuiz.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
		this.nextQuestionHandler = this.nextQuestionHandler.bind(this);
		this.finishQuizHandler = this.finishQuizHandler.bind(this);
		this.tryAgain = this.tryAgain.bind(this);
		this.categoryChangeHandler = this.categoryChangeHandler.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		const { currentIndex } = this.state;
		if (prevState.currentIndex !== currentIndex) {
			this.loadQuiz();
		}
	}

	categoryChangeHandler(category) {
		this.setState({ category }, () => this.getQuiz());
	}

	getQuiz() {
		const { category } = this.state;

		fetch(`http://localhost:3001/api/quiz/${category}`)
			.then((res) => res.json())
			.then((quiz) =>
				this.setState({ quiz }, () => {
					this.loadQuiz();
				})
			)
			.catch((err) => console.log(err));
	}

	loadQuiz() {
		const { currentIndex, quiz } = this.state;
		this.setState(() => {
			return {
				question: quiz[currentIndex].question,
				options: quiz[currentIndex].options,
				answer: quiz[currentIndex].answer,
				disabled: true,
			};
		});
	}

	checkAnswer(userAnswer) {
		const { answer, score } = this.state;
		this.setState(
			{
				userAnswer: userAnswer,
				disabled: false,
			},
			() => {
				if (userAnswer === answer) {
					this.setState({ score: score + 1 });
				} else {
					this.setState({ wrongAnswer: userAnswer });
				}
			}
		);
	}

	nextQuestionHandler() {
		const { currentIndex } = this.state;
		this.setState({ currentIndex: currentIndex + 1 }, () =>
			// reset values when user clicks next
			this.setState({ userAnswer: null, wrongAnswer: null })
		);
	}

	finishQuizHandler() {
		this.setState({ quizEnd: true });
	}

	tryAgain(e) {
		const { score } = this.state;

		if (score === 5 || e.target.className === "quiz__label") {
			this.setState({ category: null });
		}
		this.setState({
			currentIndex: 0,
			score: 0,
			userAnswer: null,
			wrongAnswer: null,
			quizEnd: false,
			disabled: true,
		});
	}

	render() {
		const { category } = this.state;
		return (
			<article className="quiz">
				<h1 className="quiz__label" onClick={(e) => this.tryAgain(e)}>
					Country Quiz
				</h1>
				<section className="quiz__wrapper">
					{category ? (
						<QuizContentContainer
							{...this.state}
							checkAnswer={this.checkAnswer}
							nextQuestionHandler={this.nextQuestionHandler}
							finishQuizHandler={this.finishQuizHandler}
							tryAgain={this.tryAgain}
						/>
					) : (
						<QuizCategory
							categoryChangeHandler={this.categoryChangeHandler}
						/>
					)}
				</section>
			</article>
		);
	}
}

export default Quiz;
