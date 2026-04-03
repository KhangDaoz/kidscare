import React from 'react';
import { Link } from 'react-router-dom';

const ChildrenNav = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 px-8 py-6">
      {/* Logo Section */}
      <Link to="/" className="text-2xl font-black text-sky-700 flex items-center gap-3 hover:opacity-80 transition-all font-headline">
          <img
            src="/images/icon.png"
            alt="Logo Hành Trang Nhí"
            className="w-10 h-10 object-contain shrink-0"
          />
          <span className="leading-none pt-0.5">Hành Trang Nhí</span>
        </Link>
    </nav>
  );
};

export default ChildrenNav;