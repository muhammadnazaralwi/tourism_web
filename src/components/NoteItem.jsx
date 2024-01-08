import React from "react";
import ArchivedButton from "./ArchivedButton";
import { showFormattedDate } from "../utils";

function NoteItem({ note, onArchivingNote, onDelete }) {
    return (<>
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onDelete(note)}>Delete</button>
                <ArchivedButton note={note} onArchivingNote={onArchivingNote} />
            </div>
        </div>
    </>)
}

export default NoteItem;