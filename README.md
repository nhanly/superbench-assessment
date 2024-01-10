# SuperbenchAssessment

## Description

This application is built with Angular version 17.0.8 utilizing Firebase Auth service and realtime Database.

## Features

- Login page
- Realtime chat between 2 authenticated users

## Technology

- [Angular](https://angular.dev/) Main UI framework for building scalable web application
- [Angular-Fire](https://github.com/angular/angularfire/tree/master) Utilize auth and realtime database features for authentication and realtime chat
- [TailwindCSS](https://tailwindcss.com/) Main CSS framework
- [PrimeNG](https://primeng.org/) UI lib for reusable components
- [Ngx-signal-state](https://github.com/simplifiedcourses/ngx-signal-state) Simple state management package utilize signals api
- [Vitest](https://vitest.dev/) Super fast Unit testing framework

## Documentations

- [Project Structure](docs/folder-structure.md)

## Getting Started

### Prerequisites

- Install node latest LTS version
  <https://nodejs.org/en/download/>

- Install yarn

  ```sh
  npm install --g yarn
  ```

### Installation

1. Clone the repo

   ```sh
   git clone git@github.com:nhanly/superbench-assessment.git
   ```

2. Install NPM packages with yarn

   ```sh
   yarn install
   ```

3. Run the development server:

   ```bash
   yarn start
   ```

4. Open [http://localhost:4200](http://localhost:4200) with your browser to see the result.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/{project_name}/` directory.

## Running unit tests

Run `yarn test` to execute the unit tests via [Vitest](https://vitest.dev/)
