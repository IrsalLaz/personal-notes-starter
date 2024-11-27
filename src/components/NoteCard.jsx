import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import NoteAction from "./NoteAction";

function NoteCard({
	id,
	title,
	createdAt,
	body,
	isArchive,
	onDelete,
	onArchive,
}) {
	return (
		<div className="note-item">
			<div className="note-item__content">
				<NoteHeader title={title} createdAt={createdAt} />
				<NoteBody body={body} />
				<NoteAction id={id} onDelete={onDelete} onArchive={onArchive} isArchive={isArchive} />
			</div>
		</div>
	);
}

export default NoteCard;
