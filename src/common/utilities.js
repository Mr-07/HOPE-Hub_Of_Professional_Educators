export function getTabs()  {
    return [
        {id: "home", label: "Home", link: "/", size: 1},
        {id: "computer", label: "Computer-delivered", link: "/computer-ielts", size: 2},
        {id: "practice", label: "Practice", link: "/practice", size: 1},
        {id: "results", label: "Results", link: "/results", size: 1},
        {id: "ielts", label: "IELTS", link: "/about-ielts", size: 1},
        {id: "band", label: "Band Calculator", link: "/band-calculator", size: 2},
    ];
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

export function getScoresInBandObj() {
    return {
        listeningScoreInBand: 0,
        readingScoreInBand: 0,
        writingScoreInBand: 0,
        speakingScoreInBand: 0
    };
}