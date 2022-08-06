import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Bit Trail',
            img: '/assets/bit-trail.JPG',
            desc: 'Web app that utilizes Handlebars.js, MySQL, and RESTful APIs. This app allows users to post hikes and share info with logged in users.',
            liveSite: 'https://bit-trail.herokuapp.com/',
            gitHub: 'https://github.com/CalebLawver/Bit-Trail'
        },
        {
            id: 2,
            title: 'National Mapper',
            img: '/assets/national-mapper.JPG',
            desc: 'We created a page that uses the National Park Service API and the CSS framework PicoCSS to show users a list of national parks in a specific state.',
            liveSite: 'https://jacee94.github.io/national-mapper/',
            gitHub: 'https://github.com/Jacee94/national-mapper'
        },
        {
            id: 3,
            title: 'Final Project',
            img: '/assets/emp-trackert.JPG',
            desc: '',
            liveSite: '/',
            gitHub: '/'
        },
        {
            id: 4,
            title: 'Run Buddy',
            img: '/assets/run-buddy.JPG',
            desc: 'My first website! Created with just HTML and CSS. This offers fitness training services.',
            liveSite: 'https://caleblawver.github.io/run-buddy/',
            gitHub: 'https://github.com/CalebLawver/run-buddy'
        },
        {
            id: 5,
            title: 'Password Generator',
            img: '/assets/password-gen.JPG',
            desc: 'This application generates a random password based on user-selected criteria. It runs in the browser and dynamically updates the HTML and CSS with the power of JavaScript.',
            liveSite: 'https://caleblawver.github.io/Password-Generator/',
            gitHub: 'https://github.com/CalebLawver/Password-Generator'
        },
        {
            id: 6,
            title: 'Zoo Keepr',
            img: '/assets/zoo.JPG',
            desc: 'Utilizing Express.js, this website allows you to create a list of animals and show them to the public.',
            liveSite: 'https://frozen-bayou-44761.herokuapp.com/',
            gitHub: 'https://github.com/CalebLawver/zookeepr'
        },
        {
            id: 7,
            title: 'Budget PWA',
            img: '/assets/budget.JPG',
            desc: 'This Progressive Web App allows users to track their money, both on and offline.',
            liveSite: 'https://mysterious-hollows-72686.herokuapp.com/',
            gitHub: 'https://github.com/CalebLawver/Budget-PWA'
        },
        {
            id: 8,
            title: 'Note Taker',
            img: '/assets/note.JPG',
            desc: 'An app that uses express.js to track, edit, and delete notes. It dynamically creates the data stored in an json file.',
            liveSite: 'https://dry-escarpment-02911.herokuapp.com/',
            gitHub: 'https://github.com/CalebLawver/note-taker'
        }
    ]

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <section className=''>
                <h1 className='p-4 text-center'>My Projects</h1>
                <hr />
                <Project projects={projects}/>
            </section>
        </div>
        
    )
}

export default Portfolio;