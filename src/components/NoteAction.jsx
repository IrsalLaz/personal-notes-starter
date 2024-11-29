import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import MoveButton from "./MoveButton";

function NoteAction({ id, onDelete, onArchive, archived, onMove }) {
	return (
		<div className="note-item__action">
			<DeleteButton id={id} onDelete={onDelete} />
			{archived ? (
				<MoveButton id={id} onMove={onMove} />
			) : (
				<ArchiveButton id={id} onArchive={onArchive} />
			)}
		</div>
	);
}

export default NoteAction;
