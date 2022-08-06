import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Bit Trail',
            img: '../../assets/bit-trail.JPG',
            liveSite: 'https://bit-trail.herokuapp.com/',
            gitHub: 'https://github.com/CalebLawver/Bit-Trail'
        },
        {
            id: 2,
            title: 'National Mapper',
            img: '../../assets/national-mapper.JPG',
            liveSite: 'https://jacee94.github.io/national-mapper/',
            gitHub: 'https://github.com/Jacee94/national-mapper'
        },
        {
            id: 3,
            title: 'Final Project',
            img: '../../assets/emp-trackert.JPG',
            liveSite: '/',
            gitHub: '/'
        },
        {
            id: 4,
            title: 'Run Buddy',
            img: '../../assets/run-buddy.JPG',
            liveSite: 'https://caleblawver.github.io/run-buddy/',
            gitHub: 'https://github.com/CalebLawver/run-buddy'
        },
        {
            id: 5,
            title: 'Password Generator',
            img: '../../assets/password-gen.JPG',
            liveSite: 'https://caleblawver.github.io/Password-Generator/',
            gitHub: 'https://github.com/CalebLawver/Password-Generator'
        },
        {
            id: 6,
            title: 'Zoo Keepr',
            img: '../../assets/zoo.JPG',
            liveSite: 'https://frozen-bayou-44761.herokuapp.com/',
            gitHub: 'https://github.com/CalebLawver/zookeepr'
        },
        {
            id: 7,
            title: 'Budget PWA',
            img: '../../assets/budget.JPG',
            liveSite: 'https://mysterious-hollows-72686.herokuapp.com/',
            gitHub: 'https://github.com/CalebLawver/Budget-PWA'
        },
        {
            id: 8,
            title: 'Note Taker',
            img: '../../assets/note.JPG',
            liveSite: 'https://dry-escarpment-02911.herokuapp.com/',
            gitHub: 'https://github.com/CalebLawver/note-taker'
        }
    ]

    return (
        <section className='container p-4'>
            <h1 className='p-4 text-center'>My Projects</h1>
            <hr />
            <Project projects={projects}/>
        </section>
    )
}

export default Portfolio;