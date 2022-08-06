// Will need to import all pages on Navbar (Nav, about, contact, portfolio, resume)
import {useState} from 'react';
import Nav from '../Nav';

function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    return (
        <div>
            <Nav></Nav>
        </div>
    )
}

export default Header;