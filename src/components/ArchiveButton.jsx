import React from "react";

function ArchiveButton({ id, onArchive }) {
	return (
		<button className="note-item__archive-button" onClick={() => onArchive(id)}>
			Archive
		</button>
	);
}

export default ArchiveButton;
