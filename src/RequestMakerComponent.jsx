import React from "react";
import "./App.css";

export const RequestMakerComponent = class RequestMakerComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        fact: '',
        data: '',

      };
    }


    randomFactGenerator = () => {
        
    }


    fetchContent = () => {

        this.setState({data: ''});

        const url = "https://cat-fact.herokuapp.com/facts";

    fetch(url)
      .then(response => response.json())
      .then(data => {

        if (Array.isArray(data) && data.length > 0 && data[0].text) {
          this.setState({fact: data[Math.floor(Math.random() * data.length)].text, data: JSON.stringify(data)});
        }
        
      });
  };

    render() {
    return (
        <div>
            <h1>If you are ready for a random fact about cats, press the button!</h1>
            <h3>{this.state.fact}</h3>
            <button onClick={this.fetchContent}>
                Get a random fact!
            </button>
        </div>
    );
    }
};

export default RequestMakerComponent;