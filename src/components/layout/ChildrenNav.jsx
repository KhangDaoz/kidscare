import React from 'react';
import { Link } from 'react-router-dom';

const ChildrenNav = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2 font-headline text-lg font-black text-sky-700 transition-all hover:opacity-80 sm:gap-3 sm:text-xl md:text-2xl">
          <img
            src="/images/icon.png"
            alt="Logo Hành Trang Nhí"
            className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9 md:h-10 md:w-10"
          />
          <span className="hidden leading-none pt-0.5 sm:block">Hành Trang Nhí</span>
        </Link>
    </nav>
  );
};

export default ChildrenNav;