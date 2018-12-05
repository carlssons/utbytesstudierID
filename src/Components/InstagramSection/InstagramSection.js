import React, { Component } from "react";
import "./InstagramSection.scss";

class InstagramSection extends Component {
  state = {};

  render() {
    let instagramLink = "https://www.instagram.com/explore/tags/idabroad/";
    let instagramLogo = "./images/instagramImages/instagramLogo.png";
    let imgArray = [
      "instagramImg1",
      "instagramImg2",
      "instagramImg3",
      "instagramImg4"
    ];

    let images = imgArray.map(image => {
      return (
        <a
          key={image}
          className="instagram-link"
          href={instagramLink}
          target="blank_"
        >
          <img
            className="instagram-img"
            src={`/images/instagramImages/${image}.jpg`}
            alt="instagram"
          />
        </a>
      );
    });

    return (
      <div className="instagram-section">
        <div className="instagram-box">
          <h2 className="instagram-heading">INSTAGRAM</h2>
          <div className="instagram-hashtag-box">
            <a href={instagramLink} target="blank_">
              <img
                src={instagramLogo}
                className="instagram-logo"
                alt="instagram logo"
              />
              <h3 className="instagram-hashtag">#idabroad</h3>
            </a>
          </div>
          <div className="instagram-image-box">{images}</div>
        </div>
      </div>
    );
  }
}

export default InstagramSection;
