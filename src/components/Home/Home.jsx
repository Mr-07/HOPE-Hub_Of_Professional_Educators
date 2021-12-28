import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import advance_course from 'images/Courses/Course2.svg';
import express_course from 'images/Courses/Course1.svg';
import intensive_course from 'images/Courses/Course4.svg';
import crash_course from 'images/Courses/Course3.svg';
import landing_page from 'images/LandingPage.svg';

export default function Home() {
    const courses = getCourseData();
    const features = getFeaturesData();

    return (
        <Container fluid>
            <Row style={{padding: '2rem 5rem'}}>
                <Col md={6} className={`left-triangle`}>
                    <div className={`brand--title`}>{`HOPE`}</div>
                    <div className={`brand--details lora`}>{`Hub Of Professional Educators`}</div>
                    <div className={`brand--tagline maitree`}>{`We strive to become the better than we are today. This strive makes everything around us better too. Future is not built on fear but HOPE does make the future`}</div>
                </Col>
                <Col md={6} className={`right-triangle`}>
                    <img src={landing_page} />
                </Col>
            </Row>
            <Row  style={{display: 'flex', alignItems: 'center', padding: '8rem', minHeight: '792px'}}>
                <Col xs={12}>
                    <div className={`section--title`}>{`Distinctive Features Of Being At HOPE`}</div>
                </Col>
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
            {
                    courses.map((course, index) => {
                        return <Row style={{minHeight: '570px'}}>
                                    <Course
                                        key={`${course.id}-${index}`}
                                        title={`${course.title}`}
                                        description={`${course.description}`}
                                        imagePosition={`${course.image_position}`}
                                        background={`${course.background_color}`}
                                        imageSrc={course.imageSrc}
                                    />
                                </Row>
                    })
            }
            <Row className="row-padding flex-container">
                <Col md={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="mapouter">
                        <div className="gmap_canvas" style={{boxShadow: " 0px 12px 40px rgba(0, 0, 0, 0.25)"}}>
                            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=30.336400,76.383900&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </Col>
                <Col md={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <div className={`brand--details`}>{`You can meet us here`}</div>
                    <div style={{width: '20rem', height: '13px', backgroundColor: '#DE6D6D', border: '1px solid transparent', borderRadius: '5px'}} />
                </Col>
            </Row>
        </Container>
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

function Course({title, description, background, imagePosition, imageSrc}) {
    return (
        <>
            { imagePosition === 'left' ? <CourseImage  source={imageSrc}/> : null }
            <Col lg={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: imagePosition == 'right' ? '2rem 2rem 2rem 6rem' : '2rem', rowGap: '2rem'}}>
                <Features
                    title={title}
                    description={description}
                />
            </Col>
            { imagePosition === 'right' ? <CourseImage source={imageSrc}/> : null }
        </>
    )
}

function CourseImage({source}) {
    return (
        <Col lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={source} style={{maxWidth: '750px', maxHeight: '440px'}} />
        </Col>
    )
}

function getCourseData() {
    return [
        {
            id: 'crash_course',
            title: 'IELTS Crash Course',
            description: 'This course  is  designed for students who have had prior exposure to all modules of IELTS test and are just 0.5 bands score away from the desired scores in modules.',
            image_position: 'left',
            background_color: '#D4D5DB',
            imageSrc: crash_course
        },
        {
            id: 'express_course',
            title: 'IELTS Express Course',
            description: 'It is tailored for students who do have exposure to all four sections of IELTS Tests but need assistance one or more module of the test',
            image_position: 'right',
            background_color: '#F5F5F5',
            imageSrc: express_course
        },
        {
            id: 'intensive_course',
            title: 'IELTS Intensive Course',
            description: 'It is designed for students who have intermediate or above level of english, and who are planning to take an IELTS test in the near future. This course provided intensive training for all sections.',
            image_position: 'left',
            background_color: '#D4D5DB',
            imageSrc:intensive_course
        },
        {
            id: 'advance_course',
            title: 'IELTS Advance Course',
            description: 'It is for students who have a intermediate or above level of english. This course will prepare you for all sections of IELTS and gives you extensive practice in each part',
            image_position: 'right',
            background_color: '#F5F5F5',
            imageSrc:advance_course
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
