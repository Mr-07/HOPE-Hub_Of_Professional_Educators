import React from 'react'
import Point from 'common/Point.jsx';
import ShortPoint from 'common/ShortPoint.jsx';

function Reading() {
    return (
        <div>
            <p>
                <ShortPoint
                    title={`Timing`}
                    description={`60 minutes (no extra transfer time).`}
                />
            </p>
            <p>
                <ShortPoint
                    title={`Questions`}
                    description={`There are 40 questions. A variety of question types are used, chosen from the following: multiple choice, identifying information (True/False/Not Given), identifying a writer’s views/claims (Yes/No/Not Given), matching information, matching headings, matching features, matching sentence endings, sentence completion, summary completion, note completion, table completion, flow-chart completion, diagram label completion, short-answer questions.`}
                />
            </p>
            <p>
                <ShortPoint
                    title={`Test Parts`}
                    description={`There are 3 sections. The total text length is 2,200-2,800 words.`}
                />
            </p>
            <p>
                <i>{`Academic Reading`}</i>
            </p>
            <p>
                {`Each section contains one long text. Texts are authentic and are taken from books, journals, magazines and newspapers. They have been written for a non-specialist audience and are on academic topics of general interest. Texts are appropriate to, and accessible to, test takers entering undergraduate or postgraduate courses or seeking professional registration. Texts range from the descriptive and factual to the discursive and analytical. Texts may contain non-verbal materials such as diagrams, graphs or illustrations. If texts contain technical terms, then a simple glossary is provided.`}
            </p>
            <p>
                <i>{`General Training Reading`}</i>
            </p>
            <p>
                {`Section 1 contains two or three short factual texts, one of which may be composite (consisting of 6-8 short texts related by topic,e.g. hotel advertisements). Topics are relevant to everyday life in an English-speaking country.`}
            </p>
            <p>
                {`Section 2 contains two short factual texts focusing on work related issues (e.g. applying for jobs, company policies, pay and conditions, workplace facilities, staff development and training).`}
            </p>
            <p>
                {`Section 3 contains one longer, more complex text on a topic of general interest.`}
            </p>
            <p>
                {`Texts are authentic and are taken from notices, advertisements, company handbooks, official documents, books, magazines and newspapers.`}
            </p>
            <p>
                <ShortPoint
                    title={`Skills assessed`}
                    description={`A wide range of reading skills are assessed, including:`}
                />
            </p>
            <p style={{paddingLeft: '2rem'}}>
                <Point text={`reading for gist`} />
                <Point text={`reading for main ideas`} />
                <Point text={`reading for detail`} />
                <Point text={`understanding inferences and implied meaning`} />
                <Point text={`recognizing writer’s opinions, attitudes and purpose`} />
                <Point text={`following the development of an argument.`} />
            </p>
            <p>
                <ShortPoint
                    title={`Marking`}
                    description={`Each correct answer receives 1 mark. Scores out of 40 are converted to the IELTS 9-band scale. `}
                />
            </p>
            <p>
                {`Scores are reported in whole and half bands.`}
            </p>

        </div>
    )
}

export default Reading;