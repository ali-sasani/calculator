import React, { Component } from "react";
import { string } from "postcss-selector-parser";
import "./styles.css";
class Digitbutton extends Component {
    constructor() {
        super();
      }
    render(){
        let props= this.props
        return(
            <div>
            <button className="calculator-key" onClick={props.onClick}>
            {props.digit}
          </button>
          </div>
        );
    }

}
export default Digitbutton;
