import React from 'react';
export default function ShortPoint ({title, description}) {
    return (
        <>
            <span><strong>{title}</strong></span>
            <p>{description}</p>
        </>
    )
}