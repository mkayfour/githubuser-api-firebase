import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <Container
      fluid
      tag='footer'
      className='text-right bg-info text-white text-uppercase fixed-bottom p-1'
    >
      CopyRight @MohitKumar
    </Container>
  );
};

export default Footer;
