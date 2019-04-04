import React from "react";
import SubHeadCard from "./functional/FeaturedProducts";

const SubHead = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md">
					<SubHeadCard />
				</div>
				<div className="col-md">
					<SubHeadCard />
				</div>
				<div className="col-md">
					<SubHeadCard />
				</div>
			</div>
		</div>
	);
};
export default SubHead;
