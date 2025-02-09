import React from "react";
import CreateNotes from "./CreateNotes";
import NotesContainer from "./NotesContainer";
import { getInitialData } from "../utils";
import Navbar from "./Navbar";

class NotesApp extends React.Component {
	constructor(props) {
		super(props);

		const initialData = getInitialData();
		const notes = initialData.filter((note) => note.archived === false);
		const archived_notes = initialData.filter((note) => note.archived === true);

		this.state = {
			notes: notes,
			archived_notes: archived_notes,
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onMoveHandler = this.onMoveHandler.bind(this);
		this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
		this.onSearchInputHandler = this.onSearchInputHandler.bind(this);
	}

	onDeleteHandler(id) {
		const notes = this.state.notes.filter((note) => note.id != id);
		this.setState({ notes });
	}

	onArchiveHandler(id) {
		// get notes target
		const notes = this.state.notes.filter((note) => note.id === id);

		// change target notes archived value to true
		notes[0].archived = true;

		// add it to archived_notes list
		this.setState((prevState) => {
			return {
				archived_notes: [...prevState.archived_notes, notes[0]],
				notes: prevState.notes.filter((note) => note.id !== id),
			};
		});
	}

	onMoveHandler(id) {
		const notes = this.state.archived_notes.filter((note) => note.id === id);

		notes[0].archived = false;

		this.setState((prevState) => {
			return {
				notes: [...prevState.notes, notes[0]],
				archived_notes: prevState.archived_notes.filter(
					(note) => note.id !== id
				),
			};
		});
	}

	onAddNotesHandler({ title, body, archived }) {
		this.setState((prevState) => {
			return {
				notes: [
					...prevState.notes,
					{
						id: +new Date(),
						title: title,
						body: body,
						createdAt: new Date().toISOString(),
						archived: archived,
					},
				],
			};
		});
	}

	onSearchInputHandler(event) {
		// get the search value
		const keyword = event.target.value.toLowerCase();

		// filter notes based on keyword
		this.setState(() => {
			if (keyword === "") {
				return {
					notes: this.state.notes,
					archived_notes: this.state.archived_notes,
				};
			} else {
				return {
					notes: this.state.notes.filter((note) =>
						note.title.toLowerCase().includes(keyword)
					),
					archived_notes: this.state.archived_notes.filter((note) =>
						note.title.toLowerCase().includes(keyword)
					),
				};
			}
		});
	}

	render() {
		return (
			<>
				<Navbar onSearch={this.onSearchInputHandler} />
				<main className="note-app__body">
					<CreateNotes addNotes={this.onAddNotesHandler} />

					<h2>Catatan Aktif</h2>

					<NotesContainer
						notes={this.state.notes}
						onDelete={this.onDeleteHandler}
						onArchive={this.onArchiveHandler}
						onMove={this.onMoveHandler}
					/>

					<h2>Arsip</h2>

					<NotesContainer
						notes={this.state.archived_notes}
						onDelete={this.onDeleteHandler}
						onArchive={this.onArchiveHandler}
						onMove={this.onMoveHandler}
					/>
				</main>
			</>
		);
	}
}

export default NotesApp;
