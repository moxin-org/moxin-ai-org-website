# Moxin-Org Astro Site

Enterprise AI Solution Platform built with Astro, Tailwind CSS, and interactive visualizations.

## 🚀 Features

- **Static Site Generation**: Blazing-fast performance with Astro
- **Tailwind CSS**: Utility-first styling with custom theme
- **Interactive Charts**: ECharts.js visualizations
- **Animations**: Anime.js and Matter.js physics
- **Responsive Design**: Mobile-first approach
- **Component Architecture**: Reusable Astro components

## 📁 Project Structure

```
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # Route pages
│   │   └── index.astro
│   └── styles/         # Global styles
│       └── global.css
├── public/             # Static assets
│   └── resources/
├── astro.config.mjs    # Astro configuration
├── tailwind.config.cjs # Tailwind theme
└── package.json
```

## 🛠 Development

### Prerequisites

- Node.js 18+ or 20+
- npm or pnpm

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build for Production

```bash
npm run build
```

The built site will be in `./dist/`

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors

- **Primary Navy**: `#1a1d29` - Main background
- **Accent Blue**: `#3b82f6` - Primary actions
- **Accent Purple**: `#8b5cf6` - Secondary accents
- **Text Primary**: `#ffffff` - Main text
- **Text Secondary**: `#94a3b8` - Secondary text
- **Border**: `#334155` - Border color

### Fonts

- **Inter**: Primary font family
- **JetBrains Mono**: Code/monospace
- **Poppins**: Headings

### Components

#### Header
- Fixed position with backdrop blur
- Glassmorphism effect
- Navigation links with hover states

#### Cards
- Hover effects: translateY + scale + shadow
- Gradients for category styling
- Smooth transitions

#### Buttons
- Primary: Gradient background (blue → purple)
- Secondary: Border with hover fill
- Hover: Scale transform

## 📊 Interactive Features

### Performance Counters
Animated number counting on page load using custom JavaScript.

### Floating Particles
CSS-animated particles in hero section with keyframe animations.

### Card Hover Effects
3D transform effects on hover with Tailwind transitions.

### Charts
ECharts.js visualizations for:
- System architecture diagrams
- Performance benchmarks
- Interactive data visualizations

## 📝 Content Pages

- `/` - Home page
- `/solutions/` - Platform solutions
- `/services/` - Professional services
- `/developer/` - Developer resources

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📦 External Libraries (CDN)

- **Anime.js**: 3.2.1 - Animations
- **ECharts.js**: 5.4.3 - Charts
- **Matter.js**: 0.19.0 - Physics
- **Splitting.js**: 1.0.6 - Text effects
- **Google Fonts**: Inter, JetBrains Mono, Poppins

## 🚢 Deployment

Deploy the `dist/` folder to any static hosting:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Traditional web server

## 🔄 Migration from Static HTML

The original static HTML files are preserved for reference:
- `index.html` → `/src/pages/index.astro`
- `solutions.html` → `/src/pages/solutions.astro` (pending)
- `services.html` → `/src/pages/services.astro` (pending)
- `developer.html` → `/src/pages/developer.astro` (pending)

## 📝 TODO

See [PORTING_SUMMARY.md](./PORTING_SUMMARY.md) for detailed completion status.

## 🔧 Configuration

### Astro

Edit `astro.config.mjs` to modify site settings, integrations, or build options.

### Tailwind

Edit `tailwind.config.cjs` to update colors, fonts, or add custom utilities.

## 📄 License

Open source, part of the Moxin-Org project.

## 🤝 Contributing

This is a static site representing the Moxin-Org enterprise AI platform. Content updates should reflect changes to the underlying platform architecture.

## 📞 Support

For issues related to the website structure or Astro implementation, refer to Astro documentation: https://docs.astro.build
