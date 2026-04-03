import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Học tập', path: '/children' },
    { name: 'Phụ huynh', path: '/parents' },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-3 py-3 transition-all sm:px-5 sm:py-4">
      <div className="mx-auto mt-1 max-w-[1440px] rounded-3xl border border-white/20 bg-white/70 px-4 py-3 shadow-xl shadow-sky-900/5 backdrop-blur-xl sm:mt-2 sm:px-6 lg:rounded-full lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-headline text-lg font-black text-sky-700 transition-all hover:opacity-80 sm:gap-3 sm:text-2xl">
            <img
              src="/images/icon.png"
              alt="Logo Hành Trang Nhí"
              className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
            />
            <span className="hidden leading-none pt-0.5 sm:block">Hành Trang Nhí</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-1.5 rounded-full font-bold transition-all duration-300 ${
                  pathname === link.path
                    ? 'bg-sky-50 text-sky-700 border-b-4 border-sky-400'
                    : 'text-slate-600 hover:bg-sky-50 hover:scale-105'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-600 md:hidden"
              aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
            <button className="material-symbols-outlined rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-sky-600">
              account_circle
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-3 rounded-2xl border border-white/40 bg-white/90 p-2 shadow-lg backdrop-blur-xl md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                  pathname === link.path
                    ? 'bg-sky-100 text-sky-700'
                    : 'text-slate-600 hover:bg-sky-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
