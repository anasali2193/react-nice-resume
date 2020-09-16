import React, { Component } from "react";
import "./Header.css";
class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row aboutCss">
          <div className="nine columns main-col">
            <h2 style={{ textAlign: "center" }}>About My Skills</h2>

            <p style={{ color: "white", textAlign: "center" }}>
              I’m a Full Stack Software Engineer who loves building software
              products. I had developed multiple web apps using ReactJS, NodeJS,
              and other latest technologies and also working in Artificial
              Intelligence, Machine Learning, and Deep Learning to build
              projects that will help in solving real-world problems. I’d love
              to build personalized products for you.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
