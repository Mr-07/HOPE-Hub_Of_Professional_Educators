import React from 'react';

export function getTabs()  {
    return [
        {id: "home", label: "Home" , isIconPresent: false, link: "/"},
        {id: "computer", label: "Computer-delivered IELTS" , isIconPresent: true, link: "/computer"},
        {id: "practice", label: "Practice" , isIconPresent: true, link: "/practice"},
        {id: "results", label: "Results" , isIconPresent: true, link: "/results"},
        {id: "about", label: "About IELTS" , isIconPresent: true, link: "/about-ielts"},
        {id: "videos", label: "Video Lectures" , isIconPresent: false, link: "/videos"},
        {id: "courses", label: "Courses" , isIconPresent: false, link: "/courses"},
        {id: "instructor", label: "Instructor", isIconPresent: false, link: "/instructor" }
    ];
}