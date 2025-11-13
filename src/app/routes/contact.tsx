import { ContactForm } from '../../components/contact-form';
import { usePageMetadata } from '../../lib/seo';
import { Shield, Signal, Phone } from 'lucide-react';

export default function ContactRoute() {
  usePageMetadata({
    title: 'Aegis Black | Contact & Booking',
    description: 'Secure booking form for executive escort transportation, armored convoy planning, and close protection teams.',
  });

  return (
    <section className="space-y-10">
      <header className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-white/40">Contact</p>
          <h1 className="mt-4 text-4xl font-serif">Secure booking & briefing intake</h1>
          <p className="mt-4 text-sm text-white/70">
            Complete the encrypted form and our operations desk will reply via the channel you specify. For urgent movements call the 24/7 number or Signal.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-gold" /> +1 (202) 555-0118
            </p>
            <p className="flex items-center gap-2">
              <Signal className="h-4 w-4 text-brand-gold" /> Signal: aegisblack.ops
            </p>
            <p className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-brand-gold" /> PGP: ops@aegisblack.example
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-brand-gold/30 bg-brand-midnight/60 p-6">
          <ContactForm />
        </div>
      </header>
    </section>
  );
}
