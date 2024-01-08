import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onArchivingNote, onDelete }) {
    return (<>
        <div className="notes-list">
            { notes.map((note) => 
                <NoteItem 
                    note={note}
                    onArchivingNote={onArchivingNote}
                    onDelete={onDelete}
                />) 
            }
        </div>
    </>)
}

export default NoteList;