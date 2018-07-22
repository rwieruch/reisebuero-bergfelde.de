import React from 'react';
import { FaEnvelope, FaMap } from 'react-icons/lib/fa';

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="mailto:hallo@bergfelde-reisen.de">
        <FaEnvelope />
      </a>
    </li>
    <li>
      <a href="https://goo.gl/maps/mhggNdQKkAv">
        <FaMap />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
