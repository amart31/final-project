import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../img/logo1.jpg";

/**
 *  Here I declare my component as an arrow function
 */

export const Navbar = () => {
	//I have to loop all the items and convert them into LIs
	const items = menu.map((item, index) => (
		<li className="nav-item" key={index}>
			<a className="nav-link" href={item.url}>
				{item.label}
			</a>
		</li>
	));

	//this methods says how the NavBar should look like in HTML
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			{/* here I pass the array of LIs into the UL */}
			<ul className="navbar-nav mr-auto">{items}</ul>
		</nav>
	);
};

// declare a JS array with the menu items that you want

let menu = [
	{ label: "Home", url: "/home" },
	{ label: "Cart", url: "/cart" },
	{ label: "Products", url: "/products" },
	{ label: "Contact Us", url: "/contact" },
	{ label: "About Us", url: "/about" }
];
