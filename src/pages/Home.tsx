import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Shield, Clock, Award } from 'lucide-react';
import heroImage from '@/assets/hero-car.jpg';

const Home = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Hasil Mengkilap',
      description: 'Cat mobil Anda akan bersinar seperti baru dengan perawatan premium kami',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Servis Cepat',
      description: 'Proses efisien tanpa mengorbankan kualitas, selesai dalam waktu singkat',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Aman untuk Cat',
      description: 'Produk berkualitas tinggi yang aman untuk semua jenis cat kendaraan',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Tim Profesional',
      description: 'Dikerjakan oleh tenaga ahli berpengalaman dengan standar tinggi',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Premium Car Wash &<br />
            <span className="text-gradient">Detailing Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Mobil Anda layak mendapatkan perawatan terbaik. Kami hadir dengan layanan profesional dan hasil yang sempurna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 glow" asChild>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Gogo%20Car%20Wash%2C%20saya%20ingin%20booking%20layanan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Sekarang
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link to="/paket">Lihat Paket</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mengapa Pilih <span className="text-gradient">Gogo Car Wash?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan standar kualitas tertinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Siap untuk Mobil yang Lebih Bersih?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Booking sekarang dan rasakan pengalaman cuci mobil premium dengan hasil yang memuaskan
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform" asChild>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Gogo%20Car%20Wash%2C%20saya%20ingin%20booking%20layanan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami via WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
