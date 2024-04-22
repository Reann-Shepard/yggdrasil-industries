"use client";

import { useState, useEffect } from "react";
import data from "./quotes.json";
import ProgressBar from "../-styles/progressBar.jsx";

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [trigger, setTrigger] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const timeout = 1000;

  useEffect(() => {
    // Simulate loading delay for debug purposes
    const delay = setTimeout(() => {
      // Randomly select a quote from the quotes.json file
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex]);
      setIsLoading(false);
    }, timeout);

    // Clean up the timeout
    return () => clearTimeout(delay);
  }, []);

  // Function called whenever the user wishes to generate a new quote
  // Make sure it doesn't call the same quote twice in a row
  useEffect(() => {
    // Create a temporary boolean to ensure the quote is different
    let isDifferent = false;
    while (!isDifferent) {
      // Randomly select a quote from the quotes.json file
      const randomIndex = Math.floor(Math.random() * data.length);
      if (quote !== data[randomIndex]) {
        setQuote(data[randomIndex]);
        isDifferent = true;
      }
    }
  }, [trigger]);

  return (
    <div className="relative">
      {isLoading ? (
        <div className="mx-auto max-w-[60%] text-2xl text-center">
          <p>Loading...</p>
          <ProgressBar progressTime={timeout} />
        </div>
      ) : (
        quote && (
          <div className="bg-slate-600 w-[60%] mx-auto rounded-md border-2 ">
            <div className="flex flex-row text-xs pt-2">
              <p className="mx-auto max-w-[80%] flex-row italic pt-2">
                Quotes from my related works:
              </p>
              <button
                class="daisy-btn daisy-rounded-btn mr-2 p-1"
                onClick={() => {
                  setTrigger(!trigger);
                }}
              >
                Generate New Quote
              </button>
            </div>
            <h1 className="text-4xl text-center pb-4">{quote.subject}</h1>
            <div className="flex flex-row mx-auto max-w-[80%]">
              <div className="max-w-[80%] text-right">
                <p className="text-lg text-left italic">{quote.body}</p>
                <p className="text-sm text-gray-400 mt-4">
                  Source: {quote.source}, {quote.sourceType}
                </p>
                {quote.pageNumber && (
                  <p className="text-sm text-gray-400">
                    Page: {quote.pageNumber}
                  </p>
                )}
              </div>
              <img
                src={quote.image}
                alt="Quote Image"
                className="mt-4 ml-8"
                style={{ width: "64px", height: "64px" }}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Quote;
