import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

/* export default function Home() {
    const features = getFeatures();
    return (
        <Container>
            <Row>
               <Col xs={12} style={{marginTop: '5rem'}}>
                    <img src={home} />
               </Col>
            </Row>
            <Row>
                <Container style={{marginTop: '2rem', padding: '2rem',  background: '#263147'}}>
                    <Row>
                        <Col style={{color: 'white', textAlign: 'center'}} xs={12}>
                            <h1>{`Distinctive features of being at HOPE`}</h1>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '2rem'}}>
                        {
                            features.map((feature, index) => {
                                return <Col style={{height: '12rem'}} sm={6} md={4}>
                                            <Card style={{height: '10rem', background: '#DFC370', color: 'black', fontWeight: 'bold'}}key={index}>
                                                <Card.Body style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <Card.Text >
                                                        {feature}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                            })
                        }
                    </Row>
                </Container>
            </Row>
        </Container>
    )
} */

export default function Home() {
    const courses = getCourseData();
    const features = getFeaturesData();
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} className={`left-triangle`}>
                        <div className={`brand--title`}>{`HOPE`}</div>
                        <div className={`brand--details`}>{`Hub Of Professional Educators`}</div>
                    </Col>
                    <Col xs={12} md={6} className={`right-triangle`}>
                        <div className={`brand--tagline`}>{`We strive to become the better than we are today. This strive makes everything around us better too. Future is not built on fear but HOPE does make the future`}</div>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{paddingTop: '120px', paddingLeft: '8rem', height: '792px'}}>
                <Row style={{rowGap: '2rem'}}>
                    <Col md={12} className={`section--title`}>{`Distinctive Features Of Being At HOPE`}</Col>
                    {
                        features.map((feature, index) => {
                            return <Col md={6} key={index}>
                                        <Features
                                            title={feature.title}
                                            description={feature.description}
                                        />
                                    </Col>
                        })
                    }
                </Row>
            </Container>
            <Container fluid>
                {
                    courses.map((course, index) => {
                        return <Course
                                    key={`${course.id}-${index}`}
                                    title={`${course.title}`}
                                    description={`${course.description}`}
                                    imagePosition={`${course.image_position}`}
                                    background={`${course.background_color}`}
                                />
                    })
                }
            </Container>
        </div>
    )
}

function Features({title, description}) {
    return(
        <>
            <div className={`feature--title`}>{title}</div>
            <div className={`feature--description`}>{description}</div>
        </>
    )
}

function Course({title, description, background, imagePosition}) {
    return (
        <Row xs={12} style={{background, height: '570px'}}>
            { imagePosition === 'left' ? <CourseImage /> : null }
            <Col md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: imagePosition == 'right' ? '2rem 2rem 2rem 6rem' : '2rem', rowGap: '2rem'}}>
                <Features
                    title={title}
                    description={description}
                />
            </Col>
            { imagePosition === 'right' ? <CourseImage /> : null }
        </Row>
    )
}

function CourseImage() {
    return (
        <Col md={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '750px', height: '440px', background: '#E5E5E5'}} />
        </Col>
    )
}

function getCourseData() {
    return [
        {
            id: 'crash_course',
            title: 'IELTS Crash Course',
            description: 'This course  is  designed for students who have had prior exposure to all moduels of  IELTS test and are just 0.5 bands score away from the desired scores in modules.',
            image_position: 'left',
            background_color: '#D4D5DB'
        },
        {
            id: 'express_course',
            title: 'IELTS Express Course',
            description: 'It is tailored for students who do have exosure to all four sections of IELTS Tests but need asistance one or more module of the test',
            image_position: 'right',
            background_color: '#F5F5F5'
        },
        {
            id: 'intensive_course',
            title: 'IELTS Intensive Course',
            description: 'It is designed for students who have intermediate or above level of english, and who are planning to take an IELTS test in the near future. This course provided intensive training for all sections.',
            image_position: 'left',
            background_color: '#D4D5DB'
        },
        {
            id: 'advance_course',
            title: 'IELTS Advance Course',
            description: 'It is for students who have a intermediate or above level of english. This course will prepare you for all sections of IELTS and gives you extensive practice in each part',
            image_position: 'right',
            background_color: '#F5F5F5'
        },
    ]
}

function getFeaturesData() {
    return [
        {
            title: "Sed ut perspiciatis",
            description: "Strict class size of ten students only."
        },
        {
            title: "Sed ut perspiciatis",
            description: "Weekly progress tests along with regular working and feedback."
        },
        {
            title: "Sed ut perspiciatis",
            description: "Access to weekly Wi-Fi every saturday from 8 to 5."
        },
        {
            title: "Sed ut perspiciatis",
            description: "Homework and lecture notes are organized in online student portal which can be accessed 24x7."
        },
        {
            title: "Sed ut perspiciatis",
            description: "Feel more confident as only genuine resources are used during the preparation as in the real exams."
        },
    ]
}
