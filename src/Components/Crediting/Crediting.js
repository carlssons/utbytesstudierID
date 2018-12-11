import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./Crediting.scss";
import { getCoverContent } from "../../coverContent";
import { getCreditingContent } from "../../creditingContent";
import { animateScroll as scroll } from "react-scroll";

class Crediting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    scroll.scrollToTop({
      duration: 0
    });
  };

  render() {
    const coverContent = getCoverContent("creditingCover");
    const creditingInfo = getCreditingContent("creditingInfo");
    const categoryOne = getCreditingContent("categoryOne");
    const categoryTwo = getCreditingContent("categoryTwo");
    const categoryThree = getCreditingContent("categoryThree");
    const categoryFour = getCreditingContent("categoryFour");
    const categoryFive = getCreditingContent("categoryFive");
    return (
      <div className="crediting-container">
        <Cover content={coverContent.cover} />
        <div className="crediting-info-container">{creditingInfo.text}</div>
        <div className="category-container">
          <div className="category-box">
            {categoryOne.categoryName}
            {categoryOne.university.map((element, index) => {
              return (
                <React.Fragment key1={index}>
                  {element.name}
                  {element.courses.map((course, index) => {
                    return (
                      <React.Fragment key2={index}>
                        {course.course}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>

          <div className="category-box">
            {categoryTwo.categoryName}
            {categoryTwo.university.map((element, index) => {
              return (
                <React.Fragment key3={index}>
                  {element.name}
                  {element.courses.map((course, index) => {
                    return (
                      <React.Fragment key4={index}>
                        {course.course}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>

          <div className="category-box">
            {categoryThree.categoryName}
            {categoryThree.university.map((element, index) => {
              return (
                <React.Fragment key5={index}>
                  {element.name}
                  {element.courses.map((course, index) => {
                    return (
                      <React.Fragment key6={index}>
                        {course.course}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>

          <div className="category-box">
            {categoryFour.categoryName}
            {categoryFour.university.map((element, index) => {
              return (
                <React.Fragment key7={index}>
                  {element.name}
                  {element.courses.map((course, index) => {
                    return (
                      <React.Fragment key8={index}>
                        {course.course}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>

          <div className="category-box">
            {categoryFive.categoryName}
            {categoryFive.university.map((element, index) => {
              return (
                <React.Fragment key9={index}>
                  {element.name}
                  {element.courses.map((course, index) => {
                    return (
                      <React.Fragment key10={index}>
                        {course.course}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Crediting;
