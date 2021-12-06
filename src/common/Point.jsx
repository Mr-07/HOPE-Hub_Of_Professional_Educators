import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';

function Point({ text}) {
    return (
        <>
            <div>
                <span style={{verticalAlign: 'middle', paddingRight: '5px'}}>
                    <CircleIcon sx={{ color: '#626262'  }}/>
                </span>
                <span>{`${text}`}</span>
            </div>
        </>
    )
}

export default Point;
