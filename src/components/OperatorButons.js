import React, { Component } from "react";
import { string } from "postcss-selector-parser";
import "./styles.css";
class OperatorButtons extends Component {
    constructor() {
        super();
      }
    render(){
        let props= this.props
        return(
            <div>
            <button className="calculator-key" onClick={props.onClick}>
            {props.res}
          </button>
          </div>
        );
    }

}
export default OperatorButtons;
