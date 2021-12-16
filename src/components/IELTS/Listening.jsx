import React from 'react'
import Point from 'common/Point.jsx'
import ShortPoint from 'common/ShortPoint.jsx';

function Listening() {
    const {shortPoints, points, fancyPoints } = getListeningData();
    return (
        <div>
            <p>
                {
                    shortPoints.map(({title, description}, index) => {
                        return <ShortPoint key={index} title={title} description={description} />
                    })
                }
            </p>
            <>
                {
                    fancyPoints.map(({title, description}, index) => {
                        return <p>
                                    <i>{title}</i>
                                    {description}
                                </p>
                    })
                }
            </>
            <p>{`Each section is heard once only. A variety of voices and native-speaker accents are used.`}</p>
            <p>
                <ShortPoint
                    title={`Skills assessed`}
                    description={`A wide range of listening skills are assessed, including:`}
                />
            </p>
            <div style={{paddingLeft: '2rem'}}>
                {
                    points.map((point, index) => {
                        return <Point key={index} text={point} />
                    })
                }
            </div>
            <p style={{marginTop: '2rem'}}>
                <ShortPoint
                    title={`Marking`}
                    description={`A wide range of listening skills are assessed, including:`}
                />
            </p>
        </div>
    )
}

export default Listening;


function getListeningData() {
    return {
        shortPoints: [...getShortPoints()],
        points: [...getPlainPoints()],
        fancyPoints: [...getItalicPoints()],
    }
}

function getShortPoints() {
    return [
        {title: 'Timing', description: 'Approximately 30 minutes (plus 10 minutes’ transfer time).'},
        {title: 'Questions', description: 'There are 40 questions. A variety of question types are used, chosen from the following: multiple choice, matching, plan/ map/diagram labelling, form completion, note completion, table completion, flow-chart completion, summary completion, sentence completion, short-answer questions.'},
        {title: 'Test Parts', description: 'There are 4 sections:'},
    ]
}

function getItalicPoints() {
    return [
        {title: 'Section 1', description: ' is a conversation between two people set in an everyday social context (e.g. a conversation in an accommodation agency).'},
        {title: 'Section 2', description: ' is a monologue set in an everyday social context (e.g. a speech about local facilities or a talk about the arrangements for meals during a conference).'},
        {title: 'Section 3', description: ' is a conversation between up to four people set in an educational or training context (e.g. a university tutor and a student discussing an assignment, or a group of students planning a research project).'},
        {title: 'Section 4', description: 'is a conversation between two people set in an everyday social context (e.g. a conversation in an accommodation agency).'},
    ]
}

function getPlainPoints() {
    return [
        'understanding of main ideas',
        'understanding of specific factual information',
        'recognizing opinions, attitudes and purpose of a speaker',
        'following the development of an argument'
    ]
}

