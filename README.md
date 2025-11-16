# NASA Astronomy Picture of the Day (APOD) Viewer

A beautiful web application to view and browse NASA's Astronomy Picture of the Day images, built with SvelteKit.

## Project History

- **Original Creation Date**: May 16, 2021
- **Major Upgrade Date**: November 15, 2024 (upgraded to Svelte 5 and SvelteKit 2)
  - Migrated from Svelte 3.44.2 to Svelte 5.0.0
  - Upgraded from SvelteKit 1.0.0-next.201 to SvelteKit 2.0.0
  - Updated all code patterns to use modern Svelte 5 runes and SvelteKit 2 conventions
  - Fixed bugs and improved code quality
- **CSS Framework Migration**: November 2024
  - Migrated from Bulma CSS framework to Tailwind CSS with DaisyUI
  - Replaced all Bulma classes with Tailwind utility classes and DaisyUI components
  - Removed SCSS dependencies and simplified build configuration

## Features

- **View NASA's Astronomy Picture of the Day (APOD)** - Display today's featured image or video
- **Date Navigation** - Navigate through previous and next days' images with intuitive controls
- **Date Picker Modal** - Choose any date from the APOD archive (since 1995) using a convenient date picker
- **Query Parameter Navigation** - Shareable URLs using `?date=YYYY-MM-DD` format
- **Image & Video Support** - Seamlessly displays both images and videos (with thumbnail previews for videos)
- **Responsive Design** - Fully responsive layout that works beautifully on mobile, tablet, and desktop
- **Modern UI** - Built with Tailwind CSS and DaisyUI components for a clean, modern interface
- **Dark Theme Support** - Automatic dark theme support via DaisyUI
- **Copyright Information** - Displays image copyright and attribution information
- **Loading States** - Smooth loading indicators while fetching data
- **Accessibility** - ARIA labels and semantic HTML for better accessibility

## Technology Stack

- **Svelte 5** - Modern reactive framework with runes (`$state`, `$derived`, `$props`)
- **SvelteKit 2** - Full-stack framework for Svelte with server-side rendering
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **DaisyUI 5** - Component library for Tailwind CSS (cards, modals, buttons, navbar)
- **date-fns 4** - Date utility library for date manipulation and formatting
- **Font Awesome** - Icon library (via CDN)
- **Vite 5** - Build tool and dev server
- **Vercel Adapter** - Deployment adapter for Vercel hosting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NASAImagesApp-sveltekit-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Main layout component (includes Nav and Footer)
│   ├── +page.server.js         # Server-side data loading for home page
│   ├── +page.svelte            # Home page component with image viewer and date navigation
│   ├── [date]/                 # Legacy route redirect (redirects to query parameter format)
│   │   ├── +page.server.js     # Redirect handler for old URL format
│   │   └── +page.svelte        # Placeholder (redirects immediately)
│   ├── about/                  # About page
│   │   └── +page.svelte
│   ├── api/                    # API proxy routes
│   │   ├── +server.js          # Main API endpoint (handles date query parameter)
│   │   ├── previousDay/        # Previous day endpoint
│   │   │   └── +server.js
│   │   └── [previous]/         # Dynamic date endpoint
│   │       └── +server.js
│   ├── components/             # Reusable components
│   │   ├── Nav.svelte          # Top navigation bar with branding
│   │   ├── Footer.svelte       # Footer component
│   │   └── dateDecrementer.svelte  # Date navigation component (legacy)
│   └── stores.js               # Svelte stores for state management (todaysDate, etc.)
├── app.html                    # HTML template
└── app.css                     # Global styles (Tailwind CSS imports)
```

## API Integration

The application uses NASA's APOD (Astronomy Picture of the Day) API:
- **Base URL**: `https://api.nasa.gov/planetary/apod`
- **API Key**: Currently hardcoded in `src/routes/api/+server.js`
- **Query Parameters**: 
  - `date` - Date in YYYY-MM-DD format (defaults to today)
  - `thumbs=true` - Returns thumbnail URL for videos
