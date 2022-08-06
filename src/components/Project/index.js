import React from 'react';

function Project(props) {
    return (
            <div className='row'>
                {/* div for individual projects to be mapped over and stored in */}
                {props.projects.map((project) => (
                    <div className='col-6 p-2'>
                        <div className='card-img-top'>
                            <img src={project.img} alt='projects'></img>
                        </div>
                        <div className='card-body'>
                            <p className='card-text text-success text-center'>{project.title}</p>
                            <p className='card-text text-success text-center'>{project.desc}</p>
                            <div className='row'>
                                <div className='col-6 text-center'>
                                    <a href={project.gitHub} target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                                <div className='col-6 text-center'>
                                    <a href={project.liveSite} target="_blank" rel="noreferrer">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </div>
    )
}

export default Project;