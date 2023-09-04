import React from "react";

const DeleteButton = ({ onClick }) => {
    const onDataClick = e => {
        e.preventDefault();
        if(!onClick) return;
        onClick();
    }
    return (
        <a
            href="#"
            className="delete-button"
            onClick={onDataClick}
        >
            Delete
        </a>
    )
}

export default React.memo(DeleteButton);