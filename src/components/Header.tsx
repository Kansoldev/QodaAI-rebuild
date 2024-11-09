import { useState } from "react";
import Logo from "../assets/img/logo.png";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header>
      <div className="py-6 w-full border-b-[1px] border-slate-500 relative bg-[#222751]">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <a href="#">
            <img src={Logo} width={125} height={25} />
          </a>

          <nav
            className={`w-full md:w-auto mt-6 md:mt-0 order-3 md:order-2 ${
              !isMenuVisible ? "hidden" : ""
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium transition duration-200 shadow-xl">
              <li>
                <a
                  href="#"
                  className="focus:outline-none flex justify-between items-center py-3 pr-4 pl-3 w-full text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>

              <li className="mb-4 md:mb-0">
                <a
                  href="#"
                  className="focus:outline-none flex justify-between items-center py-3 pr-4 pl-3 w-full text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Resources
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="py-2 px-8 text-gray-500 rounded-lg hover:bg-white hover:text-black transition duration-300 border"
                >
                  Contact us
                </a>
              </li>

              <li className="mt-10 mb-5 md:my-0">
                <a
                  href="#"
                  className="py-2 px-10 text-white rounded-md bg-sky-800 hover:bg-gray-500 transition duration-300 border border-sky-800"
                >
                  Learn AI
                </a>
              </li>
            </ul>
          </nav>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="15"
            className="md:hidden order-2"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <g fill="#fff" fillRule="evenodd">
              <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
