// Will need to import all pages on Navbar (Nav, about, contact, portfolio, resume)
import React, {useState} from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    // I'll need a switch statement to render the page that is clicked
    const clickedPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio': 
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    }

    return (
    <div className='d-flex flex-wrap justify-content-center w-100'>
      <nav className='navbar bg-dark w-100'>
        <div className='navbar-brand p-2'>
          <a
            className='navbar-item'
            rel="noreferrer"
            target="_blank"
            href="https://github.com/CalebLawver"
          >
            <h2 className="text-light font-weight-bold px-5">Caleb Lawver</h2>
          </a>
          
        </div>
        <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
      </nav>
      <main className='w-100 p-0'>
        <div>{clickedPage(currentPage)}</div>
      </main>
    </div>
    );
}

export default Header;