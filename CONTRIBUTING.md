# Prerequisites
[Node.js](https://nodejs.org/en) v21.6.1 or later is required, lib is untested on any other versions.

## Installation
- `npm install`: running this command in the projects root directory will install everything you need.

### Demo Server
- `npm start`: running this command will run a development server with a demo of the component at [localhost:3000](http://localhost:3000) with hot reloading.

### Running Tests
- `npm run test`: will run all tests once.
- `npm run test:coverage`: will run all tests and produce a coverage report in `/coverage/`
- `npm run test:watch`: will run all tests on every change.

### Building
- `npm run build`: will build the component for publishing to npm and the demo app.
- `npm run clean`: will delete all of the built resources (useful before rebuilds).