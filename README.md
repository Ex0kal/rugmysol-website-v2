# RUGmySOL ($RSOL) Website

A viral memecoin website for the RUGmySOL ($RSOL) project featuring Web3Modal wallet integration and modern animations.

## Features

- 🎨 Modern, meme-inspired design with animations
- 👛 WalletConnect integration using WalletKit
- 🎭 Animated Pepe monkey mascot
- 📱 Fully responsive design
- ⚡ Built with React, TypeScript, and Tailwind CSS

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A WalletConnect Project ID (get one at [WalletConnect Cloud](https://cloud.walletconnect.com/) - choose WalletKit)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rugmysol-website.git
cd rugmysol-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your WalletConnect Project ID:
```
REACT_APP_WALLET_CONNECT_PROJECT_ID=your_project_id_here
```

4. Add your logo and monkey-pepe images to the `public` directory:
- `public/logo.png`
- `public/monkey-pepe.png`

5. Start the development server:
```bash
npm start
```

The website will be available at `http://localhost:3000`.

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be available in the `build` directory.

## Customization

- Update the color scheme in `tailwind.config.js`
- Modify the Web3Modal theme in `App.tsx`
- Update the content and styling in the component files

## Contributing

Feel free to submit issues and pull requests.

## License

MIT License

## Disclaimer

This is a meme project. Please DYOR (Do Your Own Research) and invest responsibly.
