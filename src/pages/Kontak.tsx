import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: 'Nama tidak boleh kosong' }).max(100, { message: 'Nama maksimal 100 karakter' }),
  phone: z.string().trim().min(10, { message: 'Nomor telepon minimal 10 digit' }).max(15, { message: 'Nomor telepon maksimal 15 digit' }),
  message: z.string().trim().min(10, { message: 'Pesan minimal 10 karakter' }).max(500, { message: 'Pesan maksimal 500 karakter' }),
});

const Kontak = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = contactSchema.parse(formData);
      
      const whatsappMessage = `Halo Gogo Car Wash,%0A%0ANama: ${encodeURIComponent(validatedData.name)}%0ANo. HP: ${encodeURIComponent(validatedData.phone)}%0APesan: ${encodeURIComponent(validatedData.message)}`;
      
      window.open(`https://wa.me/6281234567890?text=${whatsappMessage}`, '_blank');
      
      toast({
        title: 'Berhasil!',
        description: 'Anda akan diarahkan ke WhatsApp',
      });
      
      setFormData({ name: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: 'Error',
          description: 'Mohon periksa kembali form Anda',
          variant: 'destructive',
        });
      }
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat',
      content: 'Jl. Raya Otomotif No. 123, Jakarta Selatan',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telepon',
      content: '+62 812-3456-7890',
      link: 'tel:+6281234567890',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Jam Operasional',
      content: 'Senin - Sabtu: 08.00 - 20.00\nMinggu: 09.00 - 18.00',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      content: 'Chat langsung dengan kami',
      link: 'https://wa.me/6281234567890',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hubungi <span className="text-gradient">Kami</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami siap membantu menjawab pertanyaan dan melayani kebutuhan car wash Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Informasi Kontak</h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-card rounded-xl border border-border overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890123!2d106.8123456!3d-6.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMDQuNCJTIDEwNsKwNDgnNDQuNCJF!5e0!3m2!1sen!2sid!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Gogo Car Wash"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Kirim Pesan</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Nama Lengkap
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Nomor Telepon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={errors.phone ? 'border-destructive' : ''}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  placeholder="Tuliskan pesan Anda di sini..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={errors.message ? 'border-destructive' : ''}
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full glow-hover">
                Kirim via WhatsApp
              </Button>
            </form>

            <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-foreground">
                <strong>Catatan:</strong> Setelah mengirim form, Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan dengan tim kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
