import React, { Component } from "react";
import "./AgreementText.scss";


class AgreementText extends Component{
    render(){
        return(
            <div className="agreement-text">
                <div className="text">
                    {this.props.content.text.heading}
                    {this.props.content.text.info}
                    {this.props.content.text.links}
                </div>
            </div>
        );
    }
}
export default AgreementText;