import React, { Component } from "react";
import "./InstagramSection.scss";


class InstagramSection extends Component {
  state = {};


  render() {
    return (
      <div className="instagramSection">
        <h2>hejhej</h2>
        {/*<div className="instagram-img-box">
          <img className="instagram-img" src="./instagram_img1.jpg" />
          <img className="instagram-img" src="./instagram_img2.jpg" />
          <img className="instagram-img" src="./instagram_img3.jpg" />
        </div>*/}
        <svg className="svg">
          <line className="line" x1="0" y1="0" x2="20%" y2="0"/>
          <line className="line" x1="0" y1="0" x2="0" y2="100%"/>
          <line className="line" x1="0" y1="100%" x2="100%" y2="100%"/>
          <line className="line" x1="100%" y1="0" x2="100%" y2="100%"/>
          <line className="line" x1="100%" y1="0" x2="80%" y2="0"/>
        </svg>
      </div>
    );
  }
}

export default InstagramSection;
