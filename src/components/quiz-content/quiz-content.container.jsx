import React, { Fragment } from "react";

import QuizContent from "./quiz-content.component";
import Loader from "../loader/loader.component";

const QuizContentContainer = (props) => {
	return props.quiz.length > 0 ? (
		<QuizContent {...props} />
	) : (
		<Fragment>
			<img
				className="quiz__logo"
				src={require("../../assets/adventure_logo.svg").default}
				alt="Adventure Logo"
			/>
			<Loader />
		</Fragment>
	);
};

export default QuizContentContainer;
