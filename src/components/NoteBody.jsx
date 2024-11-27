import React from "react";

function NoteBody({ body }) {
	return (
		<div>
			<p className="note-item__body">{body}</p>
		</div>
	);
}

export default NoteBody;
