import React from "react";

function MoveButton({ id, onMove }) {
	return (
		<button
			className="note-item__archive-button"
			onClick={() => {
				onMove(id);
			}}
		>
			Pindahkan
		</button>
	);
}

export default MoveButton;
