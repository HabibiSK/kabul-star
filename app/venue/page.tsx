'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const venueDetails = [
  { label: 'Total Capacity', value: '500+ Guests' },
  { label: 'Ballrooms', value: '3 Distinct Spaces' },
  { label: 'Outdoor Terrace', value: '2,000 sqm' },
  { label: 'Bridal Suites', value: '4 Private Suites' },
  { label: 'Parking', value: '300+ Spaces' },
  { label: 'Founded', value: 'Kabul, Afghanistan' },
]

const venueImages = [
  { src: '/images/hero-grand-ballroom.jpg', alt: 'Grand Ballroom panoramic view', title: 'Crystal Ballroom' },
  { src: '/images/grand-staircase.jpg', alt: 'Grand staircase entrance', title: 'Grand Staircase' },
  { src: '/images/gilded-dining.jpg', alt: 'Gilded dining hall', title: 'Royal Dining Hall' },
  { src: '/images/sacred-spaces.jpg', alt: 'Sacred ceremony space', title: 'Ceremony Pavilion' },
  { src: '/images/opulent-florals.jpg', alt: 'Opulent floral arrangements', title: 'Garden Terrace' },
  { src: '/images/wedding-gallery-hero.jpg', alt: 'Wedding reception hall', title: 'Reception Hall' },
]

const amenities = [
  'State-of-the-art sound & lighting systems',
  'Dedicated bridal preparation suites',
  'On-site gourmet kitchen & catering team',
  'Valet & self-parking for 300+ vehicles',
  'Wheelchair accessible throughout',
  '24/7 security & event coordination staff',
  'Climate-controlled interiors',
  'High-speed Wi-Fi throughout the venue',
]

export default function VenuePage() {
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
            <li><Link href="/occasions" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500">Occasions</Link></li>
            <li><Link href="/venue" className="text-[#D4AF37] border-b border-[#D4AF37] pb-1">Venue</Link></li>
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
          <Image src="/images/grand-staircase.jpg" alt="" fill className="object-cover opacity-10" aria-hidden="true" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/90 to-surface" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest">The Venue</span>
            <h1 className="font-display-lg text-display-lg text-[#D4AF37] mt-4">Our Spaces</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
              Three distinct ballrooms, infinite possibilities. Every space designed to elevate your celebration.
            </p>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Key Details */}
      <section className="py-[80px] px-8 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {venueDetails.map((detail, i) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <p className="font-headline-md text-[#D4AF37]">{detail.value}</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 uppercase tracking-wider">{detail.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-[120px] px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venueImages.map((img, i) => (
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
                <div className="p-4 border-t border-[#D4AF37]/20">
                  <h3 className="font-headline-md text-on-surface text-lg">{img.title}</h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-[120px] px-8 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest">Amenities</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4">World-Class Facilities</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {amenities.map((amenity, i) => (
              <motion.div
                key={amenity}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 border border-[#D4AF37]/20 bg-surface-container"
              >
                <span className="w-2 h-2 bg-[#D4AF37] mt-2 shrink-0" />
                <span className="font-body-md text-on-surface-variant">{amenity}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/contact" className="inline-block font-label-caps text-label-caps px-10 py-4 bg-[#D4AF37] text-[#0A0E1A] rounded-none hover:bg-[#f2ca50] transition-colors duration-300 uppercase tracking-widest">
              Schedule a Tour
            </Link>
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