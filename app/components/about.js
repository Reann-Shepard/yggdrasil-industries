import Proficiency from "./proficiency.js";
import Quote from "./-data/quote.js";

const About = () => {
  return (
    <div className="mx-auto text-center pt-32 text-base-content">
      <h1 className="text-4xl font-bold pb-6 text-primary">About Me</h1>
      <div className="flex flex-row mx-auto max-w-[60%] mt-10 justify-center text-base-content">
        <p className="w-1/2 text-lg text-justify pt-8">
          As a published writer, Linden Wright knows how to navigate deadlines
          and client expectations, while still tactfully accepting feedback and
          last minute changes. Always amenable to teamwork and extra-curricular
          learning, they are fluent in 5 languages, can integrate into any size
          group and make useful contributions while still keeping his own voice.
          Their goal is to gain relevant work experience as a software developer
          and work towards his Canadian permanent residency.
          <br />
          <br />
          Be sure to check out their projects and contact them if you have any
          questions or opportunities.
        </p>
        <div className="w-1/6"></div>
        <img
          src="https://via.placeholder.com/512"
          className="w-2/6 p-4 h-1/4 my-auto mx-auto glass rounded-lg"
          alt="placeholder"
        ></img>
      </div>
      <Proficiency />
      <Quote />
    </div>
  );
};

export default About;
