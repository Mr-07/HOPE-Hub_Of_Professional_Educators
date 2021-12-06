import React from 'react'

function Image({ source, imageClass }) {
    return (
        <div className={imageClass}>
            <img src={ source } />
        </div>
    )
}

export default Image;
