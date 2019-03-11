import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../component/blogcard.jsx";

export class Blog extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid text-center">
					<div className="container">
						<h1 className="display-4">#LearnToCode</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the
							entire horizontal space of its parent.
						</p>
					</div>
				</div>
				<div className="container">
					<div className="row hidden-md-up py-5 mx-auto">
						<div className="col-md-4">
							<BlogCard />
						</div>
						<div className="col-md-4">
							<BlogCard />
						</div>
						<div className="col-md-4">
							<BlogCard />
						</div>
					</div>
					<div className="row hidden-md-up py-5 mx-auto">
						<div className="col-md-4">
							<BlogCard />
						</div>
						<div className="col-md-4">
							<BlogCard />
						</div>
						<div className="col-md-4">
							<BlogCard />
						</div>
					</div>
					<div className="row hidden-md-up py-5 mx-auto">
						<div className="col-md-4">
							<BlogCard />
						</div>
						<div className="col-md-4">
							<BlogCard />
						</div>
						<div className="col-md-4">
							<BlogCard />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
