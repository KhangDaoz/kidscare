const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-100 bg-slate-50 px-4 py-12 sm:px-6 md:mt-20 md:px-8 md:py-16">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Brand & Copyright */}
        <div className="space-y-4 text-center md:text-left">
          <div className="text-lg font-bold text-slate-400">Hành Trang Nhí</div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-500 sm:max-w-none">
            © {currentYear} Hành Trang Nhí. Chắp cánh ước mơ trẻ thơ.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 font-headline text-[10px] font-bold uppercase tracking-[0.2em] sm:gap-8">
          {['Về chúng tôi', 'Điều khoản', 'Liên hệ', 'Bảo mật'].map((item) => (
            <a 
              key={item}
              href="#" 
              className="text-slate-400 hover:text-sky-400 transition-colors hover:underline decoration-sky-300 underline-offset-8"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social / Utility Icons */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-sky-500 hover:shadow-md transition-all border border-slate-100">
            <span className="material-symbols-outlined text-lg">language</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-sky-500 hover:shadow-md transition-all border border-slate-100">
            <span className="material-symbols-outlined text-lg">mail</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
