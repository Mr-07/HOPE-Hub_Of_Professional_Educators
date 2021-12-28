import Listening from 'components/IELTS/Listening.jsx'
import Reading from 'components/IELTS/Reading.jsx'
import Writing from 'components/IELTS/Writing.jsx'
import Speaking from 'components/IELTS/Speaking.jsx';

export function getPageDetails() {
    return [
        {
            id: 'introduction',
            imageClass: null,
            imagePosition: 'right',
            taglineClass: 'tagline',
            titleClass: 'card-title',
            title: 'IELTS',
            splitClass: 'split--introduction',
            descriptionClass: 'introduction--desc',
            containerClass: 'container--block bg--darkgrey',
            descriptionPoints: ['International English Language Testing System'],
        },
        {
            id: 'what_is_ielts',
            splitClass: 'split',
            imageClass: 'split-img',
            titleClass: 'card-title-with-description',
            containerClass: 'container--block bg--light',
            title: 'What is IELTS?',
            description: 'IELTS is the International English Language Testing System. It’s the world’s most popular English language test for tertiary education, work and migration purposes. International students wanting to study at an Australian university are required to pass the IELTS test to show their English language abilities. The test can also be taken for work purposes or applying for residency. In a global partnership of language experts, IDP: IELTS Australia, the British Council and Cambridge English Language Assessment co-created IELTS. ',
            descriptionPoints: [ ...getDescriptionPoints() ],
            descriptionClass: 'description--with---space'
        },
        {
            id: 'why_ielts',
            splitClass: 'split',
            imageClass: 'split-img',
            titleClass: 'card-title-with-description',
            containerClass: 'container--block bg--light',
            title: 'Why take the IELTS test?',
            descriptionPoints: ['IELTS is the International English Language Testing System. It’s the world’s most popular English language test for tertiary education, work and migration purposes. International students wanting to study at an Australian university are required to pass the IELTS test to show their English language abilities. The test can also be taken for work purposes or applying for residency. In a global partnership of language experts, IDP: IELTS Australia, the British Council and Cambridge English Language Assessment co-created IELTS. '],
            descriptionClass: 'description--with---space'
        },
        {
            id: 'fee_structure',
            splitClass: 'split',
            imageClass: 'split-img',
            titleClass: 'card-title-with-description',
            containerClass: 'container--block bg--light',
            title: 'IELTS test structure',
            descriptionPoints: [...getFeeStructure()],
            accordions : [ ...getExamStructure() ],
            points: ['Academic', "General Training"],
            descriptionClass: 'description--with---space'
        },
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

function getDescriptionPoints() {
    return [
        'Millions of IELTS tests are taken each year in over 140 countries for study, work and migration purposes. Over 10,000 organisations including universities, immigration authorities and professional bodies recognise IELTS, which means it helps you reach your study and career goals faster.',
        'IELTS is the only internationally recognised English language test where the speaking section of the test is held with an examiner in a private room so you will not be interrupted. Our examiners are fully qualified and follow rigorous global IELTS standards and are regularly monitored and re-certified.',
        'IELTS content is developed by an international team of experts that do extensive research to ensure the test is fair and unbiased for all, regardless of nationality, gender, lifestyle or location.'

    ]
}

function getFeeStructure() {
    return [
        'Before applying, check the test format to determine the right module for you, as fees may apply for changing modules.',
        'The IELTS test assesses four language skills - writing, reading, listening and speaking.',
        'The listening, reading and writing sections are scheduled between 9.00 am and 12.30 pm. The speaking section is scheduled between 1.00 pm and 5.30 pm. All sections of the test are conducted in small rooms, providing you with a comfortable environment.',
        'IELTS offers two modules:'
    ]
}
function getExamStructure() {
    return [
        {id: 'listening', body: Listening, header: 'Listening'},
        {id: 'reading', body: Reading, header: 'Reading'},
        {id: 'writing', body: Writing, header: 'Writing'},
        {id: 'speaking', body: Speaking, header: 'Speaking'},
    ]
}

