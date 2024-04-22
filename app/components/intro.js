"use client";

import { useState, useEffect } from "react";
import Quote from "./-data/quote.js";

const Intro = () => {
  const [loadIntro, setLoadIntro] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the intro message after 5 seconds
    const timer = setTimeout(() => {
      console.log("Warming up...");
      setLoadIntro(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-1000 bg-black ${
          loadIntro ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        <Quote />
      </div>
    </div>
  );
};

export default Intro;
