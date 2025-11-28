import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/paket', label: 'Paket & Harga' },
    { to: '/galeri', label: 'Galeri' },
    { to: '/tentang', label: 'Tentang Kami' },
    { to: '/kontak', label: 'Kontak' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-md flex items-center justify-center">
              <span className="text-2xl font-bold text-white">G</span>
            </div>
            <span className="text-2xl font-bold text-gradient">GOGO CAR WASH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md transition-all ${
                  isActive(link.to)
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'text-foreground hover:text-primary hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="ml-4 glow-hover" asChild>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Gogo%20Car%20Wash%2C%20saya%20ingin%20booking%20layanan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Sekarang
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md transition-all ${
                  isActive(link.to)
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'text-foreground hover:text-primary hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full glow-hover" asChild>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Gogo%20Car%20Wash%2C%20saya%20ingin%20booking%20layanan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Sekarang
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
