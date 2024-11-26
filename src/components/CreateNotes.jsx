import React from "react";

class CreateNotes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
			isArchive: false,
		};

		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
		this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
		this.onArchiveStatusChangeHandler =
			this.onArchiveStatusChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onTitleChangeHandler(event) {
		this.setState(() => {
			return {
				title: event.target.value,
			};
		});
	}
	onBodyChangeHandler(event) {
		this.setState(() => {
			return {
				body: event.target.value,
			};
		});
	}
	onArchiveStatusChangeHandler(event) {
		this.setState(() => {
			return {
				isArchive: event.target.value,
			};
		});
	}

	onSubmitHandler(event) {
		event.preventDefault();
		// thiss addNotes event comes from NotesApp
		this.props.addNotes(this.state);
	}

	render() {
		return (
			<form className="create-note" onSubmit={this.onSubmitHandler}>
				<input
					type="text"
					name="title"
					id="title"
					placeholder="Ini adalah judul..."
				/>
				<textarea
					name="body"
					id="body"
					placeholder="Tuliskan catatanmu di sini"
				></textarea>
				<button type="submit">Buat</button>
			</form>
		);
	}
}

export default CreateNotes;
