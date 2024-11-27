import React from "react";
import NoteCard from "./NoteCard";

function NotesContainer({ notes, onDelete, onArchive }) {
	return (
		<div className="notes-list">
			{/* TODO: change to variable instead */}
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
