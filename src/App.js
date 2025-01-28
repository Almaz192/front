import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
    return (
        <div className="app-container">
            <Header />
            <HeroSection />
        </div>
    );
}

export default App;
