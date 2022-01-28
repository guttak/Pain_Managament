
import React from "react";
import ImageMapper from "react-image-mapper";
import Logo from './logo.jsx';
const URL = "https://www.researchgate.net/profile/Robert-Hristovski/publication/282346406/figure/fig2/AS:341573754736648@1458448937402/Body-map-Head-area-1-2-23-or-24-neck-area-3-or-25-shoulders-area-4-5-26.png";
// const page3 = ({ prevStep, nextStep, handleChange, values })=> {
//

    class picture extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imgarray:[],
      color: 0,
      colors: [""],
      map: {
        name: "my-map",
        areas: [
          {
          name: "RightArm",
            shape: "poly",
            coords: [47, 116,22,158,34 ,168,61,128],
            preFillColor: "lightgray",

            fillColor:"yellow"
          },
          {
            name: "Right Shoulder",
            shape: "poly",
            coords: [116, 63,77,61, 66, 79, 84, 91, 119, 91],
            preFillColor: "blue",
                fillColor:"yellow"
          },
          {
            name: "LeftKnee",
            shape: "poly",
            coords: [123, 241, 121, 264, 142, 261, 144, 236],
              preFillColor: "blue",
               fillColor:"yellow"

          },
          {
            name: "LeftLowerChest",
            shape: "poly",
            coords: [119,100,119,91,152,92,144,133,129,112,120,101,135,126],
            preFillColor: "blue",
              fillColor:""
          },

        ]
      }
    };
  }
  getInitialState() {
    return { clickedArea: null, msg: null, moveMsg: null, color: null  };
  }
  load() {
    this.setState({ msg: "Interact with image !" });
  }
  clicked(area) {
    this.setState({

      msg: `You clicked on ${area.name}`

    });
  }

  colorChange(area){
    let changeColorArea=area.name;
     let updateMap=this.state.map;
       let tempareas= updateMap.areas;
       let updatedarea=tempareas.filter(area=>{
         return area.name === changeColorArea

       })
       console.log("Index of updated area"+tempareas.findIndex(area => area.name === changeColorArea  ))
        updatedarea.preFillColor="black"
       updatedarea.fillColor="black"
      //  tempareas[3]=updatedarea
       console.log("updatedarea", updatedarea)

       // tempareas=tempareas.map(area => {if (area.name === changeColorArea )
       //
       //   { return {...area, fillColor: 'yellow'};
       // } return area;
     // }});
       let tempmap=this.state.map;
       tempmap.areas=tempareas;
       this.setState({ map:tempmap })

//console.log (tempareas.map(function(area) { if(area.name === "LeftLowerChest" )  { return {...area, fillColor: 'yellow'}; return area;}}));
  }


  moveOnImage(evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
    });
  }
  enterArea(area) {
    this.setState({

      msg: `You entered  ${area.name}  body Part`,



    });
  }

  moveOnArea(area, evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on ${area.shape} ${
        area.name
      } at coords ${JSON.stringify(coords)} !`
    });
  }

  getTipPosition(area) {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  }

  render() {
    const Continue = e =>{
     e.preventDefault();
       this.props.nextStep();
    };
    const Previous = e =>{
     e.preventDefault();
      this.props.prevStep();
    };
    return (
      <div className="grid">
        <Logo />
        <div className="presenter">
          <div className="image">


      <ImageMapper
              src={URL}
              map={this.state.map}
              width={500}
              onLoad={() => this.load()}
              colorClick={area => this.colorChange(area)}
              onDoubleClick={area => this.colorChange(area)}
              onClick={area => this.colorChange(area)}

              onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}

              onImageMouseMove={evt => this.moveOnImage(evt)}
            />
            {this.state.clickedArea && (
              <span
                className="tooltip"
                style={{ ...this.getTipPosition(this.state.clickedArea) }}
              >
                {this.state.clickedArea && this.state.clickedArea.name}
              </span>
            )}
          </div>
          <pre className="message">
            {this.state.msg ? this.state.msg : null}
          </pre>
          <pre>{this.state.moveMsg ? this.state.moveMsg : null}</pre>
        </div>
        <div className="source">
          <span
            onClick={() =>
              this.setState({ codeDetails: !this.state.codeDetails })
            }
          >
    </span>
          <pre>
            <code
              className="js"
              style={{ display: this.state.codeDetails ? "block" : "none" }}
            >

            </code>
          </pre>


          <pre>
            <code
              className="css"
              style={{ display: this.state.stylindDetails ? "block" : "none" }}
            >

            </code>
          </pre>

        </div>
         <div className="navbuttons">
               <button onClick={Previous}>Back</button>
                 <button onClick={Continue}>Next</button>


      </div>

      </div>

    );
  }
}

export default picture;
