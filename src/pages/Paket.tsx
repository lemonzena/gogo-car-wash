import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Paket = () => {
  const packages = [
    {
      name: 'Basic Wash',
      price: 'Rp 35.000',
      duration: '15-20 menit',
      features: [
        'Cuci eksterior body',
        'Bilas dengan air bersih',
        'Lap kering',
        'Semir ban',
      ],
    },
    {
      name: 'Snow Foam',
      price: 'Rp 50.000',
      duration: '25-30 menit',
      features: [
        'Semua fitur Basic Wash',
        'Pre-wash foam tebal',
        'Pembersihan lebih dalam',
        'Semir ban & bumper',
        'Pembersihan velg',
      ],
      popular: true,
    },
    {
      name: 'Interior Cleaning',
      price: 'Rp 75.000',
      duration: '40-50 menit',
      features: [
        'Vacuum jok & karpet',
        'Lap dashboard & panel',
        'Pembersihan door trim',
        'Semir ban luar',
        'Wangi mobil premium',
      ],
    },
    {
      name: 'Engine Bay',
      price: 'Rp 60.000',
      duration: '30-35 menit',
      features: [
        'Pembersihan ruang mesin',
        'Steam cleaning',
        'Semir komponen plastik',
        'Hasil bersih & rapi',
      ],
    },
    {
      name: 'Full Detailing',
      price: 'Rp 200.000',
      duration: '2-3 jam',
      features: [
        'Snow Foam + Interior',
        'Engine Bay Cleaning',
        'Polish & Wax',
        'Coating proteksi',
        'Pembersihan menyeluruh',
        'Hasil showroom quality',
      ],
      premium: true,
    },
    {
      name: 'Premium Package',
      price: 'Rp 350.000',
      duration: '4-5 jam',
      features: [
        'Full Detailing lengkap',
        'Nano ceramic coating',
        'Deep interior detailing',
        'Leather conditioning',
        'Headlight restoration',
        'Garansi hasil 3 bulan',
      ],
      premium: true,
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Paket & <span className="text-gradient">Harga</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan kendaraan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-105 ${
                pkg.popular
                  ? 'border-primary shadow-glow'
                  : pkg.premium
                  ? 'border-accent shadow-card'
                  : 'border-border hover:border-primary'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  POPULER
                </div>
              )}
              {pkg.premium && (
                <div className="absolute top-0 right-0 bg-gradient-hero text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  PREMIUM
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
                  <p className="text-muted-foreground mt-1">⏱ {pkg.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full glow-hover" variant={pkg.premium ? 'default' : 'secondary'} asChild>
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20booking%20paket%20${encodeURIComponent(pkg.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Booking Sekarang
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card rounded-2xl border border-border text-center">
          <h3 className="text-2xl font-bold mb-4">Punya Kebutuhan Khusus?</h3>
          <p className="text-muted-foreground mb-6">
            Kami juga melayani paket custom sesuai kebutuhan Anda. Hubungi kami untuk konsultasi gratis.
          </p>
          <Button size="lg" asChild>
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20custom"
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Paket;
