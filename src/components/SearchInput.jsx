import React from "react";

function SearchInput({ onSearch }) {
	return (
		<div className="note-search">
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Cari catatan..."
				onChange={onSearch}
			/>
		</div>
	);
}

export default SearchInput;
