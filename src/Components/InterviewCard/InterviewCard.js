import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./InterviewCard.scss";
//{`card-middle ${ this.props.content.imgBanner }`
class InterviewCard extends Component {
  state = {};

  render() {

    let imageUrl = require(`../../images/interviewCardImages/${this.props.content.imgBanner}.jpg`)
      return (
        <div className="card">
          <div className="card-top">
            <img className="card-top-img"
                 src={"./images/" + this.props.content.avatar}
                 alt="profile"/>
            <div className="card-top-text">
              <h3>{this.props.content.title}</h3>
              <p>{this.props.content.subtitle}</p>
            </div>
          </div>
          <div className="card-middle" style={{ backgroundImage: `url(${imageUrl})` }}>

          </div>
          <div className="card-bottom">
            <p className="school">{this.props.content.school}</p>
            <p className="semester">{this.props.content.semester}</p>
            <Link to={this.props.content.link}
                  className="button">Läs intervju</Link>
          </div>
        </div>

      );
  }
}

export default InterviewCard;
