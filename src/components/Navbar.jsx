import React from "react";
import SearchInput from "./SearchInput";

function Navbar() {
	return (
		<nav className="note-app__header">
			<h1>Irsal's Notes</h1>

			<SearchInput />
		</nav>
	);
}

export default Navbar;
