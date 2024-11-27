import React from "react";

function NoteHeader({ title, createdAt }) {
	return (
		<div>
			<h3 className="note-item__title">{title}</h3>
			<p className="note-item__date">{createdAt}</p>
		</div>
	);
}

export default NoteHeader;
