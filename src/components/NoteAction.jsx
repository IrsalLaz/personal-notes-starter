import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteAction({ id, onDelete, onArchive }) {
	return (
		<div className="action-button">
			<DeleteButton />
			<ArchiveButton />
		</div>
	);
}

export default NoteAction;
