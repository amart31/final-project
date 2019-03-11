import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
	return (
		<div>
			<div className="card text-center rounded-0">
				<img
					className="card-img-top rounded-0"
					src="https://via.placeholder.com/350x150"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Blog Post name</h5>
					<p className="card-text">
						Lorem ninja ipsum dolor sit amet, consectetuer
						adipiscing elit, sed diam nonummy nibh euismod tincidunt
						ut laoreet dolore magna aliquam erat volutpat. Ut ninja
						wisi enim ad minim veniam, quis nostrud exerci tation
						ullamcorper suscipit ninja lobortis nisl ut aliquip ex
						ea commodo consequat. Duis ninja autem vel eum iriure
						dolor in hendrerit in vulputate ninja velit esse .
					</p>
					<Link to="/">read more</Link>
				</div>
				<div className="card-footer text-muted">6 days ago</div>
			</div>
		</div>
	);
}
