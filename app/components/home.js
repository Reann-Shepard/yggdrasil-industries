"use client";

import Quest from "./-data/quest.js";

const Home = () => {
  return (
    <div className="mx-auto text-center pt-32 text-base-content">
      <h1 className="text-4xl font-bold text-primary">
        Welcome to the Frontier
      </h1>
      <h2 className="text-2xl italic pt-4 text-secondary pb-4">
        Crafting Worlds, One Line at a Time
      </h2>
      <div className="flex flex-row mx-auto w-[60%]">
        <p className="text-lg pt-8 w-1/2 text-justify">
          Dive into a universe where technology meets creativity. Here, every
          project is an adventure, from immersive game environments to dynamic
          software solutions. As a passionate developer and storyteller deeply
          inspired by games like Factorio, Rimworld, and Monster Hunter, I am
          dedicated to creating unique experiences that blend narrative depth
          and technical innovation.
          <br />
          <br />
          Stay tuned for future updates as the project evolve. In the meantime,
          feel free to explore the site and learn more about the team behind the
          scenes.
        </p>
        <div className="w-1/6"></div>
        <div className="bg-base-200 w-2/6 p-4 glass rounded-lg">
          <Quest />
        </div>
      </div>
    </div>
  );
};

export default Home;
