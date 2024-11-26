import React from "react";
import CreateNotes from "./CreateNotes";
import NotesContainer from "./NotesContainer";
import { getInitialData } from "../utils";

class NotesApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
	}

	// TODO finish this
	onDeleteHandler(id) {}

	// TODO finish this
	onArchiveHandler(id) {}

	// TODO finish this
	onAddNotesHandler({ title, body, isArchive }) {
		this.setState((prevState) => {
			return {
				notes: [
					...prevState.notes,
					{
						id: +new Date(),
						title: title,
						body: body,
						isArchive: isArchive,
					},
				],
			};
		});
	}

	render() {
		return (
			<main>
				<h1>Test</h1>

				{/* TODO add real content */}
				<CreateNotes addNotes={this.onAddNotesHandler} />

				<NotesContainer
					notesTitle={"Catatan Aktif"}
					notes={this.state.notes}
					onDelete={this.onDeleteHandler}
					onArchive={this.onArchiveHandler}
				/>
			</main>
		);
	}
}

export default NotesApp;
