import React from "react";
import NoteCard from "./NoteCard";

function NotesContainer({ notes, onDelete, onArchive, onMove }) {
	if (notes.length !== 0) {
		return (
			<div className="notes-list">
				{notes.map((note) => (
					<NoteCard
						key={note.id}
						id={note.id}
						title={note.title}
						createdAt={note.createdAt}
						body={note.body}
						archived={note.archived}
						onDelete={onDelete}
						onArchive={onArchive}
						onMove={onMove}
					/>
				))}
			</div>
		);
	} else {
		return <p className="notes-list__empty-message">Tidak ada catatan.</p>;
	}
}

export default NotesContainer;
