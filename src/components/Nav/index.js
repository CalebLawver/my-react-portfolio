import React from 'react';

function Nav(props) {
    const pages = ['About', 'Contact', 'Portfolio', 'Resume'];

    return (
        <div className='nav'>
            <ul className='d-flex m-3'>
                {pages.map((page) => (
                    <li className={props.currentPage === page ? 'nav-item is active' : 'nav-item'} key={page} >
                        <a
                        href={"#" + page.toLowerCase()}
                        onClick={() => props.setCurrentPage(page)}
                        className={props.currentPage === page ? 'nav-link active' : 'nav-link'} >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nav;