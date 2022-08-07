import React from 'react';

function Resume() {
    return (
        <div className='container d-flex flex-wrap justify-content-center'>
            <div className='col-12'>
                <h2 className='text-center p-4'>Resume</h2>
            </div>
            <hr />
            <div className='d-flex flex-wrap justify-content-center bg-dark'>
                <div className='text-light bg-secondary col p-3 m-3 row-6'>
                    <h3 className='text-center'>Front-end</h3>
                    <ul className='text-left text-align-left'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='text-light bg-secondary col p-3 m-3 row-6'>
                    <h3 className='text-center'>Back-end</h3>
                    <ul className='text-left'>
                        <li>RESTful APIs</li>
                        <li>Creating APIs</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className='col-12 text-center'>
                    <p>Download a copy of my {''}<a 
                    href='https://docs.google.com/document/d/1FFSnwuTOUCf4TN2G02PkxvWw4yH8D40F'
                    target='_blank'
                    rel='noreferrer'
                    >resume</a>.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Resume;