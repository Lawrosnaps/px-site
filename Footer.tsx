const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-8 px-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-center font-inter text-sm text-off-white/40 md:flex-row">
        <p>
          &copy; 1987 - {currentYear} 87PX CREATIVE STUDIO. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono uppercase tracking-widest">
          [SYSTEM ONLINE]
        </p>
      </div>
    </footer>
  );
};

export default Footer;