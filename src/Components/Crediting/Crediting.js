import React, { Component } from "react";
import Cover from "../Cover/Cover";
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
                <div className="university-box" key={index}>
                  {element.name}
                  {element.courses.map((course, index) => {
                    return <div key={index}>{course.course}</div>;
                  })}
                </div>
              );
            })}
          </div>

          <div className="category-box">
            {categoryTwo.categoryName}
            {categoryTwo.university.map((element, index) => {
              return (
                <div className="university-box" key={index}>
                  {element.name}
                  {element.courses.map((course, index) => {
                    return <div key={index}>{course.course}</div>;
                  })}
                </div>
              );
            })}
          </div>

          <div className="category-box">
            {categoryThree.categoryName}
            {categoryThree.university.map((element, index) => {
              return (
                <div className="university-box" key={index}>
                  {element.name}
                  {element.courses.map((course, index) => {
                    return <div key={index}>{course.course}</div>;
                  })}
                </div>
              );
            })}
          </div>

          <div className="category-box">
            {categoryFour.categoryName}
            {categoryFour.university.map((element, index) => {
              return (
                <div className="university-box" key={index}>
                  {element.name}
                  {element.courses.map((course, index) => {
                    return <div key={index}>{course.course}</div>;
                  })}
                </div>
              );
            })}
          </div>

          <div className="category-box">
            {categoryFive.categoryName}
            {categoryFive.university.map((element, index) => {
              return (
                <div className="university-box" key={index}>
                  {element.name}
                  {element.courses.map((course, index) => {
                    return <div key={index}>{course.course}</div>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Crediting;
