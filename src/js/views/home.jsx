import React from "react";
import { Link } from "react-router-dom";
import FeaturedList from "../component/FeaturedList";
import SubHead from "../component/SubHead";
import Jumbotron from "../component/jumbotron.jsx";

//Styles sheet
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="body">
				<Jumbotron />
				<div className="subheading">
					<SubHead />
				</div>
				<div className="featured-products">
					<h2 className="section-heading">Featured Items:</h2>
					<FeaturedList />
				</div>
				<div className="how-itworks">
					<h2 className="section-heading mt-4">
						How it works section
					</h2>
					<ul>
						<li>Step one</li>
						<li>Step two</li>
						<li>Step three</li>
						<li>Step four</li>
						<li>Step five</li>
					</ul>
				</div>
			</div>
		);
	}
}
