/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surface Colors (Midnight Navy Base)
        surface: '#0c1324',
        'surface-dim': '#0c1324',
        'surface-bright': '#32394b',
        'surface-container-lowest': '#070e1e',
        'surface-container-low': '#141b2c',
        'surface-container': '#181f30',
        'surface-container-high': '#232a3b',
        'surface-container-highest': '#2e3447',
        
        // Primary Colors (Heritage Gold)
        primary: '#f2ca50',
        'primary-container': '#d4af37',
        'primary-fixed': '#ffe088',
        'primary-fixed-dim': '#e9c349',
        'on-primary': '#3c2f00',
        'on-primary-container': '#554300',
        'on-primary-fixed': '#241a00',
        'on-primary-fixed-variant': '#574500',
        
        // Secondary Colors
        secondary: '#c3c6d7',
        'secondary-container': '#454957',
        'on-secondary': '#2c303d',
        'on-secondary-container': '#b5b8c9',
        
        // Tertiary Colors
        tertiary: '#cececa',
        'tertiary-container': '#b2b3af',
        'on-tertiary': '#2f312e',
        
        // Text Colors
        'on-surface': '#dbe2fa',
        'on-surface-variant': '#d0c5af',
        'on-background': '#dbe2fa',
        background: '#0c1324',
        
        // Borders & Outlines
        outline: '#99907c',
        'outline-variant': '#4d4635',
        
        // Inverse Colors
        'inverse-surface': '#dbe2fa',
        'inverse-on-surface': '#293042',
        'inverse-primary': '#735c00',
        
        // Surface Tint
        'surface-tint': '#e9c349',
        
        // Error Colors
        error: '#ffb4ab',
        'error-container': '#ffdad6',
        'on-error': '#690005',
        'on-error-container': '#93000a',
      },
      fontFamily: {
        'display-lg': ['Noto Serif', 'serif'],
        'headline-lg': ['Noto Serif', 'serif'],
        'headline-md': ['Noto Serif', 'serif'],
        'body-lg': ['Manrope', 'sans-serif'],
        'body-md': ['Manrope', 'sans-serif'],
        'label-caps': ['Manrope', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
        'headline-lg': ['48px', { lineHeight: '1.2', fontWeight: '400' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '1.0', letterSpacing: '0.15em', fontWeight: '600' }],
      },
      spacing: {
        'container-max': '1280px',
        'section-gap': '120px',
        'gutter': '32px',
        'margin-edge': '64px',
        unit: '8px',
      },
      borderRadius: {
        'none': '0px',
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #C19B2C 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, #f2ca50 0%, #d4af37 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.4)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.6)',
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
        '700': '700ms',
      },
    },
  },
  plugins: [],
}
