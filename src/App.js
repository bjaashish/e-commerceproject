import "./App.css";
import React from "react";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";

/**
 *  Header
 *    Logo
 *    Nav Items
 *      -Home
 *      - About
 *      - Contact
 *
 * Body
 *    Search
 *    Restaurant Container
 *      Restaurant Cards
 *
 * Footer
 *    Copyright
 *    Links
 *
 */

// Composition --- putting one componnet inside another component

// props

// JSX should have one parent element

// React Fragment

function App() {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
}

export default App;

// Config driven UI
