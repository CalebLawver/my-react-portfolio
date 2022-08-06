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
        <div>
      <nav>
        <div>
          <a
            rel="noreferrer"
            target="_blank"
            href="/"
          >
            <span className="text-light">Caleb Lawver</span>
          </a>
        </div>
      </nav>
     
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main>
        <div>{clickedPage(currentPage)}</div>
      </main>
    </div>
    );
}

export default Header;