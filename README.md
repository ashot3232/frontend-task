# Frontend-task

## Overview

This project is a Single Page Application (SPA) built with React and TypeScript. The application has a Home page that contains notes list, a User List page with sorting and pagination, and a User Details page.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Features](#features)
- [Tools and Libraries Used](#tools-and-libraries-used)
- [Design Decisions](#design-decisions)

## Requirements

### Node.js

Before you begin, ensure you have Node.js installed on your machine. This project was developed using Node.js version `18.x`, although it should be compatible with other versions as well.

To check if you have Node.js installed, run the following command in your terminal:

```bash
node -v
```

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/ashot3232/frontend-task.git
   ```
2. Navigate into the project directory:
   ```sh
   cd frontend-task
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project

Run the following command to start the development server:

```sh
npm start
```

## Features

### External API - JSON Server

- The application utilizes JSON Server as an external API for mock database functionalities. This enables fetching, adding, and deleting notes in the Home page and managing user data for the User List and User Details pages.

### SPA with 3 Routes

#### Home Page

- The Home page displays notes list fetched from JSON Server API.
- Users can add and delete them

#### User List Page

- Displays a list of users fetched from the JSON Server API, with columns for Name, Email, Age, and Actions.
- **Pagination, Sorting, and Search**: These features were implemented using frontend logic and do not involve the API. In a real-world application, these functionalities are generally handled server-side.

#### User Details Page

- displays user information of a selected user from the JSON Server API, including dummy Profile Picture.

### Page Transition Animations

- The application features smooth page transitions using the `framer-motion` library. This enhances user experience by providing visual continuity as users navigate through the app.

## Tools and Libraries Used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Below is a list of some of the main tools, libraries, and frameworks used in this project:

### Core

- **React**: UI library
- **TypeScript**: Static type checker
- **React Router**: For SPA routing

### State Management

- **Redux Toolkit**: For robust state management

### Styling

- **Styled-components**: For component-level styling

### Animation

- **Framer-motion**: For smooth page transitions

### API

- **JSON Server**: Used as a mock backend API

### Other Utilities

- **ESLint**: For enforcing code quality
- **Prettier**: For code formatting
- **husky and lint stage**: For pre-commit hook
-

## Design Decisions

### State Management

Redux Toolkit was chosen as the state management solution, complemented by Redux Thunk for handling asynchronous actions. This decision was driven by several factors:

1. **Simplicity and Developer Experience**: Redux Toolkit simplifies a lot of Redux's boilerplate, offering a set of utilities that streamline the experience of setting up and using Redux.

2. **Scalability**: While the Context API or even vanilla React state management could handle this project's size, Redux offers scalability that would make it easier to grow the project in the future.

3. **Community and Ecosystem**: Redux has a large ecosystem, making it easy to find resources, tutorials, and solutions for common challenges. This also makes it a safe choice for long-term projects.

### TypeScript

The application is entirely written in TypeScript to enforce type safety, and enhance the developer experience.

### Styling

Styled-components were used for all styling needs. This CSS-in-JS library allows for dynamic and scoped styling, making it easier to implement the theme switcher and ensuring isolated, reusable components. This approach also keeps the styles closely tied to the components, making the codebase easier to manage and more maintainable.
