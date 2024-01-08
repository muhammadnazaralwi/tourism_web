import React from "react";

function ArchivedButton({ note, onArchivingNote }) {
    if (note.archived) {
        return <button className="note-item__archive-button" onClick={() => onArchivingNote(note)}>Pindahkan</button>
    } else {
        return <button className="note-item__archive-button" onClick={() => onArchivingNote(note)}>Arsipkan</button>
    }
}

export default ArchivedButton;