import React from 'react';

import Navigation from './Navigation';
import Banner from './Banner';
import ScrollDown from './ScrollDown';

const Header = () => (
  <header id="start">
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
);

export default Header;
