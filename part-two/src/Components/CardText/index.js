import React from "react";

export default props => (
	<p className="card-text"> {props.summary || props.homeworld} </p>
);
