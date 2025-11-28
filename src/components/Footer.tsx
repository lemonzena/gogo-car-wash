import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-md flex items-center justify-center">
                <span className="text-2xl font-bold text-white">G</span>
              </div>
              <span className="text-xl font-bold text-gradient">GOGO CAR WASH</span>
            </div>
            <p className="text-muted-foreground">
              Layanan cuci mobil premium dengan hasil mengkilap dan perawatan terbaik untuk kendaraan Anda.
            </p>
          </div>

          {/* Lokasi & Kontak */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Hubungi Kami</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Jl. Raya Otomotif No. 123, Jakarta Selatan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-primary transition-colors">
                  +62 812-3456-7890
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p>Senin - Sabtu: 08.00 - 20.00</p>
                  <p>Minggu: 09.00 - 18.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Layanan Kami</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Basic Wash</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Snow Foam</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Interior Cleaning</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Full Detailing</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Engine Bay Cleaning</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gogo Car Wash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
