import React from "react";
import NoteInput from "./NoteInput"
import NoteList from "./NoteList";
import SectionTitle from "./SectionTitle";
import EmptyListMessage from "./EmptyListMessage";

function NoteAppBody({notes, archivedNotes, addNote, onArchivingNote, onDelete}) {
    let notesView;
    if (notes.length === 0) {
        notesView = <EmptyListMessage kind={"Catatan Aktif"} />
    } else {
        notesView = <NoteList notes={notes} onArchivingNote={onArchivingNote} onDelete={onDelete} />
    }

    let archivedNotesView;
    if (archivedNotes.length === 0) {
        archivedNotesView = <EmptyListMessage kind={"Arsip"} />
    } else {
        archivedNotesView = <NoteList notes={archivedNotes} onArchivingNote={onArchivingNote} onDelete={onDelete} />
    }

    return (
        <div className="note-app__body">
            <NoteInput addNote={addNote} />
            
            <SectionTitle title={"Catatan Aktif"} />
            {notesView}
            <SectionTitle title={"Arsip"} />
            {archivedNotesView}
        </div>
    )
}

export default NoteAppBody;