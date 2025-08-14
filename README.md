# Metropolitan Museum of Art Collection Explorer

A React application with Redux that displays data from the Metropolitan Museum of Art's public API. Explore over 400,000 artworks from the Met's collection with advanced search capabilities.

## Features

- **Search Interface**: Search artworks by keyword, department, and various filters
- **Department Filtering**: Browse by specific museum departments
- **Highlight Filter**: View only museum highlights
- **Image Filter**: Show only artworks with images
- **Detailed View**: Click on any artwork to see detailed information
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- **React 18** - Modern React with TypeScript
- **Redux Toolkit** - State management with RTK Query for API calls
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe development
- **Metropolitan Museum API** - Public API for artwork data

## API Integration

This app integrates with the [Metropolitan Museum of Art Collection API](https://metmuseum.github.io/):

- **Search Endpoint**: `/public/collection/v1/search` - Search for artworks
- **Object Endpoint**: `/public/collection/v1/objects/{objectID}` - Get detailed artwork information
- **Departments Endpoint**: `/public/collection/v1/departments` - Get all museum departments

## Project Structure

```
src/
├── components/          # React components
│   ├── SearchForm.tsx   # Search interface
│   ├── SearchResults.tsx# Results display
│   └── ObjectDetail.tsx # Detailed artwork view
├── services/            # API integration
│   └── metMuseumApi.ts  # RTK Query API service
├── types/              # TypeScript type definitions
│   └── index.ts        # API response types
├── store.ts            # Redux store configuration
├── App.tsx             # Main application component
└── App.css             # Application styles
```

## Getting Started

### Prerequisites

- **Node.js 18+** (This project requires a modern Node.js version)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the app

### Build for Production

```bash
npm run build
```

## Usage

1. **Search**: Enter keywords in the search box to find artworks
2. **Filter**: Use the department dropdown to narrow results by museum department
3. **Options**:
   - Check "Highlights only" to see curated museum highlights
   - Check "With images" to show only artworks with available images
4. **Explore**: Click on any artwork card to view detailed information
5. **Details**: In the detail view, you can see comprehensive information about the artwork and access the original Met Museum page

## Node.js Version Requirements

⚠️ **Important**: This project requires Node.js version 18+ due to dependencies:

- Vite 7.1.2 requires Node.js ^20.19.0 || >=22.12.0
- Various ESLint and TypeScript packages require Node.js ^18.18.0 || ^20.9.0 || >=21.1.0

If you encounter errors during development or build, please ensure you're using a compatible Node.js version.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Metropolitan Museum of Art](https://www.metmuseum.org/) for providing the public API
- [React](https://reactjs.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) communities
- [Vite](https://vitejs.dev/) for the excellent development experience
