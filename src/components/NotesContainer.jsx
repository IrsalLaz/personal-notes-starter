import React from "react";
import NoteCard from "./NoteCard";

function NotesContainer({ notesTitle, notes, onDelete, onArchive }) {
	return (
		<div className="card-list">
			{/* TODO: change to variable instead */}
			<h2>{notesTitle}</h2>
			{notes.map((note) => (
				<NoteCard
					key={note.id}
					id={note.id}
					title={note.title}
					createdAt={note.createdAt}
					body={note.body}
					isArchive={note.isArchive}
					onDelete={onDelete}
					onArchive={onArchive}
				/>
			))}
		</div>
	);
}

export default NotesContainer;
