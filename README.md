<a href="https://engine-calc-id.vercel.app/">
  <img alt="Engine Calculator ID - Professional Automotive Engineering Calculator" src="https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/logo.png">
  <h1 align="center">Engine Calculator ID</h1>
</a>

<p align="center">
 Professional automotive engineering calculations for mechanics and enthusiasts
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#technologies"><strong>Technologies</strong></a> ·
  <a href="#calculators"><strong>Calculators</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#deployment"><strong>Deployment</strong></a>
</p>
<br/>

## Features

- **Comprehensive Engine Calculations** - Professional-grade calculators for automotive engineering
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Intuitive Navigation** - Clean sidebar navigation with mobile-friendly overlay menus
- **User Authentication** - Secure authentication powered by Supabase
- **Dark/Light Theme** - Support for both light and dark color schemes
- **Modern UI Components** - Beautiful UI built with shadcn/ui and Tailwind CSS
- **Real-time Calculations** - Instant results as you input parameters
- **Persistent Sessions** - Remembers your login and preferences

## Demo

You can view a fully working demo at [engine-calc-id.vercel.app](https://engine-calc-id.vercel.app/).

## Technologies

- [Next.js 14+](https://nextjs.org/) - React framework with App Router
- [Supabase](https://supabase.com/) - Backend-as-a-Service for authentication and database
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for better developer experience
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit

## Calculators

### Engine Calculators
- **Engine Displacement** - Calculate engine displacement based on bore, stroke, and cylinder count
- **Valve Size** - Determine optimal intake and exhaust valve sizes
- **Compression Ratio** - Calculate compression ratio using combustion chamber volume
- **Carburetor Size** - Determine the recommended carburetor size in CFM
- **Fuel Ratio** - Calculate air-fuel ratios for optimal performance
- **Ignition Timing** - Determine optimal ignition timing settings

### Wheel & Gear Calculators
- **Gear Ratio** - Calculate gear ratios for differentials and transmissions
- **Tire Size** - Compare tire sizes and their effect on speedometer readings
- **Speed Calculator** - Determine vehicle speed based on RPM and gear ratios

### Performance Calculators
- **Horsepower** - Calculate horsepower from torque and RPM
- **Torque** - Calculate torque from horsepower and RPM
- **Power-to-Weight** - Determine power-to-weight ratios for performance comparisons

### Maintenance Calculators
- **Oil Change** - Track oil change intervals and maintenance schedules
- **Service Intervals** - Calculate service intervals based on usage patterns

## Getting Started

### Prerequisites

1. Node.js 18+
2. A Supabase project (create one at [Supabase Dashboard](https://database.new))

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/efzynx/engine-calc-id-v2.git
   cd engine-calc-id
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fefzynx%2Fengine-calc-id-v2)

### Other Hosting Options

You can also deploy your app to any static hosting service that supports Next.js:

- Netlify
- Cloudflare Pages
- Firebase Hosting
- AWS Amplify

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
