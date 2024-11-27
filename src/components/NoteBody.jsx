import React from "react";

function NoteBody({ body }) {
	return (
		<div className="note-item__body">
			<p>{body}</p>
		</div>
	);
}

export default NoteBody;
