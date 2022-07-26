import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { EditUser } from "./views/EditUser";
import { AddUser } from "./views/AddUser";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DelUser } from "./views/DelUser";
import { ContactList } from "./views/ContactList";
// import { Modal } from "../component/Modal";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
						<ContactList />
						</Route>
						<Route  path="/AddUser/:id">
							<EditUser />
						</Route>
						<Route  path="/AddUser">
							<AddUser />
						</Route>
						<Route path="/DelUser">
							<DelUser />
							
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
