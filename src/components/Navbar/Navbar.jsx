import React, { useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import { BiMenuAltLeft } from 'react-icons/bi';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        <li>
          <a href='#store'>Store</a>
        </li>
        <li>
          <a href='#tutorials'>Tutorials</a>
        </li>
      </ul>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        <li>
          <a href='#blog'>Blog</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='app__navbar-smallscreen'>
        <BiMenuAltLeft
          color='var(--color-primary)'
          fontSize={30}
          onClick={() => setToggleMenu(true)}
          className='app__navbar-menu'
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay slide-bottom'>
            <div className='app__navbar-whitelogo'>
              <img src={images.whiteLogo} alt='whitelogo' />
            </div>
            <GiCancel
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <div className='app__navbar-smallscreen_body'>
              <div className='app__navbar-img'>
                <img src={images.drone} alt='navbar_image' />
              </div>
              <ul className='app__navbar-smallscreen_links'>
                <li>
                  <a href='#store' onClick={() => setToggleMenu(false)}>
                    Store
                  </a>
                </li>
                <li>
                  <a href='#tutorials' onClick={() => setToggleMenu(false)}>
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href='#blog' onClick={() => setToggleMenu(false)}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#contact' onClick={() => setToggleMenu(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
