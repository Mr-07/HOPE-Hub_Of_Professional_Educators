import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getScoresInBandObj } from 'common/utilities.jsx';

export default function BandCalculator() {
    const [listeningScore, setListeningScore] = useState(0);
    const [readingScore, setReadingScore] = useState(0);
    const [speakingScore, setSpeakingScore] = useState(0);
    const [writingScore, setWritingScore] = useState(0);
    const [scoreObj, setScoreObj] = useState(getScoresInBandObj());
    
    const isValid = (score, scoreType) => {
        if (!(score >= 0 && score <= 40)) {
            document.getElementById(scoreType).classList.add('error');
            return false;
        } else {
            document.getElementById(scoreType).classList.remove('error');
            return true;
        }
    };
    
    const calBand = (score, scoreType) => {
        if (isValid(score, scoreType) === false) {
            return false;
        }
        const ref = parseFloat((score / 4.4).toString()).toFixed(2);
        return (((ref * 100) % 100) > 75 ? Math.ceil(ref) : Math.floor(ref));
    };
    
    const calculateBand = () => {
        const obj = {};
        for (const key in scoreObj) {
            const scoreType = key.replace('InBand', '');
            const score = (() => {
                switch (scoreType) {
                    case 'listeningScore':
                        return calBand(listeningScore, scoreType);
                    case 'readingScore':
                        return calBand(readingScore, scoreType);
                    case 'speakingScore':
                        return calBand(speakingScore, scoreType);
                    default:
                        return calBand(writingScore, scoreType);
                }
            })();
            if (score === false) {
                alert('Invalid Score Entered for ' + scoreType);
                return;
            }
            obj[key] = score;
        }
        setScoreObj(obj);
    };
    
    const resetScore = () => {
        setListeningScore(0);
        setReadingScore(0);
        setSpeakingScore(0);
        setWritingScore(0);
        setScoreObj(getScoresInBandObj());
    };
    
    return (
        <div style={{position: 'relative', width: '85%', top: '130px', left: '5%'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan='3' style={{backgroundColor: 'lightgray'}}><h2>Band Calculator</h2></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th style={{width: '30%'}}>Number /40</th>
                        <th>IELTS Band</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Listening Score</td>
                        <td>
                            <input
                                id='listeningScore'
                                type='number'
                                value={listeningScore}
                                onChange={(e) => {
                                    setListeningScore(e.target.value);
                                }}
                                onBlur={(e) => { isValid(e.target.value, 'listeningScore'); }}
                                />
                        </td>
                        <td>{ scoreObj['listeningScoreInBand'] }</td>
                    </tr>
                    <tr>
                        <td>Reading Score</td>
                        <td>
                            <input
                                id='readingScore'
                                type='number'
                                value={readingScore}
                                onChange={(e) => {
                                    setReadingScore(e.target.value)
                                }}
                                onBlur={(e) => { isValid(e.target.value, 'readingScore'); }}
                                />
                        </td>
                        <td>{ scoreObj['readingScoreInBand'] }</td>
                    </tr>
                    <tr>
                        <td>Writing Score</td>
                        <td>
                            <input
                                id='writingScore'
                                type='number'
                                value={writingScore}
                                onChange={(e) => {
                                    setWritingScore(e.target.value)
                                }}
                                onBlur={(e) => { isValid(e.target.value, 'writingScore'); }}
                                />
                        </td>
                        <td>{ scoreObj['writingScoreInBand'] }</td>
                    </tr>
                    <tr>
                        <td>Speaking Score</td>
                        <td>
                            <input
                                id='speakingScore'
                                type='number'
                                value={speakingScore}
                                onChange={(e) => {
                                    setSpeakingScore(e.target.value)
                                }}
                                onBlur={(e) => { isValid(e.target.value, 'speakingScore'); }}
                                />
                        </td>
                        <td>{ scoreObj['speakingScoreInBand'] }</td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <button onClick={calculateBand} style={{padding: '5px', marginRight: '5px'}}>
                                Calculate Band Score
                            </button>
                            
                            <button onClick={resetScore} style={{padding: '5px'}}>
                                Reset Score
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
