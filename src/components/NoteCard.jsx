import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import NoteAction from "./NoteAction";

function NoteCard({ id, title, createdAt, body, isArchive, onDelete, onArchive }) {
	return (
		<div className="note-cards">
			<NoteHeader title={title} createdAt={createdAt} />
			<NoteBody body={body} />
			<NoteAction id={id} onDelete={onDelete} onArchive={onArchive} isArchive={isArchive} />
		</div>
	);
}

export default NoteCard;
