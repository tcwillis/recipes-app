## What's Done

- App bootstrapped with [Create React App].
- Added [React Bootstrap] library for basic UI components
- Added basic node backend to handle API requests and used proxy config to direct requests from front-end to back-end
- Added base folder in jsconfig.json for cleaner imports
- Applied custom middleware to handle api actions for easier maintenance and reusability
- Added basic loader for while data is being fetched
- Assumed redux is source of truth for recipe data, rather than cache (e.g. redis)
- Check redux state before calling fetch
- Added enzyme for shallow rendering unit tests
- Added several views (Home, RecipesList, Recipe) to demonstrate routing
- Separated app setup and config into separate folder
- Applied composable connector to easily map state and dispatch to any component
- Added mock data as json

## What's for Future

- Consider ejecting [Create React App] for greater control over Webpack configuration, linting, etc
- Ditch [React Bootstrap] and re-write UI components as a sepearate repo
- Define a theme in the component library that can be applied to the application (e.g. styled-components, theme provider)
- Define appropriate breakpoints in theme for mobile, tablet, desktop, etc
- Update middleware to handle checking redux state for data before dispatch
- Fetching HOC to have reusable loader while data is being fetched
- Implement [jest-fetch-mock] to mock all fetches
- Add logger middleware
- Unit tests for apiActions and transform
- Enhance middleware to handle getState
- Consider better use of transform utility to handle different types of data
- Consider better mocking (e.g mountebank or similar)

## To start the app

In the project directory, run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To test

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
