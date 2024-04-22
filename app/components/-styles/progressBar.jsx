import { useEffect, useState } from "react";

const BlockProgressBar = ({ progressTime }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 16) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, progressTime / 16);

    return () => clearInterval(interval);
  }, [progressTime, progress]);

  return (
    <div className="block-progress-bar mx-auto h-8 max-w-[50%] bg-slate-200 rounded-sm">
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            width: "16px", // Adjust the width of each block as needed
            height: "16px", // Adjust the height of each block as needed
            backgroundColor: index < progress ? "blue" : "transparent", // Set the color of filled and unfilled blocks
            marginRight: "2px", // Adjust the spacing between blocks as needed
          }}
        ></div>
      ))}
    </div>
  );
};

export default BlockProgressBar;
