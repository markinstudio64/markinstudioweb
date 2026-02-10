# Markin Studio - Branding Agency Website

This is a modern, responsive branding agency website featuring AI automation capabilities and dynamic design elements. The site includes a mobile-friendly navigation with hamburger menu, smooth animations, and optimized layouts for all device sizes.

## Features

- Responsive design with mobile-first approach
- Hamburger menu for mobile navigation
- Smooth animations using Framer Motion
- Modern UI with glassmorphism effects
- Optimized performance
- Interactive elements and hover effects
- Dynamic content sections

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd branding-agency-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5174` (or the port shown in the terminal)

## Available Scripts

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Build the project for production
- `npm run preview` - Locally preview the production build

## Project Structure

```
src/
├── app/
│   ├── components/     # Reusable components
│   │   ├── figma/      # Fallback image component
│   │   └── ui/         # UI components
│   ├── pages/          # Page components
│   └── App.tsx         # Main application component
```

## Deployment

To build the project for production:

```bash
npm run build
```

This will create a `dist/` folder with the optimized production build. You can deploy this folder to any static hosting service.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- Lucide React Icons

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.