import Proficiency from "./proficiency.js";
import Quote from "./-data/quote.js";

const About = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-32 text-base-content">About Me</h1>
      <div className="flex flex-row mx-auto max-w-[60%] mt-10 justify-center text-base-content">
        <p className="w-25vw w-1/2 text-lg pr-1">
          As a published writer, Linden Wright knows how to navigate deadlines
          and client expectations, while still tactfully accepting feedback and
          last minute changes. Always amenable to teamwork and extra-curricular
          learning, Linden is fluent in 5 languages, can integrate into any size
          group and make useful contributions while still keeping his own voice.
          Linden's goal is to gain relevant work experience as a software
          developer and work towards his Canadian permanent residency.
          <br />
          <br />
          Be sure to check out his projects and contact him if you have any
          questions or opportunities.
        </p>
        <div className="w-1/4"></div>
        <img
          src="https://via.placeholder.com/512"
          className="w-25vw w-1/4 pl-1"
          alt="placeholder"
        ></img>
      </div>
      <Proficiency />
      <Quote />
    </div>
  );
};

export default About;
