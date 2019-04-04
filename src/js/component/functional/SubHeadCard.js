import React from "react";
import "../../../styles/subhead.css";

const SubHeadCard = props => {
	return (
		<div className="subheadbutton mr-4">
			<img
				src={props.imgurl}
				alt="Card image cap"
				style={{ width: "100%" }}
			/>
			<div className="subhead-text">{props.text}</div>
		</div>
	);
};

export default SubHeadCard;
