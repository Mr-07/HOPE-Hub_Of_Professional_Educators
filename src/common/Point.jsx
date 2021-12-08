import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';

function Point({ text }) {
    return (
        <>
            <div className={'flex--container--with--row'}>
                <span style={{paddingRight: '5px'}}>
                    <CircleIcon fontSize={`small`} sx={{ color: '#626262'  }}/>
                </span>
                <span>{`${text}`}</span>
            </div>
        </>
    )
}

export default Point;
