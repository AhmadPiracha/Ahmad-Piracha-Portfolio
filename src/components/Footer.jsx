/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../higherOrderComponents";

const Footer = () => {
  return (
    <>
      <footer className="text-white p-4 text-center">
        <p>
          Copyright © {new Date().getFullYear()}
          <span className="text-blue-300"> Ahmad Piracha </span>
          All rights reserved.
        </p>
        <p>
          Designed by
          <a
            href="https://www.linkedin.com/in/ahmad-waseem-piracha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500"
          >
            Ahmad Piracha
          </a>
        </p>
      </footer>
    </>
  );
};

export default SectionWrapper(Footer, "");
