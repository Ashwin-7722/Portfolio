const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-mono">
        © {new Date().getFullYear()} Ashwin Siva Kumar. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">
        Built with precision.
      </p>
    </div>
  </footer>
);

export default Footer;
