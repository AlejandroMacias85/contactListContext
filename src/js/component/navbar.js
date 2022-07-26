import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	// const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contactos</span>
			</Link>
			
		</nav>
	);
};
