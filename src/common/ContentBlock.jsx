import React from 'react'
import Point from 'common/Point.jsx';
import Accordions from 'common/Accordions.jsx';
import { Accordion, Col } from 'react-bootstrap';
import AccordionBody from 'components/ComputerIelts/AccordionBody.jsx';

function ContentBlock({
    title,
    points,
    titleClass,
    accordions,
    description,
    taglineClass,
    isImagePresent,
    descriptionClass,
}) {
    return (
        <Col lg={isImagePresent ? 6 : 12} className={`${taglineClass} content-with-description` }>
            <span className={titleClass}>{title}</span>
            {
                (description) ?
                    description.map((point) => {
                        return <p className={descriptionClass}>{point}</p>
                    })
                :
                    <p />
            }
            {
                (points) ?
                    <div>
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
                    <div style={{marginTop: '2rem'}}>
                        <Accordion flush={true}>
                            {
                                accordions.map((accordion, index) => {
                                    return 'body' in accordion ? <Accordions header={accordion.header} key={index} eventKey={index}>
                                                                    <accordion.body />
                                                                </Accordions>
                                                                :
                                                                <Accordions header={accordion.header} key={index} eventKey={index}>
                                                                    <AccordionBody
                                                                        data={accordion.data}
                                                                        body={'body' in accordion ? accordion.body : null}
                                                                    />
                                                                </Accordions>
                                })
                            }
                        </Accordion>
                    </div>
                :
                    null
            }
        </Col>
    )
}

export default ContentBlock;
