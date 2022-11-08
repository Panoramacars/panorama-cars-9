import React from "react";

import { Link, useConfig } from "gatsby-theme-advanced";

import UserLinks from "../UserLinks";

import "./styles.css";

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <footer className="footer-wrapper">
      <div className="link-grid">
        <UserLinks includeRss />
      </div>
      <div className="info">
        <p>
          Based on{" "}
          <Link to="https://www.panoramacars.ae">
            Panorama Rent a Car
          </Link>
        </p>
        <p>2023</p>
      </div>
    </footer>
  );
};

export default Footer;
