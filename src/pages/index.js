import React from 'react';
import Link from 'gatsby-link';

import '../assets/css/main.css';

import Header from '../components/Header';
import About from '../components/About';
// import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <Header />
    <Portfolio />
    <About />
    <Footer />
  </div>
);
// <Resume />

export default IndexPage;
