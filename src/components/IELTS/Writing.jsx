import React from 'react'
import Point from 'common/Point.jsx';
import ShortPoint from 'common/ShortPoint.jsx';

function Writing() {
    return (
        <div>
            <p>
                <ShortPoint
                    title={`Timing`}
                    description={`60 minutes`}
                />
            </p>
            <p>
                <ShortPoint
                    title={`Tasks`}
                    description={`There are 2 tasks. You are required to write at least 150 words for Task 1 and at least 250 words for Task 2.`}
                />
            </p>
            <p>
                <ShortPoint
                    title={`Test Parts`}
                    description={`There are 2 parts.`}
                />
            </p>
            <p>
                <i>{`Academic Writing`}</i>
            </p>
            <p>
                {`In Task 1, you are presented with a graph, table, chart or diagram and are asked to describe, summarise or explain the information in your own words. You may be asked to describe and explain data, describe the stages of a process, how something works or describe an object or event. In Task 2, you are asked to write an essay in response to a point of view, argument or problem. The issues raised are of general interest to, suitable for and easily understood by test takers entering undergraduate or postgraduate studies or seeking professional registration. Responses to Task 1 and Task 2 should be written in an academic, semi-formal/neutral style.`}
            </p>
            <p>
                <i>{`General Training Writing`}</i>
            </p>
            <p>
                {`In Task 1, you are presented with a situation and are asked to write a letter requesting information or explaining the situation. The letter may be personal or semi-formal/neutral in style. In Task 2, you are asked to write an essay in response to a point of view, argument or problem. The essay can be slightly more personal in style than the Academic Writing Task 2 essay. Topics are of general interest.`}
            </p>
            <p>
                <ShortPoint
                    title={`Skills assessed`}
                    description={`In both tasks, you are assessed on your ability to write a response which is appropriate in terms of:`}
                />
            </p>
            <p style={{paddingLeft: '2rem'}}>
                <Point text={`content`} />
                <Point text={`the organization of ideas`} />
                <Point text={`the accuracy and range of vocabulary and grammar.`} />
            </p>
            <p>
                <ShortPoint
                    title={`Academic Writing`}
                    description={`In Task 1, depending on the task type, you are assessed on your ability to organise, present and possibly compare data; to describe the stages of a process or procedure; to describe an object or event or sequence of events; to explain how something works. In Task 2, depending on the task type, you are assessed on your ability to present a solution to a problem; to present and justify an opinion; to compare and contrast evidence, opinions and implications; to evaluate and challenge ideas, evidence or an argument.`}
                />
            </p>
            <p>
                <ShortPoint
                    title={`General Training Writing`}
                    description={`In Task 1, depending on the task type, you are assessed on your ability to engage in personal correspondence in order to: elicit and provide general factual information; express needs, wants, likes and dislikes; express opinions (views, complaints etc.). In Task 2, you are assessed on your ability to provide general factual information; to outline a problem and present a solution; to present and possibly justify an opinion; to evaluate and challenge ideas, evidence or an argument.`}
                />
            </p>
            <p>
                <ShortPoint
                    title={`Marking`}
                    description={`You are assessed on your performance on each task by certificated IELTS examiners according to the IELTS Writing test assessment criteria (Task Achievement/Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy). The public version of the assessment criteria can be found at ielts.org/criteria.`}
                />
            </p>
            <p>
                {`Task 2 contributes twice as much as Task 1 to the Writing score.`}
            </p>
            <p>
                {`Scores are reported in whole and half bands.`}
            </p>

        </div>
    )
}
export default Writing;