import React from "react";

export default props => {
	var films = `I have been in ${props.films} films`;
	return (
		<h6 className="card-subtitle mb-2 text-muted">
			{props.short_title || films}
		</h6>
	);
};
