import React from "react";
import "../../../styles/subhead.css";

const SubHeadCard = props => {
	return (
		<div>
			<div className="subheadbutton">
				<img
					src="http://via.placeholder.com/640x360"
					alt="Card image cap"
					style={{ width: "100%" }}
				/>
				<div className="subhead-text">Define this card</div>
			</div>
		</div>
	);
};

export default SubHeadCard;
