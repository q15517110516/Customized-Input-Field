import React, { Component } from "react";
import "./App.css";

function getLabels(keyword) {
	const allLabels = ['NextActions', 'Someday_Actions', 'Costco', 'Alexa'];
  const result = allLabels
    .filter(function(x) {
      return x.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
  return result;
}

export class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      renderList: [],
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });

    let newArr = [];
    let index = e.target.value.indexOf("@");
    const allLabels = ["NextActions", "Someday_Actions", "Costco", "Alexa"];
    
    if (index !== -1) {
      
      if (index + 1 < e.target.value.length) {

        let str = e.target.value.slice(index + 1);
        
        for (let i = 0 ; i < allLabels.length ;i++) {
          if(allLabels[i].toLowerCase() === str.toLowerCase()){
            this.setState({
              renderList: [],
              value: e.target.value.slice(0 , index) + allLabels[i],
            });
            return
          }
        }
        newArr = getLabels(str);
      } else {
        newArr = allLabels;
      }

      this.setState({
        renderList: newArr,
      });
    } else {
      this.setState({
        renderList: newArr,
      });
    }
  }
  render() {

    const { renderList } = this.state;

    return (
      <div id="container">
        <div className="inputField">
          <input
            type="text"
            id="input"
            list="dropdowns"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          />

          {
            <ul className="menu">
              {renderList.map((item, index) => {
                return (
                  <li
                    className="menuList"
                    key={index}
                    onClick={() => {
                      let index = this.state.value.indexOf('@');
                      this.setState({
                        value: this.state.value.slice(0, index) + item,
                        renderList: []
                      });
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </div>
    );
  }
}

export default App;
