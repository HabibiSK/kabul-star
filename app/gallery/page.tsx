'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const galleryImages = [
  { src: '/images/hero-grand-ballroom.jpg', alt: 'Grand Ballroom with crystal chandeliers', title: 'Grand Ballroom' },
  { src: '/images/wedding-gallery-hero.jpg', alt: 'Wedding ceremony setup', title: 'Ceremonial Hall' },
  { src: '/images/gilded-dining.jpg', alt: 'Gilded dining experience', title: 'Gilded Dining' },
  { src: '/images/grand-staircase.jpg', alt: 'Grand staircase entrance', title: 'Grand Staircase' },
  { src: '/images/opulent-florals.jpg', alt: 'Opulent floral arrangements', title: 'Opulent Florals' },
  { src: '/images/sacred-spaces.jpg', alt: 'Sacred ceremonial spaces', title: 'Sacred Spaces' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
}

export default function GalleryPage() {
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
            <li><Link href="/gallery" className="text-[#D4AF37] border-b border-[#D4AF37] pb-1">Gallery</Link></li>
            <li><Link href="/occasions" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500">Occasions</Link></li>
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
          <Image src="/images/wedding-gallery-hero.jpg" alt="" fill className="object-cover opacity-10" aria-hidden="true" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/90 to-surface" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <motion.div {...fadeInUp} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest">Our Venue</span>
            <h1 className="font-display-lg text-display-lg text-[#D4AF37] mt-4">The Gallery</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
              Every angle tells a story of elegance. Explore the spaces where unforgettable moments come to life.
            </p>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-[120px] px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden border border-[#D4AF37]/20 bg-surface-container-high"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="font-headline-md text-[#D4AF37]">{img.title}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]/50" />
              </motion.div>
            ))}
          </div>
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