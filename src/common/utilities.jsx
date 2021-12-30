import { useAuth } from 'auth/AuthContext';

export function getTabs()  {
    const { currentUser } = useAuth();
    const navData = [
        {id: "home", label: "Home" , isIconPresent: false, link: "/", size: 1},
        // {id: "ielts", label: "IELTS" , isIconPresent: true, link: "/about-ielts", size: 1},
        {id: "computer", label: "CD-IELTS" , isIconPresent: false, link: "/computer-ielts", size: 2},
        {id: "contact_us", label: "Contact Us" , isIconPresent: true, link: "/contact-us", size: 1},
        {id: "band_calculator", label: "Band Calculator" , isIconPresent: true, link: "/band-calculator", size: 1},
    ];

    if (currentUser) {
        navData.push({
            id: 'dashboard', label: 'Dashboard', link: '/dashboard'
        })
    }

    return navData;
}

export function getReviews() {
    return [
        {name: "Rajat", review: "Great Results"},
        {name: "Atul", review: "Great learning platform"}
    ];
}

export function getHopeInfo() {
    return [
        { review: "This is a place where u can learn and give the tests of ielts. You can practice and learn great stuff here." },
        { review: "This is the center of great knowledge and will provide you learning at low cost than others." }
    ];
}

export const subjects = [
    'Listening',
    'Reading',
    'Writing',
    'Speaking',
];

export function getScoresInBandObj() {
    return {
        Listening: 0,
        Reading: 0,
        Writing: 0,
        Speaking: 0
    };
}