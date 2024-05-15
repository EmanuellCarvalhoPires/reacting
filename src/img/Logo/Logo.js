import React from 'react';
import Image from 'react-bootstrap/Image';
import logo from './logo.png'
function FluidExample() {
  return <Image src={logo} alt='' fluid />;
}

export default FluidExample;