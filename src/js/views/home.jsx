import React from "react";
import { Link } from "react-router-dom";
import JumboCarr from "../component/functional/jumbotron.jsx";

import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<JumboCarr />
				<div className="text-center mt-5">
					<h1>Hello Rigo!</h1>
				</div>
			</div>
		);
	}
}
