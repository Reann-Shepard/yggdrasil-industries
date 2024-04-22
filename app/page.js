"use client";

import { useState } from "react";
import Intro from "./components/intro.js";
import NavBar from "./components/navbar.js";
import About from "./components/about.js";

const Page = () => {
  // useState which allows user to switch between different pages from the navbar
  const [activeModule, setActiveModule] = useState("about");

  // set the active module to the clicked module
  const handleSetActiveModule = (module) => {
    setActiveModule(module);
  };

  // Render the active page based on the active module
  const renderActivePage = () => {
    switch (activeModule) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-base-100 h-screen w-screen relative">
      <NavBar setActiveModule={handleSetActiveModule} />
      <div className="overflow-auto max-h-screen">
        <Intro />
        {renderActivePage()}
      </div>
    </div>
  );
};

export default Page;
