import { FaLinkedin, FaGithub, FaSteamSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { themeChange } from "theme-change";
import { useEffect } from "react";

const NavBar = ({ setActiveModule }) => {
  // Initialize the theme change
  useEffect(() => {
    themeChange(false);
  }, []);

  // Alter the navbar to enable the user to switch between different pages without refreshing the page

  return (
    <nav className="p-3 fixed top-0 w-full z-30 font-extrabold text-lg text-shadow-outline glass">
      <div className="flex container mx-auto flex-row justify-between items-center">
        <div className="flex-none">
          <h1 className="uppercase text-base-content">Yggdrasil Industries</h1>
        </div>
        <ul className="flex flex-row justify-center items-center flex-grow space-x-8 text-base-content">
          <li
            className="daisy-btn daisy-btn-primary w-24"
            onClick={() => setActiveModule("home")}
          >
            Home
          </li>
          <li className="px-4">||</li>
          <li
            className="daisy-btn daisy-btn-primary w-24"
            onClick={() => setActiveModule("about")}
          >
            About
          </li>
          <li className="px-4">||</li>
          <li
            className="daisy-btn daisy-btn-primary w-24"
            onClick={() => setActiveModule("projects")}
          >
            Projects
          </li>
          <li className="px-4">||</li>
          <details className="daisy-dropdown">
            <summary className="daisy-btn daisy-btn-primary w-24">
              Contact
            </summary>
            <ul className="daisy-dropdown-content daisy-menu daisy-rounded-box bg-neutral">
              <li>
                <a href="https://www.linkedin.com/in/linden-wright/">
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="mailto:linden.wright001@gmail.com">
                  <MdEmail size={30} />
                </a>
              </li>
            </ul>
          </details>
        </ul>
        <div>
          <ul className="flex flex-row justify-center items-center flex-grow space-x-8">
            <li>
              <a href="https://github.com/Reann-Shepard">
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a href="https://steamcommunity.com/id/reann-shepard/myworkshopfiles/">
                <FaSteamSquare size={30} />
              </a>
            </li>
            {/* <select
              className="select select-secondary p-1 ml-2 text-black"
              data-choose-theme
            >
              <option value="sunset">Dark</option>
              <option value="nord">Light</option>
              <option value="cyberpunk">Cyberpunk</option>
            </select> */}
            <select
              className="daisy-select daisy-select-secondary w-full max-w-xs"
              data-choose-theme
            >
              <option disabled selected>
                Change Theme
              </option>
              <option value="sunset" data-theme="sunset">
                Dark
              </option>
              <option value="nord" data-theme="nord">
                Light
              </option>
              <option value="pastel" data-theme="pastel">
                WCAG Compliant
              </option>
            </select>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
