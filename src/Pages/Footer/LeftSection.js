import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const LeftSection = () => {
  return (
    <Typography variant="body1" gutterBottom className="list">
      <ul className="footer-list">
        <li>
          <Link
            activeClass="active"
            to={"home"}
            spy={true}
            smooth={true}
            duration={700}
            offset={-70}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to={"about"}
            spy={true}
            smooth={true}
            duration={700}
            offset={-70}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to={"offerings"}
            spy={true}
            smooth={true}
            duration={700}
            offset={-30}
          >
            Offerings
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to={"features"}
            spy={true}
            smooth={true}
            duration={700}
            offset={-40}
          >
            Benefits
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to={"contact"}
            spy={true}
            smooth={true}
            duration={700}
            offset={-70}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </Typography>
  );
};

export default LeftSection;
