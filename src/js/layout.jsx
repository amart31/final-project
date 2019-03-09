import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { About } from "./views/about.jsx";
import { Contact } from "./views/contact.jsx";
import { Products } from "./views/products.jsx";
import { Cart } from "./views/cart.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/cart" component={Cart} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/products" component={Products} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
