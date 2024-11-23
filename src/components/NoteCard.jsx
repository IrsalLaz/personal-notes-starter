import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import NoteAction from "./NoteAction";

function NoteCard({ id, title, createdAt, body, onDelete, onArchive }) {
	return (
		<div className="note-cards">
			<NoteHeader title={title} createdAt={createdAt} />
			<NoteBody body={body} />
			<NoteAction id={id} onDelete={onDelete} onArchive={onArchive} />
		</div>
	);
}

export default NoteCard;
