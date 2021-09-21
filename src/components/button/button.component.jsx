import React from "react";
import classNames from "classnames";

import "./button.styles.css";

const Button = ({ variant, label, handleClick, className }) => {
	const classes = classNames("btn", className, {
		[`btn--${variant}`]: variant,
	});

	return (
		<button className={classes} onClick={handleClick}>
			{label}
		</button>
	);
};

export default Button;

Button.defaultProps = {
	label: "Default",
	handleClick: () => {},
};
