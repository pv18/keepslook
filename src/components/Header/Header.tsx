import React from 'react';
import { Navbar, Social } from 'components';

export const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <h2 className='big-logo'>keepslook</h2>
      <Social />
    </div>
  );
};
