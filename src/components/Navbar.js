import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  
                  <p><i class="fa-solid fa-code"></i>&nbsp;
                        Michael Cui   &nbsp;
                        <i class="fa-solid fa-code"></i>
                  </p>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/Photos' className='nav-links' onClick={closeMobileMenu}>
                      Photos
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                      Products
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Contact Me
                    </Link>
                    </li>
                  </ul>
                  {button && <Button buttonStyle='btn--outline'>CONTACTS</Button>}
            </div>
        </nav>
    </>
  );
}

export default Navbar