import React from "react";
import { Link } from "react-router-dom";
import FeaturedList from "../component/FeaturedList";
import SubHead from "../component/SubHead";
//Styles sheet
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="body">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Fluid jumbotron</h1>
						<p className="lead">This is a modified jumbotron </p>
					</div>
				</div>
				<div className="subheading">
					<SubHead />
				</div>
				<div className="featured-products">
					<h2 className="section-heading">Featured Items:</h2>
					<FeaturedList />
				</div>
				<div className="how-itworks">
					<h1>how it works section</h1>
				</div>
			</div>
		);
	}
}
