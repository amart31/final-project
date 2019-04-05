import React from "react";

let imgUrl =
	"https://cdn.pixabay.com/photo/2017/01/17/03/58/bonding-1985863_960_720.jpg";
const jumbostyle = {
	backgroundImage: "url(" + imgUrl + ")",
	backgroundSize: "cover",
	color: "white",
	height: "500px"
};

const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid" style={jumbostyle}>
			<div className="container">
				<h1 className="display-4">Welcome to ReactCloset</h1>
				<p className="lead">
					This is a modified jumbotron designed to inspire
				</p>
				<button type="button" className="btn btn-success">
					Shop
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
