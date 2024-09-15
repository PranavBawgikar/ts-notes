<h1 align="center">React TypeScript Webpack Project</h1>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

---
This project is a minimal setup for a React application using TypeScript and Webpack.

## Setup

1. **Initialize Git Repository:**
   ```bash
   git init
   ```

2. **Initialize NPM Project:**
   ```bash
   npm init --y
   ```

3. **Install Dependencies:**
   ```bash
   npm install react react-dom
   npm install -D typescript @types/react @types/react-dom
   npm install -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
   npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
   npm install -D babel-loader
   ```

## Usage

- **Development Server:**
  ```bash
  npm start
  ```
  This will start the development server.

- **Build:**
  ```bash
  npm run build
  ```
  This will create a production-ready build in the `dist` directory.

## Project Structure

- **src/:**
  This directory contains your React TypeScript source files.

- **webpack.config.js:**
  Configuration for Webpack.

- **.babelrc:**
  Configuration for Babel.

## Scripts

- **start:**
  Start the development server.

- **build:**
  Create a production-ready build.
