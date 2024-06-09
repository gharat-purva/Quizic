import React from 'react';

const Header = () => {
  return (
    <div className="header fixed left-10 top-1/2 transform -translate-y-1/2">
      <h1 className="font-serif text-slate-600 text-5xl font-bold" style={{ transform: 'rotate(-90deg)', transformOrigin: 'left center' }}>Quizic</h1>
    </div>
  );
};

export default Header;
