import React from 'react';
import SocialLinks from './SocialLinks';

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Reisebüro Bergfelde</h1>
      <h3>
        Wo Reisen noch individuell auf Ihre Bedürfnisse zusammengestellt werden.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
