'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import Link from 'next/link'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(6, 'Phone number is required'),
  occasion: z.enum(['wedding', 'engagement', 'corporate', 'birthday', 'other'], {
    required_error: 'Please select an occasion',
  }),
  guestCount: z.string().min(1, 'Estimated guest count is required'),
  eventDate: z.string().min(1, 'Preferred date is required'),
  message: z.string().min(10, 'Please tell us more about your event (min 10 characters)'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission (no serverless function on Vercel Hobby)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
  }

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
            <li><Link href="/venue" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-500">Venue</Link></li>
            <li><Link href="/contact" className="text-[#D4AF37] border-b border-[#D4AF37] pb-1">Contact</Link></li>
          </ul>
          <Link href="/contact" className="hidden md:block font-label-caps text-label-caps px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#0A0E1A] rounded-none hover:opacity-90 transition-opacity border border-transparent uppercase tracking-widest">
            Reserve Now
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest">Get in Touch</span>
            <h1 className="font-display-lg text-display-lg text-[#D4AF37] mt-4">Begin Your Story</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
              Every legendary event starts with a conversation. Share your vision, and let us bring it to life.
            </p>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-[120px] px-8">
        <div className="max-w-[720px] mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 border border-[#D4AF37]/30 bg-surface-container-low"
            >
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <h2 className="font-headline-lg text-headline-lg text-[#D4AF37]">Thank You</h2>
              <p className="font-body-lg text-on-surface-variant mt-4 max-w-md mx-auto">
                Your inquiry has been received. Our team will contact you within 24 hours to discuss your event.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 font-label-caps text-label-caps px-8 py-4 border border-[#D4AF37] text-[#D4AF37] rounded-none hover:bg-[#D4AF37] hover:text-[#0A0E1A] transition-all duration-300 uppercase tracking-widest"
              >
                Send Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest mb-3">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  {...register('fullName')}
                  className="w-full bg-surface-container border border-[#D4AF37]/20 text-on-surface px-5 py-4 font-body-md text-body-md focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
                  placeholder="Your full name"
                  aria-invalid={errors.fullName ? 'true' : undefined}
                />
                {errors.fullName && (
                  <p className="text-red-400 font-body-md text-sm mt-2" role="alert">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest mb-3">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full bg-surface-container border border-[#D4AF37]/20 text-on-surface px-5 py-4 font-body-md text-body-md focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
                    placeholder="your@email.com"
                    aria-invalid={errors.email ? 'true' : undefined}
                  />
                  {errors.email && (
                    <p className="text-red-400 font-body-md text-sm mt-2" role="alert">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest mb-3">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full bg-surface-container border border-[#D4AF37]/20 text-on-surface px-5 py-4 font-body-md text-body-md focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
                    placeholder="+93 700 000 000"
                    aria-invalid={errors.phone ? 'true' : undefined}
                  />
                  {errors.phone && (
                    <p className="text-red-400 font-body-md text-sm mt-2" role="alert">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label htmlFor="occasion" className="block font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest mb-3">
                  Occasion
                </label>
                <select
                  id="occasion"
                  {...register('occasion')}
                  className="w-full bg-surface-container border border-[#D4AF37]/20 text-on-surface px-5 py-4 font-body-md text-body-md focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none appearance-none"
                  aria-invalid={errors.occasion ? 'true' : undefined}
                  defaultValue=""
                >
                  <option value="" disabled>Select occasion type</option>
                  <option value="wedding">Wedding</option>
                  <option value="engagement">Engagement</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="other">Other</option>
                </select>
                {errors.occasion && (
                  <p className="text-red-400 font-body-md text-sm mt-2" role="alert">{errors.occasion.message}</p>
                )}
              </div>

              {/* Guest Count & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guestCount" className="block font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest mb-3">
                    Estimated Guests
                  </label>
                  <input
                    id="guestCount"
                    type="text"
                    {...register('guestCount')}
                    className="w-full bg-surface-container border border-[#D4AF37]/20 text-on-surface px-5 py-4 font-body-md text-body-md focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
                    placeholder="e.g. 200"
                    aria-invalid={errors.guestCount ? 'true' : undefined}
                  />
                  {errors.guestCount && (
                    <p className="text-red-400 font-body-md text-sm mt-2" role="alert">{errors.guestCount.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="eventDate" className="block font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest mb-3">
                    Preferred Date
                  </label>
                  <input
                    id="eventDate"
                    type="date"
                    {...register('eventDate')}
                    className="w-full bg-surface-container border border-[#D4AF37]/20 text-on-surface px-5 py-4 font-body-md text-body-md focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
                    aria-invalid={errors.eventDate ? 'true' : undefined}
                  />
                  {errors.eventDate && (
                    <p className="text-red-400 font-body-md text-sm mt-2" role="alert">{errors.eventDate.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest mb-3">
                  Tell Us About Your Event
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className="w-full bg-surface-container border border-[#D4AF37]/20 text-on-surface px-5 py-4 font-body-md text-body-md focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none resize-vertical"
                  placeholder="Describe your vision for the event..."
                  aria-invalid={errors.message ? 'true' : undefined}
                />
                {errors.message && (
                  <p className="text-red-400 font-body-md text-sm mt-2" role="alert">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-label-caps text-label-caps px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C19B2C] text-[#0A0E1A] rounded-none hover:opacity-90 transition-opacity uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-16 border-t border-[#D4AF37]/20 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest mb-2">Location</h3>
                <p className="font-body-md text-on-surface-variant">Kabul, Afghanistan</p>
              </div>
              <div>
                <h3 className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest mb-2">Phone</h3>
                <p className="font-body-md text-on-surface-variant">+93 700 000 000</p>
              </div>
              <div>
                <h3 className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest mb-2">Email</h3>
                <p className="font-body-md text-on-surface-variant">events@kabulstar.com</p>
              </div>
            </div>
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