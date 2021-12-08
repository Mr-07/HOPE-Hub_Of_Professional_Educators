import React from 'react'
import Point from 'common/Point.jsx';
import Accordions from 'common/Accordions.jsx';
import { Accordion } from 'react-bootstrap';
import AccordionBody from 'components/ComputerIelts/AccordionBody.jsx';

function ContentBlock({
    title,
    points,
    titleClass,
    accordions,
    description,
    taglineClass,
    descriptionClass,
}) {
    return (
        <div className={taglineClass}>
            <span className={titleClass}>{title}</span>
            {
                (description) ?
                    description.map((point, index) => {
                        return <p className={descriptionClass}>{point}</p>
                    })
                :
                    <p />
            }
            {
                (points) ?
                    <div style={{paddingTop: '0.5rem'}}>
                        {
                            points.map((point, index) => {
                                return <Point text={point} key={index}/>
                            })
                        }
                    </div>

                :
                    null
            }
            {
                (accordions) ?
                    <Accordion flush={true}>
                        {
                            accordions.map((accordion, index) => {
                                return <Accordions header={accordion.header} key={index} eventKey={index}>
                                    <AccordionBody data={accordion.cities} />
                                </Accordions>
                            })
                        }
                    </Accordion>

                :
                    null
            }
        </div>
    )
}

export default ContentBlock;
