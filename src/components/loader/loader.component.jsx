import React from "react";

import "./loader.styles.css";

const Loader = () => (
	<div className="loader">
		<p className="loader__question" />
		<p className="loader__select-answer" />
		<div className="loader__options">
			<p></p>
			<p></p>
			<p></p>
			<p></p>
		</div>
	</div>
);

export default Loader;
