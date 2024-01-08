import React from "react";

function EmptyListMessage({ kind }) {
    return (
        <div className="notes-list__empty-message">
            <p>{kind} kosong :(</p>
        </div>
    )
}

export default EmptyListMessage;