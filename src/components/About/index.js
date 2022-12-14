import React from 'react';
import Pic from '../../assets/me.jpg';

function About() {
    return (
        <div className='d-flex flex-column'>
            <div className="container">
                <div className='col'>
                    <h1 className='text-center font-weight-bold p-4'>About me</h1>
                    <hr />
                    <div className='row-8 border-box p-3 m-1 mb-2 text-center bg-dark'>
                        <p className='p-2'>
                            Hi, I'm Caleb! I'm currently working for a company called Conservice as an Owner Conversion Specialist. However, my end goal is to move into the development space with my newfound skills.
                        </p>
                        <p className='p-2'>
                            I graduated from Utah State University with a Bacehlor's degree in Aviation Management; and I am currently about to complete a Full Stack Development bootcamp hosted by the University of Utah.
                        </p>
                        <p className='p-2'>
                            This bootcamp has deepend my love for technology, I am thoroughly excited to continue to learn and grow in this field. Thanks for taking a look at my portfolio! Please reach out to me through my contact section!
                        </p>
                    </div>
                    <div className='img-responsive row-lg-3 mb-2 text-center'>
                        <img src={Pic} alt="Caleb Lawver"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;