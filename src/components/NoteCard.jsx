import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import NoteAction from "./NoteAction";

function NoteCard({
	id,
	title,
	createdAt,
	body,
	archived,
	onDelete,
	onArchive,
}) {
	return (
		<div className="note-item">
			<div className="note-item__content">
				<NoteHeader title={title} createdAt={createdAt} />
				<NoteBody body={body} />
			</div>

			<NoteAction
				id={id}
				onDelete={onDelete}
				onArchive={onArchive}
				archived={archived}
			/>
		</div>
	);
}

export default NoteCard;
