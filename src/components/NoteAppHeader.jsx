import React from "react";

class NoteAppHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            querySearch: '',
        }

        this.onQuerySearchChangeEventHandler = this.onQuerySearchChangeEventHandler.bind(this);
    }

    onQuerySearchChangeEventHandler(event) {
        this.setState({querySearch: event.target.value}, () => {
            return this.props.search(this.state);
        });
    }

    render() {
        return (<>
        <div className="note-app__header">
            <h1>Notes</h1>
            <div className="note-search">
                <input 
                    type="text" placeholder="Cari catatan ..." 
                    value={this.state.querySearch} 
                    onChange={this.onQuerySearchChangeEventHandler} />
            </div>
        </div>
        </>)
    }
}

export default NoteAppHeader;