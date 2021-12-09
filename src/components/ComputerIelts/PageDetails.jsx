import frequency from 'images/frequency-1.jpg';
import computerIelts from 'images/comp-ielts.jpg';
import { getCentresData } from 'common/Centres.jsx';

export function getPageDetails() {
    return [
        {
            id: 'introduction',
            imageClass: null,
            imagePosition: 'right',
            imageUrl: computerIelts,
            taglineClass: 'tagline',
            titleClass: 'card-title',
            title: 'Take IELTS on computer',
            splitClass: 'split--introduction',
            descriptionClass: 'introduction--desc',
            containerClass: 'container--block bg--darkgrey',
            descriptionPoints: ['Results in 2-5 days. Now available in India'],

        },
        {
            id: 'frequency',
            splitClass: 'split',
            imageUrl: frequency,
            imageClass: 'split-img',
            imagePosition: 'left',
            points: [ ...getFrequencyPoints() ],
            titleClass: 'card-title-with-description',
            containerClass: 'container--block bg--light',
            title: 'Computer-delivered IELTS is available 3 times a day, 7 days a week',
            descriptionPoints: ['For almost 30 years, IELTS has been a paper-based English test that people have used to achieve their work, study and migration dreams. But you asked for more choice – and we’ve listened. Meet computer-delivered IELTS: the same IELTS test you know, delivered via computer, with multiple test sessions a day and fast results.'],
        },
        {
            id: 'centres',
            splitClass: 'split',
            accordions : [ ...getCentresData() ],
            titleClass: 'card-title-with-description',
            containerClass: 'container--block bg--light',
            title: 'Computer-delivered IELTS is available 3 times a day, 7 days a week',
        }
    ]
}

function getFrequencyPoints() {
    return [
        'Results in 2-5 days',
        'Testing up to 7 days a week',
        'Free IELTS Masterclass',
        'Free computer-delivered IELTS practice test'
    ]
}

