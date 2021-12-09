import React from 'react'

function Listening() {
    return (
        <div>
            <p>
                <shortPoint
                    title={`Timing`}
                    point={`Approximately 30 minutes (plus 10 minutes’ transfer time).`}
                />
            </p>
            <p>
                <shortPoint
                    title={`Questions`}
                    point={`There are 40 questions. A variety of question types are used, chosen from the following: multiple choice, matching, plan/ map/diagram labelling, form completion, note completion, table completion, flow-chart completion, summary completion, sentence completion, short-answer questions.`}
                />
            </p>
            <p>
                <shortPoint
                    title={`Test Parts`}
                    point={`There are 4 sections:`}
                />
            </p>
            <p>
                <i>{`Section 1`}</i>
                {` is a conversation between two people set in an everyday social context (e.g. a conversation in an accommodation agency).`}
            </p>
            <p>
                <i>{`Section 2`}</i>
                {` is a monologue set in an everyday social context (e.g. a speech about local facilities or a talk about the arrangements for meals during a conference).`}
            </p>
            <p>
                <i>{`Section 3`}</i>
                {` is a conversation between up to four people set in an educational or training context (e.g. a university tutor and a student discussing an assignment, or a group of students planning a research project).`}
            </p>
            <p>
                <i>{`Section 4`}</i>
                {` is a monologue on an academic subject (e.g. a university lecture).`}
            </p>
            <p>{`Each section is heard once only. A variety of voices and native-speaker accents are used.`}</p>
            <p>
                <shortPoint
                    title={`Skills assessed`}
                    point={`A wide range of listening skills are assessed, including:`}
                />
            </p>
            <p style={{paddingLeft: '2rem'}}>
                <Point text={`understanding of main ideas`} />
                <Point text={`understanding of specific factual information`} />
                <Point text={`understanding of specific factual information`} />
                <Point text={`recognizing opinions, attitudes and purpose of a speaker`} />
                <Point text={`following the development of an argument`} />
            </p>
            <p>
                <shortPoint
                    title={`Marking`}
                    point={`A wide range of listening skills are assessed, including:`}
                />
            </p>

        </div>
    )
}

export default Listening

function shortPoint ({title, description}) {
    return (
        <>
            <strong>{title}</strong>
            <p>{description}</p>
        </>
    )
}
