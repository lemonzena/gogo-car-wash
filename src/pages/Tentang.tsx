import { Award, Users, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Tentang = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Kualitas Premium',
      description: 'Kami hanya menggunakan produk dan peralatan terbaik untuk memastikan hasil sempurna di setiap layanan.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Tim Profesional',
      description: 'Dikerjakan oleh tenaga ahli yang berpengalaman lebih dari 5 tahun di industri car care.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Fokus Detail',
      description: 'Perhatian penuh terhadap setiap detail untuk memastikan tidak ada bagian yang terlewat.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Efisiensi Waktu',
      description: 'Proses cepat namun tetap menjaga standar kualitas tinggi tanpa kompromi.',
    },
  ];

  const stats = [
    { value: '5+', label: 'Tahun Pengalaman' },
    { value: '10K+', label: 'Mobil Dilayani' },
    { value: '98%', label: 'Kepuasan Pelanggan' },
    { value: '24/7', label: 'Konsultasi' },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Tentang <span className="text-gradient">Gogo Car Wash</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Layanan premium car wash dan detailing dengan standar profesional
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Siapa Kami?</h2>
            <div className="space-y-4 text-lg text-foreground">
              <p>
                <strong className="text-gradient">Gogo Car Wash</strong> adalah penyedia layanan cuci mobil dan detailing premium yang berdiri sejak 2019. 
                Kami memahami bahwa kendaraan Anda bukan hanya alat transportasi, tetapi juga investasi yang memerlukan perawatan terbaik.
              </p>
              <p>
                Dengan pengalaman lebih dari 5 tahun dan lebih dari 10.000 kendaraan yang telah kami layani, kami berkomitmen untuk 
                memberikan hasil yang sempurna di setiap pekerjaan. Tim kami terdiri dari profesional terlatih yang menguasai teknik 
                detailing modern dan menggunakan produk berkualitas tinggi yang aman untuk semua jenis cat kendaraan.
              </p>
              <p>
                Kepercayaan pelanggan adalah prioritas utama kami. Itu sebabnya kami selalu fokus pada detail, kualitas, dan kepuasan 
                pelanggan dalam setiap layanan yang kami berikan. Dari cuci basic hingga full detailing, kami memastikan kendaraan Anda 
                mendapatkan perawatan terbaik.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-hero p-8 rounded-2xl text-center hover:scale-105 transition-transform"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mengapa Pelanggan <span className="text-gradient">Memilih Kami?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-all hover:shadow-glow"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="bg-gradient-hero p-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Komitmen Kami untuk Kendaraan Anda
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Kami tidak hanya mencuci mobil Anda. Kami merawatnya dengan standar profesional, produk premium, 
            dan perhatian terhadap detail yang membuat perbedaan. Kepuasan Anda adalah kesuksesan kami.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform" asChild>
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Gogo%20Car%20Wash"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
