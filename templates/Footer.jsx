// Footer.jsx

import React from 'react';
import Image from 'next/image';

const Footer = ({ imageUrl, altText }) => {
  return (
    <>
      <Image src={imageUrl} alt={altText} width={32} height={32} className='sidebar-icon'/>
    </>
  );
};

export default Footer;
