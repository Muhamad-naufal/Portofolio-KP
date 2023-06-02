import React from 'react';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#Banner'>
            <h1>Porto <span className='text-gradient'>Folio</span></h1>
          </a>
          <button className='btn btn-sm'>
            <a href='https://wa.me/6282133887594'>Hubungi Saya</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