- **Note**: For production, consider moving the API key to environment variables

### Navigation System

The app uses query parameters for date navigation:
- Home page: `/` (shows today's image)
- Specific date: `/?date=2024-01-15`
- Legacy route support: `/2024-01-15` automatically redirects to `/?date=2024-01-15`

The main page includes:
- **Previous/Next buttons** - Navigate one day at a time
- **Current Date button** - Jump back to today's image
- **Date Picker** - Modal dialog to select any date from the APOD archive

## Migration Notes (November 2024)

### Svelte 5 Migration
- Converted components to use Svelte 5 runes:
  - `$state` - For reactive state (e.g., `datePickerOpen`, `selectedDate`)
  - `$derived` - For computed values (e.g., `currentDate`, `previousDate`, `nextDate`)
  - `$props` - For component props (e.g., `props.data`)
- Removed manual store subscriptions in favor of reactive runes
- Updated component patterns to use modern Svelte 5 syntax
- Leveraged `$derived.by()` for complex reactive computations

### SvelteKit 2 Migration
- Migrated from `load` functions in `<script context="module">` to `+page.server.js` files
- Converted API routes from `get()` handlers to `GET()` handlers in `+server.js` files
- Updated route structure to use new SvelteKit 2 conventions:
  - `__layout.svelte` → `+layout.svelte`
  - `about.svelte` → `about/+page.svelte`
  - `[previous].svelte` → `[date]/+page.svelte` (with redirect to query parameter format)
- Removed deprecated `target: '#svelte'` from `svelte.config.js`
- Updated `app.html` to use new SvelteKit placeholders
- Implemented query parameter-based navigation instead of route-based navigation

### CSS Framework Migration (Tailwind CSS + DaisyUI)
- Migrated from Bulma CSS framework to Tailwind CSS 3.4 with DaisyUI 5
- Replaced all Bulma classes with Tailwind utility classes:
  - **Navigation**: Converted to DaisyUI navbar component with responsive design
  - **Footer**: Converted to DaisyUI footer component
  - **Cards**: Using DaisyUI card components for image display and content sections
  - **Buttons**: Using DaisyUI button classes with responsive sizing (`btn-xs`, `btn-sm`, `btn-md`, `btn-lg`)
  - **Modal**: Using DaisyUI modal component for date picker
  - **Layout**: Using Tailwind flexbox and grid utilities for responsive layouts
- Removed SCSS dependencies (`sass`, `bulma`, `bulma-social`)
- Configured PostCSS directly in `vite.config.js` (no separate config file needed)
- Added Font Awesome CDN for icons (meteor, GitHub icons)
- Implemented dark theme using DaisyUI's theme system (`bg-base-300`, `text-base-content`)
- All custom CSS replaced with Tailwind utility classes
- Responsive design with mobile-first approach (using `sm:`, `md:`, `lg:` breakpoints)

### Bug Fixes
- Fixed assignment operator bug (`=` to `===`) in date comparison
- Fixed missing imports in `dateDecrementer.svelte`
- Fixed undefined variable declarations in API routes
- Improved error handling and data validation

### Dependency Updates
- Updated all dependencies to latest compatible versions
- Removed deprecated packages (`node-sass`, `svelte-preprocess`, `bulma`, `bulma-social`)
- Added Tailwind CSS 3.4 and DaisyUI for styling
- Added `@sveltejs/vite-plugin-svelte` for Vite integration
- Updated `date-fns` from v2 to v4

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run Svelte type checking in watch mode

## Deployment

This project is configured for deployment on Vercel using the `@sveltejs/adapter-vercel` adapter.

## License

See `src/assets/NASA-ImageViewerApp_mit-license.md` for license information.

## Credits

- **Original Creator**: Wesley Randolph @ RanDev.Co
- **NASA APOD API**: Provided by NASA
- Built with Svelte and SvelteKit

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
