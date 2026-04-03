import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Học tập', path: '/children' },
    { name: 'Phụ huynh', path: '/parents' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 transition-all">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto rounded-full mt-2 bg-white/70 backdrop-blur-xl shadow-xl shadow-sky-900/5 px-8 py-4 border border-white/20">
        
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-black text-sky-700 flex items-center gap-3 hover:opacity-80 transition-all font-headline">
          <img
            src="/images/icon.png"
            alt="Logo Hành Trang Nhí"
            className="w-10 h-10 object-contain shrink-0"
          />
          <span className="leading-none pt-0.5">Hành Trang Nhí</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-slate-500 hover:text-sky-600 transition-colors p-2 rounded-full hover:bg-slate-100">
            account_circle
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
