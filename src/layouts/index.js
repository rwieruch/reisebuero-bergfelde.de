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
      <meta
        name="google-site-verification"
        content="TBf5jb-hGSmtzskBycCj68Ife1MDiO0pESSf8Q6c_kQ"
      />
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
