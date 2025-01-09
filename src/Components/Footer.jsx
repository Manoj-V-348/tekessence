import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import "../index.css";

import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import youtube from "../assets/icons/youtube.png";

function Footer() {
  const date = new Date();

  return (
    <>
      <footer className="horizontal--flex footer">
        <div className="quick--links vertical--flex">
          <p className="bold">Quick Links</p>
          <div className="footer--links vertical--flex">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="address">
          <p className="bold">Address</p>
          <p className="address--location">
            TekEssence Inc.,
            <br />
            Sunnywale, <br />
            California - 95085,
            <br /> Tel - 408-934-2100
          </p>
        </div>

        <div className="contact--form vertical--flex">
          <p className="bold">Social</p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="social horizontal--flex center"
          >
            <img src={instagram} alt="insta" />
            <p>Instagram</p>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="social horizontal--flex center"
          >
            <img src={facebook} alt="fb" />
            <p>Facebook</p>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="social horizontal--flex center"
          >
            <img src={youtube} alt="youtube" />
            <p>YouTube</p>
          </a>
        </div>
      </footer>

      <p className="copyright">
        Copyright@ {date.getFullYear()}.{" "}
        <span className="underline">TekEssence, Inc.</span>. All rights
        reserved.
      </p>
    </>
  );
}

export default Footer;
