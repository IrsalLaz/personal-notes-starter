import React from "react";

class SearchInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
		};

		this.onSearchInputHandler = this.onSearchInputHandler.bind(this);
	}

	onSearchInputHandler(event) {}

	render() {
		return (
			<div className="note-search">
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Cari catatan..."
				/>
			</div>
		);
	}
}

export default SearchInput;
