import React, { Component } from "react";
import "./styles.css";
import DigitButton from "./DigitButton";
import OperatorButtons from "./OperatorButons";

class CalButtons extends Component {
  state = {
    num: null,
    showingNum: "0",
    operator: null,
    waitingForOperand: false,
    waitingForDigit: true,
    DigitKeys: [7, 8, 9, 4, 5, 6, 1, 2, 3],
    Oper: {
      name: ["÷", "×", "-", "+", "="],
      func: ["/", "*", "-", "+", "="]
    }
  };
  addNum(num) {
    if((this.state.showingNum.length<7) || this.state.waitingForOperand){
    const display = this.state.showingNum;
    const waitingForOperand = this.state.waitingForOperand;
    this.setState({
      waitingForDigit: false
    });

    if (waitingForOperand) {
      this.setState({
        showingNum: String(num),
        waitingForOperand: false
      });
    } else {
      this.setState({
        showingNum: display === "0" ? String(num) : display.concat(String(num))
      });
    }
  }
  }
  OperationKey(operation) {
    if (!this.state.waitingForDigit) {
      const num = this.state.num;
      const showingNum = this.state.showingNum;
      const prevOperator = this.state.operator;
      const inputValue = parseFloat(showingNum);

      if (num == null) {
        this.setState({
          num: inputValue
        });
      } else if (prevOperator) {
        const currentValue = num || 0;
        var newnum = 0;
        if (prevOperator === "/") {
          newnum = currentValue / inputValue;
        } else if (prevOperator === "+") {
          newnum = currentValue + inputValue;
        } else if (prevOperator === "*") {
          newnum = currentValue * inputValue;
        } else if (prevOperator === "-") {
          newnum = currentValue - inputValue;
        } else if (prevOperator === "=") {
          newnum = inputValue;
        }

        this.setState({
          num: newnum,
          showingNum: String(newnum)
        });
      }

      this.setState({
        waitingForOperand: true,
        operator: operation,
        waitingForDigit: true
      });
    }
    if (this.state.operator) {
      this.setState({
        operator: operation
      });
    }
  }
  clear() {
    this.setState({
      num: null,
      showingNum: "0",
      operator: null,
      waitingForOperand: false
    });
  }
  Dot() {
    const showingNum = this.state.showingNum;
    const waitingForOperand = this.state.waitingForOperand;
    if (waitingForOperand) {
      this.setState({
        showingNum: "0.",
        waitingForOperand: false
      });
    } else {
      this.setState({
        showingNum: showingNum + ".",
        waitingForOperand: false
      });
    }
  };

  render() {
    var showingNum = this.state.showingNum;
    var defaultDisplay = "AC";
    if (this.state.showingNum !== "0" || this.state.num!==null) {
      defaultDisplay = "C";
    }
    if(showingNum.length>7){
      showingNum =parseFloat(showingNum)
      showingNum=showingNum.toExponential()
      showingNum=parseFloat(showingNum).toPrecision(3)
    }
    return (
      <div className="calculator">
        <div className="calculator-display">{showingNum}</div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button
                className="calculator-key"
                onClick={() => this.clear()}
              >
                {defaultDisplay}
              </button>
              <button className="calculator-key" onClick={() => this.setState({showingNum: showingNum*(-1)})} disabled={showingNum == 0}>±</button>
              <button className="calculator-key" onClick={() => this.setState({showingNum: showingNum/100})}>%</button>
            </div>
            <div className="digit-keys">
              <button className="calculator-key key-0" onClick={()=>this.addNum(0)}>0</button>
              <button className="calculator-key" onClick={()=> this.Dot()}>
                .
              </button>
              
              {this.state.DigitKeys.map(digit => (
                <DigitButton digit={digit} onClick={() => this.addNum(digit)} />
              ))}
            </div>
          </div>
          <div className="operator-keys">
            {this.state.Oper.name.map((res, i) => (
              <OperatorButtons
                res={res}
                onClick={() => this.OperationKey(this.state.Oper.func[i])}
              />
            ))}
          </div>
        </div>{" "}
      </div>
    );
  }
}
export default CalButtons;
