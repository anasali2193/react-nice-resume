import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import "./Header.css";
import profile from "../imgs/profile.jpeg";
class Header extends Component {
  render() {
    if (this.props.data) {
      var project = "https://www.linkedin.com/in/anasali2193/";
      var github = "https://github.com/anasali2193/";
      var name = "Hi, I'm Anas Ali";
      var instagram = "http://instagram.com/thora_sa_engineer/";
      var profilepic = profile;
      var description =
        "I design and code beautifully simple things, and I love what I do.";
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>

            <img
              className="profile-pic"
              src={profilepic}
              alt="Nordic Giant Profile Pic"
            />

            <ul className="social">
              <a
                href={project}
                className="gitButtons"
                target="_blank"
                style={{ marginRight: "32px" }}
              >
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>

              <a
                href={instagram}
                className="gitButtons"
                target="_blank"
                style={{ marginRight: "32px" }}
              >
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href={github} className="gitButtons">
                <i className="fa fa-github"></i>
              </a>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
