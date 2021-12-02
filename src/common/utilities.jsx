import React from 'react';

export function getTabs()  {
    return [
        {id: "home", label: "Home" , isIconPresent: false},
        {id: "computer", label: "Computer-delivered IELTS" , isIconPresent: true},
        {id: "practice", label: "Practice" , isIconPresent: true},
        {id: "results", label: "Results" , isIconPresent: true},
        {id: "about", label: "About IELTS" , isIconPresent: true},
        {id: "videos", label: "Video Lectures" , isIconPresent: false},
        {id: "courses", label: "Courses" , isIconPresent: false},
        {id: "instructor", label: "Instructor", isIconPresent: false }
    ];
}