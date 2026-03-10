const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          <div className="font-display font-bold text-lg tracking-wider">
            <span className="text-primary">GRUPPO</span>{" "}
            <span className="text-foreground">GRIGOLIN</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gruppo Grigolin S.p.A. — Tutti i diritti riservati
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors font-display">
              Privacy
            </a>
            <a href="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors font-display">
              Cookie
            </a>
            <a href="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors font-display">
              Legale
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
