"use client";

import { useState, useEffect } from "react";
import data from "./quotes.json";

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [trigger, setTrigger] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const timeout = 10;

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
        <div className="mx-auto max-w-[60%] text-xs text-center text-white">
          <p>Loading...</p>
        </div>
      ) : (
        quote && (
          <div className="daisy-card daisy-card-side daisy-card-bordered bg-base-200 rounded-lg text-base-content shadow-xl w-[60%] mx-auto">
            <div className="daisy-card-body w-[80%] ml-4">
              <div className="daisy-card-actions">
                <button
                  class="daisy-btn daisy-rounded-btn daisy-btn-base-200 border-accent ml-auto mr-28"
                  onClick={() => {
                    setTrigger(!trigger);
                  }}
                >
                  Generate New Quote
                </button>
              </div>
              <p className="text-xs text-secondary italic absolute">
                Quotes from my related works:
              </p>
              <h2 className="daisy-card-title uppercase">{quote.subject}</h2>
              <blockquote className="w-[80%] mx-auto bg-base-300 text-justify p-4">
                <p>&quot;{quote.body}&quot;</p>
              </blockquote>
              <p className="text-sm text-base-content mt-8 absolute">
                Source: {quote.source}, {quote.sourceType}
              </p>
              {quote.pageNumber && (
                <p className="text-sm italic ml-auto mr-32">
                  Page: {quote.pageNumber}
                </p>
              )}
            </div>
            <figure>
              <img
                src={quote.image}
                alt="Quote Image"
                className="mb-auto mt-16 mr-8 p-4 rounded-sm w-32 h-32"
              />
            </figure>
          </div>
        )
      )}
    </div>
  );
};

export default Quote;
