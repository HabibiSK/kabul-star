'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0E1A]/60 backdrop-blur-2xl border-b border-[#D4AF37]/10">
        <div className="max-w-[1280px] mx-auto px-12 py-8 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-serif tracking-[0.15em] text-[#D4AF37]"
          >
            KABUL STAR
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex space-x-8 font-serif uppercase tracking-[0.2em] text-xs"
          >
            <li>
              <Link
                href="#venue"
                className="text-[#D4AF37] border-b border-[#D4AF37] pb-1 hover:opacity-80 transition-opacity"
              >
                The Venue
              </Link>
            </li>
            <li>
              <Link
                href="#occasions"
                className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500"
              >
                Occasions
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500"
              >
                About Us
              </Link>
            </li>
          </motion.ul>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block font-label-caps text-label-caps px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#0A0E1A] rounded-none hover:opacity-90 transition-opacity border border-transparent"
          >
            Reserve Now
          </motion.button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#D4AF37]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-royal-hall.jpg"
            alt="Royal Wedding Hall - Grand Ballroom with crystal chandeliers and gold accents"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/80 to-surface" />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-[1280px] mx-auto px-16 text-center flex flex-col items-center gap-8"
        >
          {/* Delicate Gold Line Decor */}
          <motion.div
            variants={fadeInUp}
            className="w-16 h-px bg-[#D4AF37] mb-4"
          />

          <motion.h1
            variants={fadeInUp}
            className="font-display-lg text-display-lg text-[#D4AF37] max-w-4xl drop-shadow-lg"
          >
            The Pinnacle of Elegance
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-center font-light leading-relaxed"
          >
            Exquisite celebrations in the heart of Kabul. Where your fairy tale
            begins.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex gap-6">
            <Link
              href="#contact"
              className="font-label-caps text-label-caps px-12 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C19B2C] text-[#0A0E1A] rounded-none hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 border border-[#D4AF37]/50 tracking-wide uppercase"
            >
              Book Now
            </Link>
            <Link
              href="#gallery"
              className="font-label-caps text-label-caps px-12 py-4 bg-transparent text-[#D4AF37] rounded-none border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0E1A] transition-all duration-300 tracking-wide uppercase"
            >
              Explore Venue
            </Link>
          </motion.div>

          {/* Delicate Gold Line Decor */}
          <motion.div
            variants={fadeInUp}
            className="w-16 h-px bg-[#D4AF37] mt-12"
          />
        </motion.div>
      </section>

      {/* Features Preview Section */}
      <section className="py-[120px] px-8 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4">
              Crafted for Unforgettable Celebrations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              {
                title: 'Crystal Ballroom',
                image: '/images/crystal-ballroom.jpg',
                description:
                  'Our signature venue features soaring ceilings, crystal chandeliers, and capacity for 500+ guests.',
              },
              {
                title: 'Garden Terrace',
                image: '/images/garden-terrace.jpg',
                description:
                  'An outdoor paradise with manicured gardens, ambient lighting, and mountain views.',
              },
              {
                title: 'Gourmet Cuisine',
                image: '/images/feature-cuisine.jpg',
                description:
                  'World-class chefs creating authentic Afghan delicacies and international favorites.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden border border-[#D4AF37]/20 bg-surface-container-high"
              >
                <div className="h-[240px] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-on-surface mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] px-8 bg-surface">
        <div className="max-w-[640px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-b border-[#D4AF37]/30 py-24 px-8"
          >
            <h2 className="font-display-lg text-display-lg text-on-surface mb-6">
              Envision Your Day
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">
              Allow us to walk you through the possibilities. Schedule a private
              viewing to experience the grandeur of Kabul Star in person.
            </p>
            <Link
              href="#contact"
              className="inline-block font-label-caps text-label-caps px-10 py-4 bg-[#D4AF37] text-[#0A0E1A] rounded-none hover:bg-[#f2ca50] transition-colors duration-300 uppercase tracking-widest"
            >
              Request a Tour
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0E1A] border-t border-[#D4AF37]/20">
        <div className="max-w-[1280px] mx-auto px-8 py-16">
          <div className="flex flex-col items-center gap-8">
            <ul className="flex space-x-8 font-serif text-[10px] tracking-widest uppercase">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-500 hover:text-[#D4AF37] transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-500 hover:text-[#D4AF37] transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-500 hover:text-[#D4AF37] transition-colors"
                >
                  Contact
                </Link>
              </li>
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
