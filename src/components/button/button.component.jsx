import React from "react";
import classNames from "classnames";

import "./button.styles.css";

const Button = ({ variant, label, handleClick }) => {
	const classes = classNames("btn", {
		[`btn--${variant}`]: variant,
	});

	return <button className={classes}>{label}</button>;
};

export default Button;

Button.defaultProps = {
	label: "Default",
	handleClick: () => {},
};
