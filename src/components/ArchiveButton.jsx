import React from "react";

function ArchiveButton({ id, onArchive }) {
	return (
		<button className="archive-btn" onClick={onArchive(id)}>
			Archive
		</button>
	);
}

export default ArchiveButton;
