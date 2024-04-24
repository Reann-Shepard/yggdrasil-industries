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
          <h1 className="uppercase text-secondary ">Yggdrasil Industries</h1>
        </div>
        <ul className="flex flex-row justify-center items-center flex-grow space-x-8 text-base-content w-1/2">
          <li
            className="daisy-btn daisy-btn-base-200 w-24 border-accent"
            onClick={() => setActiveModule("home")}
          >
            Home
          </li>
          <li className="px-4">||</li>
          <li
            className="daisy-btn daisy-btn-base-200 w-24 border-accent"
            onClick={() => setActiveModule("about")}
          >
            About
          </li>
          <li className="px-4">||</li>
          <li
            className="daisy-btn daisy-btn-base-200 w-24 border-accent"
            onClick={() => setActiveModule("projects")}
          >
            Projects
          </li>
          <li className="px-4">||</li>
          {/* <details className="daisy-dropdown">
            <summary className="daisy-btn daisy-btn-base-200 w-24 border-accent">
              Links
            </summary> */}
          <div className="daisy-dropdown daisy-dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="daisy-btn w-24 border-accent"
            >
              Links
            </div>
            <ul
              tabIndex={0}
              className="daisy-dropdown-content z-[1] daisy-menu shadow bg-base-200 rounded-box w-24 items-center"
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/linden-wright/"
                  target="_blank"
                >
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Reann-Shepard" target="_blank">
                  <FaGithub size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://steamcommunity.com/id/reann-shepard/myworkshopfiles/"
                  target="_blank"
                >
                  <FaSteamSquare size={30} />
                </a>
              </li>
              <li>
                <div onClick={() => setActiveModule("contact")}>
                  <MdEmail size={30} />
                </div>
              </li>
            </ul>
          </div>
        </ul>
        <div>
          <ul className="flex flex-row justify-center items-center flex-grow">
            <select
              className="daisy-select daisy-select-accent text-base-content w-full"
              data-choose-theme
            >
              <option disabled selected>
                Change Theme
              </option>
              <option value="sunset" data-theme="sunset">
                Dark
              </option>
              <option value="dracula" data-theme="dracula">
                Dim #1
              </option>
              <option value="dim" data-theme="dim">
                Dim #2
              </option>
              <option value="nord" data-theme="nord">
                Light
              </option>
            </select>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
