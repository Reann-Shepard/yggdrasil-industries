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
        <div className="mx-auto max-w-[60%] text-2xl text-center text-base-content">
          <p>Loading...</p>
          <ProgressBar progressTime={timeout} />
        </div>
      ) : (
        quote && (
          // <div className="bg-slate-600 w-[60%] mx-auto rounded-md border-2 text-base-content">
          //   <div className="flex flex-row text-xs pt-2">
          //     <p className="mx-auto max-w-[80%] flex-row italic pt-2">
          //       Quotes from my related works:
          //     </p>
          //     <button
          //       class="daisy-btn daisy-rounded-btn mr-2 p-1"
          //       onClick={() => {
          //         setTrigger(!trigger);
          //       }}
          //     >
          //       Generate New Quote
          //     </button>
          //   </div>
          //   <h1 className="text-4xl text-center pb-4">{quote.subject}</h1>
          //   <div className="flex flex-row mx-auto max-w-[80%]">
          //     <div className="max-w-[80%] text-right">
          //       <p className="text-lg text-left italic">{quote.body}</p>
          //       <p className="text-sm text-gray-400 mt-4">
          //         Source: {quote.source}, {quote.sourceType}
          //       </p>
          //       {quote.pageNumber && (
          //         <p className="text-sm text-gray-400">
          //           Page: {quote.pageNumber}
          //         </p>
          //       )}
          //     </div>
          //     <img
          //       src={quote.image}
          //       alt="Quote Image"
          //       className="mt-4 ml-8"
          //       style={{ width: "64px", height: "64px" }}
          //     />
          //   </div>
          // </div>
          <div className="daisy-card daisy-card-side daisy-card-bordered bg-base-200 text-base-content shadow-xl w-[60%] mx-auto">
            <div className="daisy-card-body w-[80%] ml-4">
              <div className="daisy-card-actions">
                <button
                  class="daisy-btn daisy-rounded-btn daisy-btn-secondary ml-auto mr-28"
                  onClick={() => {
                    setTrigger(!trigger);
                  }}
                >
                  Generate New Quote
                </button>
              </div>
              <p className="text-xs text-accent italic absolute">
                Quotes from my related works:
              </p>
              <h2 className="daisy-card-title uppercase">{quote.subject}</h2>
              <blockquote className="w-[80%] mx-auto bg-neutral p-4">
                <p className="">{quote.body}</p>
              </blockquote>
              <p className="text-sm text-gray-400 mt-8 absolute">
                Source: {quote.source}, {quote.sourceType}
              </p>
              {quote.pageNumber && (
                <p className="text-sm text-accent ml-auto mr-32">
                  Page: {quote.pageNumber}
                </p>
              )}
            </div>
            <figure>
              <img
                src={quote.image}
                alt="Quote Image"
                className="my-auto mr-8 bg-neutral p-4"
              />
            </figure>
          </div>
        )
      )}
    </div>
  );
};

export default Quote;
