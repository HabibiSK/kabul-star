'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const occasions = [
  {
    title: 'Wedding Celebrations',
    subtitle: 'Where Fairy Tales Begin',
    description: 'From intimate ceremonies to grand celebrations for 500+ guests, our Crystal Ballroom transforms your wedding into a legendary event. Afghan traditions meet modern luxury.',
    image: '/images/wedding-gallery-hero.jpg',
    features: ['Crystal Ballroom up to 500 guests', 'Bridal suite with panoramic views', 'Custom Afghan & international cuisine', 'Live music & entertainment stages'],
  },
  {
    title: 'Engagement Ceremonies',
    subtitle: 'The Promise of Forever',
    description: 'Celebrate the beginning of your journey in an intimate setting adorned with gold accents and floral masterpieces. Every detail, crafted with intention.',
    image: '/images/opulent-florals.jpg',
    features: ['Intimate halls for 50–200 guests', 'Floral design partnerships', 'Photography-ready settings', 'Personalized ceremony coordination'],
  },
  {
    title: 'Corporate Events',
    subtitle: 'Impress & Inspire',
    description: 'Elevate your corporate gatherings with state-of-the-art facilities, refined catering, and an atmosphere that commands attention and respect.',
    image: '/images/gilded-dining.jpg',
    features: ['AV-equipped conference halls', 'Executive dining experiences', 'Breakout rooms & networking spaces', 'Full-service event coordination'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
}

export default function OccasionsPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0E1A]/60 backdrop-blur-2xl border-b border-[#D4AF37]/10">
        <div className="max-w-[1280px] mx-auto px-12 py-8 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif tracking-[0.15em] text-[#D4AF37]">
            KABUL STAR
          </Link>
          <ul className="hidden md:flex space-x-8 font-serif uppercase tracking-[0.2em] text-xs">
            <li><Link href="/" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500">Home</Link></li>
            <li><Link href="/gallery" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500">Gallery</Link></li>
            <li><Link href="/occasions" className="text-[#D4AF37] border-b border-[#D4AF37] pb-1">Occasions</Link></li>
            <li><Link href="/venue" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500">Venue</Link></li>
            <li><Link href="/contact" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500">Contact</Link></li>
          </ul>
          <Link href="/contact" className="hidden md:block font-label-caps text-label-caps px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#0A0E1A] rounded-none hover:opacity-90 transition-opacity border border-transparent uppercase tracking-widest">
            Reserve Now
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-8">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-grand-ballroom.jpg" alt="" fill className="object-cover opacity-10" aria-hidden="true" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/90 to-surface" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest">Celebrate</span>
            <h1 className="font-display-lg text-display-lg text-[#D4AF37] mt-4">Every Occasion</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
              From sacred unions to corporate galas — every event at Kabul Star is elevated to an art form.
            </p>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Occasion Sections */}
      <section className="pb-[120px] px-8">
        <div className="max-w-[1280px] mx-auto space-y-24">
          {occasions.map((occasion, i) => (
            <motion.div
              key={occasion.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="md:w-1/2">
                <div className="relative overflow-hidden border border-[#D4AF37]/20">
                  <Image
                    src={occasion.image}
                    alt={occasion.title}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]/50" />
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest">{occasion.subtitle}</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mt-3">{occasion.title}</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">{occasion.description}</p>
                <ul className="mt-8 space-y-3">
                  {occasion.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] mt-2.5 shrink-0" />
                      <span className="font-body-md text-on-surface-variant">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-block mt-8 font-label-caps text-label-caps px-8 py-4 bg-[#D4AF37] text-[#0A0E1A] rounded-none hover:bg-[#f2ca50] transition-colors duration-300 uppercase tracking-widest">
                  Inquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0E1A] border-t border-[#D4AF37]/20">
        <div className="max-w-[1280px] mx-auto px-8 py-16">
          <div className="flex flex-col items-center gap-8">
            <ul className="flex space-x-8 font-serif text-[10px] tracking-widest uppercase">
              <li><Link href="/privacy" className="text-slate-500 hover:text-[#D4AF37] transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-slate-500 hover:text-[#D4AF37] transition-colors">Terms</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-[#D4AF37] transition-colors">Contact</Link></li>
            </ul>
            <div className="text-[#D4AF37] font-serif text-[10px] tracking-widest uppercase text-center border-t border-[#D4AF37] pt-4 w-64">
              © 2024 KABUL STAR CONTINENTAL. EXCLUSIVE LUXURY.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}