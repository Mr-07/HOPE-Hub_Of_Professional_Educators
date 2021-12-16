export function getTabs()  {
    return [
        {id: "home", label: "Home" , isIconPresent: false, link: "#/"},
        {id: "computer", label: "Computer-delivered IELTS" , isIconPresent: false, link: "#/computer-ielts"},
        {id: "practice", label: "Practice" , isIconPresent: true, link: "#/practice"},
        {id: "results", label: "Results" , isIconPresent: true, link: "#/results"},
        {id: "ielts", label: "IELTS" , isIconPresent: true, link: "#/about-ielts"},
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