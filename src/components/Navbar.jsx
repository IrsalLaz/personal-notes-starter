import React from "react";
import SearchInput from "./SearchInput";

function Navbar({ onSearch }) {
	return (
		<nav className="note-app__header">
			<h1>Irsal's Notes</h1>

			<SearchInput onSearch={onSearch} />
		</nav>
	);
}

export default Navbar;
