import React, { Component } from "react";
import "./AgreementBox.scss";

class AgreementBox extends Component {
  state = {};
  render() {
    return (
        <div className="agreement-box">
            {this.props.content.text.heading}
            <div className="text-link-box">
                {this.props.content.text.info}
                {this.props.content.text.links}
            </div>
        </div>
    );
  }
}

export default AgreementBox;
