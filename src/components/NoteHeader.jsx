import React from "react";
import { showFormattedDate } from "../utils";

function NoteHeader({ title, createdAt }) {
	return (
		<div>
			<h3 className="note-item__title">{title}</h3>
			<p className="note-item__date">{showFormattedDate(createdAt)}</p>
		</div>
	);
}

export default NoteHeader;
