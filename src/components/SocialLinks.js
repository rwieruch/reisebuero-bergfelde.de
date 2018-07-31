import React from 'react';
import { FaEnvelope, FaMapSigns } from 'react-icons/lib/fa';

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="mailto:info@reisebuero-bergfelde.de">
        <FaEnvelope />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/maps/mhggNdQKkAv"
      >
        <FaMapSigns />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
