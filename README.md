# React Context API Demo

A clean, responsive React application demonstrating global state management using the **React Context API**. This project illustrates how to effectively avoid "prop drilling" by managing state at the top level and consuming it directly inside nested child components.

##  Features

* **Global State Management:** Uses `createContext` and `useContext` to manage a global counter.
* **No Prop Drilling:** The `Card` component remains a pure UI component, unaware of the counting logic, while the deeply nested `Button` interacts directly with the global state.
* **Component-Based Architecture:** Clean separation of concerns across `App`, `Card`, and `Button` components.
* **Responsive Design:** A mobile-first CSS approach using Flexbox, media queries, and modern hover/active states.

##  Project Structure

```text
src/
├── component/
│   ├── card/
│   │   └── Card.jsx       # Presentational component for user details
│   └── button/
│       └── Button.jsx     # Consumer component that updates global state
├── App.jsx                # Main container and Context Provider
├── App.css                # Global styles and responsive layouts
├── Context.js             # Context initialization
└── main.jsx               # React entry point
