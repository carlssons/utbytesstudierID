import React, { Component } from "react";
import "./InstagramSection.scss";

class InstagramSection extends Component {
  state = {};

  render() {
    let instagramLink = "https://www.instagram.com/explore/tags/idabroad/";
    let imgArray = [
      "instagram_img1",
      "instagram_img2",
      "instagram_img3",
      "instagram_img4"
    ];

    let images = imgArray.map(image => {
      return (
        <a
          key={image}
          className="instagram-img"
          href={instagramLink}
          target="blank_"
        >
          <img
            className="instagram-image"
            src={require(`../../../public/images/instagram-images/${image}.jpg`)}
            alt="instagramImage"
          />
        </a>
      );
    });

    return (
      <div className="instagramSection">
        <div className="instagram-box">
          <h2 className="instagramHeading">INSTAGRAM</h2>
          <div className="instagramHashtagBox">
            <a href={instagramLink} target="blank_">
              <img
                src="./images/instagram-images/instagram_logo_color.png"
                className="instagramLogo"
                alt="instagramImage"
              />
              <h3 className="instagramHashtag">#idabroad</h3>
            </a>
          </div>
          <div className="instagram-image-box">{images}</div>
        </div>
      </div>
    );
  }
}

export default InstagramSection;
