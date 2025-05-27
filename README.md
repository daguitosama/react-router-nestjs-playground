# react-router-nest playground

## Getting Started

### Installing

- Clone the repository: `git clone https://github.com/cbnsndwch/react-router-nest.git`
- Navigate to the project directory: `cd react-router-nest`
- Install dependencies: `pnpm i`

### Running in Dev Mode

- Start the server: `cd apps/server && pnpm dev`
- Visit `http://localhost:4003` in your browser to view the application
- Send a GET request to `http://localhost:4003/api/hello` to test the API

### Polotno Playground

See `apps/server/routes/studio/{route,Studio}.tsx` for the initialization of Polotno. After running dev mode you would see an error screen on `http://localhost:4003/studio`: `Error: Cannot find module '../build/Release/canvas.node'`
