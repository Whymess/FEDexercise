import React from "react";

export default props => {
	var skincolor = `My skin color is: ${props.skin_color}`;
	return <p> {props.link || skincolor} </p>;
};
