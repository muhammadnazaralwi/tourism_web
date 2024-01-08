import React from "react";
import SectionTitle from "./SectionTitle";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charRemaining: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;

        if (title.length <= this.state.charRemaining) {
            this.setState({title: title});
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title: '',
                body: ''
            };
        });
    }

    render() {
        return (<>
            <div className="note-input">
                <SectionTitle title={"Buat catatan"} />
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter: {this.state.charRemaining - this.state.title.length}</p>
                    <input 
                        className="note-input__title" 
                        type="text" 
                        placeholder="Ini adalah judul ..." 
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler} />
                    <textarea 
                        className="note-input__body" 
                        type="text" 
                        placeholder="Tuliskan catatanmu di sini ..." 
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        </>)
    }
}

export default NoteInput;