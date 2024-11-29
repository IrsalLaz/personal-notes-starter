import React from "react";

class CreateNotes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
			archived: false,
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
				archived: event.target.value,
			};
		});
	}

	onSubmitHandler(event) {
		event.preventDefault();
		// this addNotes event comes from NotesApp
		this.props.addNotes(this.state);
	}

	render() {
		return (
			<div className="note-input">
				<h2>Buat Catatan</h2>

				{/*	TODO add character counter */}
				<p className="note-input__title__char-limit">Sisa karakter: {50}</p>
				<form className="create-note" onSubmit={this.onSubmitHandler}>
					<input
						className="note-input__title"
						type="text"
						name="title"
						id="title"
						maxLength={50}
						placeholder="Ini adalah judul..."
						onChange={this.onTitleChangeHandler}
					/>
					<textarea
						className="note-input__body"
						name="body"
						id="body"
						placeholder="Tuliskan catatanmu di sini"
						onChange={this.onBodyChangeHandler}
					></textarea>

					<button type="submit">Buat</button>
				</form>
			</div>
		);
	}
}

export default CreateNotes;
