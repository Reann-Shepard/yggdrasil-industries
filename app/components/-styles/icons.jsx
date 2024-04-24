import React from "react";
import PropTypes from "prop-types";

function ProficiencyIcon({ icon, text }) {
  // set size of icon
  const sizeIcon = 40;
  // return icon with text using React.cloneElement
  return (
    <li className="p-4 group relative mr-8">
      {React.cloneElement(icon, {
        size: sizeIcon,
        className:
          "absolute inset-0 opacity-100 group-hover:opacity-0 duration-300 fill-base-content",
      })}
      <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 duration-300 text-base-content text-lg font-semibold transform -translate-x-1/2 translate-y-1/2 -rotate-45 origin-top-left">
        {text}
      </div>
    </li>
  );
}

ProficiencyIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProficiencyIcon;
