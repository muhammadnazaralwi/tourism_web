import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";

import { getInitialData } from "../utils/index.js"

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            querySearch: '',
        }

        this.onArchivingNoteEventHandler = this.onArchivingNoteEventHandler.bind(this);
        this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
        this.onSearchNoteEventHandler = this.onSearchNoteEventHandler.bind(this);

        console.log(`notes ${this.state.notes}`);
    }

    onArchivingNoteEventHandler(note) {
        const notes = this.state.notes.map((currNote) => 
            // if the id is equal, change the note object using object destructing
            // if the id is not equal, just return the currNote from previous state 
            currNote.id === note.id ? { ...currNote, archived: !currNote.archived} : currNote
        );
        this.setState({notes});
    }
    
    onDeleteNoteEventHandler(note) {
        let notes = this.state.notes.filter((prevNote) => prevNote !== note);

        this.setState({notes: notes});

        console.log(`notes ${this.state.notes}`);
    }

    onAddNoteEventHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: `${+new Date()}+${title}`,
                        title: title,
                        body: body,
                        createdAt: +new Date(),
                        archived: false,
                    }
                ]
            };
        });
    }

    onSearchNoteEventHandler({ querySearch }) {
        this.setState({querySearch: querySearch});
    }

    render() {
        const querySearch = this.state.querySearch;
        const notes = this.state.notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(querySearch.toLowerCase()));
        const archivedNotes = this.state.notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(querySearch.toLowerCase()));    
        
        return (<>
            <NoteAppHeader search={this.onSearchNoteEventHandler} />
            <NoteAppBody 
                notes={notes}
                archivedNotes={archivedNotes}
                addNote={this.onAddNoteEventHandler}
                onArchivingNote={this.onArchivingNoteEventHandler}
                onDelete={this.onDeleteNoteEventHandler} />
        </>)
    }
}

export default NoteApp;

