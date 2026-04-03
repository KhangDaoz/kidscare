const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-16 px-8 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-screen-2xl mx-auto">
        
        {/* Brand & Copyright */}
        <div className="space-y-4 text-center md:text-left">
          <div className="text-lg font-bold text-slate-400">Hành Trang Nhí</div>
          <p className="text-slate-500 text-sm leading-relaxed whitespace-nowrap">
            © {currentYear} Hành Trang Nhí. Chắp cánh ước mơ trẻ thơ.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 font-headline text-[10px] uppercase tracking-[0.2em] font-bold">
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
