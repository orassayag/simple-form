# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application will open automatically in your browser at `http://localhost:3000`.

## Configuration

### SendGrid API Configuration

1. Open `src/settings/settings.development.json` or `src/settings/settings.production.json`
2. Add your SendGrid API key:
   ```json
   {
     "sandgrid_api_key": "your-sendgrid-api-key"
   }
   ```

**Note:** SendGrid email sending won't work from the frontend due to CORS restrictions. This would require a backend server. See [SendGrid CORS Documentation](https://sendgrid.com/docs/for-developers/sending-email/cors) for details.

### Environment Settings

The application uses different configuration files based on the environment:
- `settings.development.json` - Used during development (`npm start`)
- `settings.production.json` - Used for production builds (`npm run build`)

## Running Scripts

### Start Development Server
Runs the app in development mode with hot reloading:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production
Creates an optimized production build:
```bash
npm run build
```
The build output will be placed in the `build/` directory.

### Run Tests
Launches the test runner in interactive watch mode:
```bash
npm test
```

## Form Validation Rules

### First Name & Last Name
- Required field
- Must contain only English letters (A-Z, a-z)
- Minimum length: 2 characters

### Email
- Required field
- Must be a valid email format (e.g., user@example.com)

### Phone
- Required field
- Must contain only digits (0-9)
- Exact length: 10 digits

## Project Structure

```
simple-form/
├── public/             # Static assets and HTML template
│   ├── index.html     # Main HTML file
│   └── assets/        # CSS libraries and fonts
├── src/
│   ├── components/    # Reusable UI components
│   │   ├── JonesForm/ # Form-specific components
│   │   └── UI/        # Generic UI elements
│   ├── containers/    # Container components with state
│   │   ├── App/       # Main app container
│   │   └── JonesForm/ # Form container with logic
│   ├── hoc/           # Higher-Order Components
│   ├── models/        # Data models
│   ├── settings/      # Configuration files
│   ├── translate/     # Translation/text files
│   ├── utils/         # Utility functions
│   └── index.jsx      # Application entry point
├── config/            # Webpack and build configuration
├── scripts/           # Build and development scripts
└── package.json
```

## Component Architecture

### Container Components
- `JonesForm` - Main form container with state management and validation logic
- `App` - Root application container with routing

### Presentational Components
- `Form` - Renders the form layout and fields
- `FieldBox` - Individual form field with label and error display
- `TextBox` - Input element wrapper
- `SubmitButton` - Form submission button
- `ErrorBox` - Error and success message display
- `Loader` - Loading spinner component
- `PageTitle` - Page header component

### Higher-Order Components
- `Layout` - Main layout wrapper
- `Auxiliary` - Fragment wrapper for multiple elements

## Utilities

### Validation Utils (`src/utils/validationUtils.js`)
- Email validation with regex
- Character-only validation
- Digit-only validation
- Length validation (minimum and exact)
- Lead data validation

### Core Utils (`src/utils/coreUtils.js`)
- Environment detection
- SendGrid email sending (with CORS limitations)

### Lead Utils (`src/utils/leadUtils.js`)
- Create lead fields array
- Reset array values

### Text Utils (`src/utils/textUtils.js`)
- Text manipulation helpers

## Translation System

All user-facing text is stored in `src/translate/translate.en.json`. To add new text:

1. Add entry to translation file:
   ```json
   "component_element_purpose": "Your text here"
   ```

2. Import and use in component:
   ```javascript
   import translate from '../../translate/translate';
   
   <span>{translate.component_element_purpose}</span>
   ```

## Development Notes

- The form validates one field at a time (sequential validation)
- Multiple validation errors are not displayed simultaneously
- Email sending is simulated with a 2-second timeout due to CORS restrictions
- The application includes a service worker for PWA capabilities
- Bootstrap is used for responsive grid layout
- Font Awesome and Glyphicons are available for icons

## Browser Support

The application supports:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Browser market share > 0.2%
- Excludes IE11 and Opera Mini

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
