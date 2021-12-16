import React from 'react'
import Point from 'common/Point.jsx';
import ShortPoint from 'common/ShortPoint.jsx';

function Speaking() {
    return (
        <div>
            <p>
                <ShortPoint
                    title={`Timing`}
                    description={`11-14 minutes`}
                />
            </p>
            <p>
                <ShortPoint
                    title={`Test Parts`}
                    description={`There are 3 parts.`}
                />
            </p>
            <p>
                <i>{`Part 1 Introduction and interview (4-5 minutes) `}</i>
            </p>
            <p>
                {`The examiner introduces him/herself and asks you to introduce yourself and confirm your identity. The examiner asks you general questions on familiar topics, e.g. home, family, work, studies and interests.`}
            </p>
            <p>
                <i>{`Part 2 Individual long turn (3-4 minutes)`}</i>
            </p>
            <p>
                {`The examiner gives you a task card which asks you to talk about a particular topic and which includes points you can cover in your talk. You are given 1 minute to prepare your talk, and are given a pencil and paper to make notes. You talk for 1-2 minutes on the topic. The examiner may then ask you one or two questions on the same topic.`}
            </p>
            <p>
                <i>{`Part 3 Two-way discussion (4-5 minutes)`}</i>
            </p>
            <p>
                {`The examiner asks further questions which are connected to the topic of Part 2. These questions give you an opportunity to discuss more abstract issues and ideas.`}
            </p>
            <p>
                <ShortPoint
                    title={`Skills assessed`}
                    description={`A wide range of speaking skills are assessed, including:`}
                />
            </p>
            <p style={{paddingLeft: '2rem'}}>
                <Point text={`the ability to communicate opinions and information on everyday topics and common experiences and situations by answering a range of questions`} />
                <Point text={`the ability to speak at length on a given topic using appropriate language and organising ideas coherently`} />
                <Point text={`the ability to express and justify opinions and to analyse, discuss and speculate about issues.`} />
            </p>
            <p>
                <ShortPoint
                    title={`Marking`}
                    description={`the ability to express and justify opinions and to analyse, discuss and speculate about issues.`}
                />
            </p>
        </div>
    )
}
export default Speaking;