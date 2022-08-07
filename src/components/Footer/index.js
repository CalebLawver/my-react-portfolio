import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className='d-flex justify-content-center w-100'>
            <div className=''>
                <a href="https://www.linkedin.com/in/richard-lawver-73a480227/"
                target="_blank" rel="noreferrer" className='link-light fs-1 p-5'>
                <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://github.com/CalebLawver"
                target="_blank" rel="noreferrer" className='link-light fs-1 p-5'>
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
        
    )
}

export default Footer;