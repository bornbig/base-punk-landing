# BASEDSTR - NFT Dashboard

A modern NFT dashboard built with Next.js 14 App Router, featuring a retro pixel/dot-matrix aesthetic inspired by Based Punks.

## Features

- 🎨 Pixel art aesthetic with Doto font
- 🖼️ NFT gallery grid display
- 📊 Real-time token statistics
- 💼 Holdings tracker
- 🎯 Buying progress indicator
- ❓ FAQ accordion section
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 App Router and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome 6.5
- **Font**: Doto (Google Fonts via next/font)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
punk/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Coming soon page (home)
│   ├── homeback/
│   │   └── page.tsx        # NFT Dashboard
│   └── globals.css         # Global styles
├── old/                    # Old pages router version (backup)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Pages

1. **/** - Coming soon page with animated pixel grid background
2. **/homeback** - Full NFT dashboard with all features

## Key Sections (Dashboard)

1. **Navigation Bar** - Logo, menu items, and wallet connect button
2. **Hero Section** - Main headline with CTA buttons
3. **NFT Gallery** - Grid display of Based Punk NFTs
4. **Token Stats** - Real-time metrics (MCAP, Price, Volume, etc.)
5. **Holdings** - Current ETH and NFT holdings
6. **Buying Progress** - Next purchase target with progress bar
7. **Council Section** - Coming soon feature announcement
8. **FAQ** - Expandable questions and answers

## Customization

### Colors
The design uses a dark theme with these primary colors:
- Background: `#000000` (Black)
- Text: `#FFFFFF` (White)
- Borders: `#1F2937` (Gray-800)
- Accents: Green, Blue, Red for specific stats

### Font
The entire dashboard uses the **Doto** font from Google Fonts via next/font, which provides the dot-matrix/pixel aesthetic.

### Icons
Font Awesome icons are used throughout. You can customize icons by changing the class names:
```html
<i className="fa-solid fa-arrow-up-right-from-square"></i>
```

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this project for your own NFT dashboard!

## Credits

Design inspired by Based Punks NFT collection
Built with ❤️ using Next.js 14 and Tailwind CSS
