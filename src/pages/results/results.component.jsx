import React from "react";

import "./results.styles.css";

import Button from "../../components/button/button.component";

const Results = ({ score, tryAgain }) => (
	<section className="results">
		<img
			className="results__logo"
			src={require("../../assets/winner.svg").default}
			alt="results logo"
		/>
		<div className="results__details">
			<h2>Results</h2>
			<p>
				You got <span className="results__results">{score}</span>{" "}
				correct answer(s)
			</p>
		</div>
		<Button variant="outline" label="Try again" handleClick={tryAgain} />
	</section>
);

export default Results;

Results.defaultProps = {
	score: 4,
	tryAgain: () => {},
};
