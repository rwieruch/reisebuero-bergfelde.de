import React from 'react';
import { FaChevronCircleUp } from 'react-icons/lib/fa';

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <ul className="copyright">
          <li>&copy; Copyright 2018 Heike Wieruch</li>
          <li>
            <a href="/impressum">Impressum</a>
          </li>
          <li>
            <a href="/impressum">Datenschutz</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
