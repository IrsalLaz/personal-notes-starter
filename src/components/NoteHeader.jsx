import React from "react";

function NoteHeader({ title, createdAt }) {
	return (
		<div className="note-header">
			<h3 className="note-header__title">{title}</h3>
			<p className="note-header__date">{createdAt}</p>
		</div>
	);
}

export default NoteHeader;
