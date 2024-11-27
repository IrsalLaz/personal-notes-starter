import React from "react";

function NoteHeader({ title, createdAt }) {
	return (
		<div className="note-item__content">
			<h3 className="note-item__title">{title}</h3>
			<p className="note-item__date">{createdAt}</p>
		</div>
	);
}

export default NoteHeader;
