import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { siteMetadata } from '../../gatsby-config';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <title>{siteMetadata.title}</title>
      <meta itemprop="keywords" content={siteMetadata.keywords} />
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
