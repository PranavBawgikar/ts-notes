<h1>react typescript webpack project</h1>
this project is a minimal setup for a react application using typescript and webpack.

## setup

1. initialize git repository:
   ```bash
   git init
   ```

2. initialize npm project:
   ```bash
   npm init --y
   ```

3. install dependencies:
   ```bash
   npm install react react-dom
   npm install -D typescript @types/react @types/react-dom
   npm install -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
   npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
   npm install -D babel-loader
   ```

## usage
development server:
  ```bash
  npm start
  ```
  this will start the development server.<br />
build:
  ```bash
  npm run build
  ```
  this will create a production-ready build in the `dist` directory.

## project structure
`src/`: this directory contains your react typescript source files.<br />
`webpack.config.js`: configuration for webpack.<br />
`babelrc`: configuration for babel.

## scripts
`start`: start the development server.<br />
`build`: create a production-ready build.
