import React from "react";

//Styles import
import "../../styles/howitworks.css";

const HowItWorks = () => {
	return (
		<div className="howitwork">
			<div
				className="btn-group"
				role="group"
				aria-label="how it works selector">
				<button type="button" className="btn btn-secondary">
					Leaser
				</button>
				<button type="button" className="btn btn-secondary">
					Renter
				</button>
			</div>
			<div className="stepnumber">Step 1</div>
			<div className="vl" />
			<div className="stepdetails">List your item</div>
			<div className="vl" />
			<div className="stepnumber">Step 2</div>
			<div className="vl" />
			<div className="stepdetails">Ship item, make money</div>
			<div className="vl" />
			<div className="stepnumber">Step 3</div>
			<div className="vl" />
			<div className="stepdetails">Get item back and rent again</div>
		</div>
	);
};

export default HowItWorks;
