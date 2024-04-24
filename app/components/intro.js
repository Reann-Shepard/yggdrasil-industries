"use client";

import { useState, useEffect } from "react";
import Quote from "./-data/quote.js";
import ProgressBar from "./-styles/progressBar.jsx";

const Intro = () => {
  const [loadIntro, setLoadIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const timeout = 1000;

  // Set a timeout to hide the intro message and loading message
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Warming up...");
      setLoadIntro(false);
    }, timeout * 5);

    // Set a timeout to hide the loading message after 1 second
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, timeout * 1.5);

    // Clean up the timeout
    return () => {
      clearTimeout(timer);
      clearTimeout(delay);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-1000 bg-black ${
          loadIntro ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        {isLoading ? (
          <div className="mx-auto text-2xl text-center text-white">
            <p>Loading...</p>
            <ProgressBar progressTime={timeout} />
          </div>
        ) : (
          <Quote />
        )}
      </div>
    </div>
  );
};

export default Intro;
