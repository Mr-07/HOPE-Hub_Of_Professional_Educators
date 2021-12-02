import React from 'react'
import photo from 'images/frequency.jpg';
import DoneIcon from '@mui/icons-material/Done';

export default function Frequency() {
    return (
        <div className="card-container">
            <img style={{height: '100%', width: '50%'}} src={photo} />
            <div style={{flexGrow: 1, flexDirection: "column", display: 'flex', justifyContent: 'center', alignItems: "flex-start", paddingLeft: '25px', paddingRight: '25px'}}>
                <span style={{fontSize: '2.5em'}}>{`Computer-delivered IELTS is available 3 times a day, 7 days a week`}</span>
                <span style={{paddingBottom: '20px'}}>{`For almost 30 years, IELTS has been a paper-based English test that people have used to achieve their work, study and migration dreams. But you asked for more choice – and we’ve listened. Meet computer-delivered IELTS: the same IELTS test you know, delivered via computer, with multiple test sessions a day and fast results.`}</span>
                <div>
                    <span style={{verticalAlign: 'middle', paddingRight: '5px'}}><DoneIcon/></span>
                    <span>{`Results in 2-5 days`}</span>
                </div>
                <div>
                    <span style={{verticalAlign: 'middle', paddingRight: '5px'}}><DoneIcon/></span>
                    <span>{`Testing up to 7 days a week`}</span>
                </div>
                <div>
                    <span style={{verticalAlign: 'middle', paddingRight: '5px'}}><DoneIcon/></span>
                    <span>{`Free IELTS Masterclass`}</span>
                </div>
                <div>
                    <span style={{verticalAlign: 'middle', paddingRight: '5px'}}><DoneIcon/></span>
                    <span>{`Free computer-delivered IELTS practice test`}</span>
                </div>
            </div>
        </div>
    )
}
