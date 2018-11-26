/*This component alters between images. uses the component FadeImages to do
this.*/
import React, {Component} from 'react';
import FadeImages from '../FadeImages/FadeImages.js'

class Carousell extends Component{
  constructor(props){
    super(props);
    this.state = {};

  }

  render(){
    let imgArray = ["canada3","canada1","canada2","singapore3","kyoto1", "singapore2","malaysia1",
    "singapore5", "tokyo1", "tokyo5", "malaysia2"];
    let images = imgArray.map(image => {
      return <img key={image} src={require(`../../images/${image}.JPG`)} width="100%"/>
    });

    let videoArray = ["tvistefilm"]
    let videos = videoArray.map(video => {
      return( <video key={video} width="100%" height="100%">
                <source src={require(`../../videos/${video}.mp4`)} type="video/mp4"/>
            </video>
          );
    });
    return(
      <div>
        <FadeImages id="carousell" width={ '100%' } height={ '800px' } interval={3000 }>
          {images}
        </FadeImages>
      </div>
    );
  }
}
export default Carousell;
