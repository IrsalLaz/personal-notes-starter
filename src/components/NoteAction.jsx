import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteAction({ id, onDelete, onArchive, isArchive }) {
	return (
		<div className="note-item__action">
			<DeleteButton />
			{/* TODO add is archive checking */}
			{/* {if (!isArchive){} } */}
			{/* <ArchiveButton /> */}
		</div>
	);
}

export default NoteAction;
