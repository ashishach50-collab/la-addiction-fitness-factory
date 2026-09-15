# La Addiction Fitness Factory – Premium Gym Website

A modern, high-performance React website for La Addiction Fitness Factory in Rupnagar, Punjab.

## Features

✨ **Premium Design**
- Dark luxury aesthetic with red/orange accents
- Glassmorphism UI elements
- Smooth animations with Framer Motion
- Fully responsive mobile-first design

🎯 **Complete Sections**
- Hero with cinematic imagery and trust indicators
- About section with animated statistics
- Modern facilities showcase
- Training programs grid
- Why Choose Us section
- Image gallery with lightbox
- Google Reviews integration
- Contact & location information
- Premium membership CTA
- Sticky navigation with scroll effects

⚡ **Performance**
- Vite for fast builds and HMR
- Tailwind CSS for optimized styles
- Lazy-loaded components
- Optimized animations
- 90+ Lighthouse performance target

♿ **Accessibility**
- Semantic HTML structure
- Keyboard navigation support
- Visible focus states
- Reduced motion support
- ARIA labels and descriptions
- High color contrast

🚀 **Technology Stack**
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
├── styles/
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.jsx         # Navigation with mobile menu
│   └── Footer.jsx         # Footer with links and info
└── sections/
    ├── Hero.jsx           # Hero section
    ├── About.jsx          # About section
    ├── Facilities.jsx     # Facilities showcase
    ├── Training.jsx       # Training programs
    ├── WhyChooseUs.jsx    # Why choose us section
    ├── Gallery.jsx        # Image gallery
    ├── Reviews.jsx        # Google reviews
    ├── MembershipCTA.jsx  # Membership call-to-action
    └── Contact.jsx        # Contact information
```

## Configuration

- **Tailwind**: `tailwind.config.js` – Custom color scheme and animations
- **Vite**: `vite.config.js` – Build optimization
- **PostCSS**: `postcss.config.js` – Autoprefixer support

## Customization

### Colors

Edit `tailwind.config.js` to modify the brand color scheme:

```javascript
colors: {
  brand: {
    black: '#0a0a0a',
    charcoal: '#1a1a1a',
    accent: '#ff4444',
    // ... more colors
  }
}
```

### Animations

Adjust animation timing in component files using Framer Motion's `transition` prop or modify keyframes in `globals.css`.

### Content

Update gym information in:
- `src/components/Footer.jsx` – Contact details
- `src/sections/Contact.jsx` – Contact form and maps
- `src/sections/Hero.jsx` – Hero messaging

## Performance Optimization

- Images use placeholders with gradients (replace with real gym photos)
- Lazy-loaded sections with Intersection Observer
- GPU-accelerated animations
- Minimal JavaScript bundle
- CSS optimizations with Tailwind's PurgeCSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 La Addiction Fitness Factory. All rights reserved.
# la-addiction-fitness-factory
