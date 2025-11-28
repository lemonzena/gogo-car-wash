import heroImage from '@/assets/hero-car.jpg';
import foamImage from '@/assets/gallery-foam.jpg';
import shineImage from '@/assets/gallery-shine.jpg';
import interiorImage from '@/assets/gallery-interior.jpg';

const Galeri = () => {
  const galleryItems = [
    {
      image: heroImage,
      title: 'Premium Detailing Result',
      category: 'Eksterior',
    },
    {
      image: foamImage,
      title: 'Snow Foam Treatment',
      category: 'Snow Foam',
    },
    {
      image: shineImage,
      title: 'Mirror-Like Finish',
      category: 'Polish & Wax',
    },
    {
      image: interiorImage,
      title: 'Interior Detailing',
      category: 'Interior',
    },
    {
      image: heroImage,
      title: 'Dramatic Lighting Detail',
      category: 'Before/After',
    },
    {
      image: foamImage,
      title: 'Deep Foam Cleaning',
      category: 'Snow Foam',
    },
  ];

  const beforeAfter = [
    {
      before: 'Sebelum pencucian, mobil terlihat kusam dan berdebu',
      after: 'Setelah detailing, cat mengkilap seperti baru dengan refleksi sempurna',
    },
    {
      before: 'Interior kotor dengan debu dan noda membandel',
      after: 'Interior bersih total, harum, dan nyaman seperti showroom',
    },
    {
      before: 'Ruang mesin berminyak dan berlumut',
      after: 'Engine bay bersih, rapi, dan komponen terlihat terawat',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Galeri <span className="text-gradient">Hasil Kerja</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lihat hasil kerja profesional kami dan transformasi kendaraan pelanggan
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Transformasi <span className="text-gradient">Before & After</span>
          </h2>

          <div className="space-y-8">
            {beforeAfter.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary transition-all"
              >
                <div className="grid md:grid-cols-2">
                  <div className="p-8 flex flex-col justify-center bg-destructive/10">
                    <span className="text-sm font-semibold text-destructive mb-2">SEBELUM</span>
                    <p className="text-foreground text-lg">{item.before}</p>
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-primary/10">
                    <span className="text-sm font-semibold text-primary mb-2">SESUDAH</span>
                    <p className="text-foreground text-lg">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-hero p-12 rounded-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ingin Hasil Seperti Ini untuk Mobil Anda?
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Booking sekarang dan lihat sendiri transformasi kendaraan Anda
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20booking%20layanan%20setelah%20melihat%20galeri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:scale-105 transition-transform"
          >
            Book Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
