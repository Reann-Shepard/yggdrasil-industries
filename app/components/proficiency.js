import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDotnet } from "react-icons/di";
import { SiCsharp, SiXaml, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import ProficiencyIcon from "./-styles/icons.jsx";

const Proficiency = () => {
  return (
    <div className="pb-10">
      <ul className="flex flex-row justify-center items-center mt-20">
        {/* React */}
        <ProficiencyIcon icon={<FaReact />} text="React" />
        {/* HTML5 */}
        <ProficiencyIcon icon={<FaHtml5 />} text="HTML5" />
        {/* CSS */}
        <ProficiencyIcon icon={<FaCss3Alt />} text="CSS3" />
        {/* Javascript */}
        <ProficiencyIcon icon={<IoLogoJavascript />} text="Javascript" />
        {/* Node */}
        <ProficiencyIcon icon={<FaNodeJs />} text="Node.js" />
        {/* Next */}
        <ProficiencyIcon icon={<TbBrandNextjs />} text="Next.js" />
        {/* SQL */}
        <ProficiencyIcon icon={<SiPostgresql />} text="SQL" />
        {/* Python */}
        <ProficiencyIcon icon={<FaPython />} text="Python" />
        {/* Java */}
        <ProficiencyIcon icon={<FaJava />} text="Java" />
        {/* .NET */}
        <ProficiencyIcon icon={<DiDotnet />} text=".NET" />
        {/* XAML */}
        <ProficiencyIcon icon={<SiXaml />} text="XAML" />
        {/* C# */}
        <ProficiencyIcon icon={<SiCsharp />} text="C#" />
      </ul>
    </div>
  );
};

export default Proficiency;
