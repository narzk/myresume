import React, {Component} from 'react';
import data from "./data.json";
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import { SocialIcon } from 'react-social-icons';
import SnowStorm from 'react-snowstorm';

var green = '#39D1B4';
 // var yellow = '#FFD712';
class  App extends Component {
  
    constructor(props) {
    super(props);
    this.state = { color: green };
    this.randomColor = this.randomColor.bind(this);
  }

	randomColor() {
	    var letters = '0123456789ABCDEF';
	    var colory = '#';
	    for (var i = 0; i < 6; i++ ) {
		  colory += letters[Math.floor(Math.random() * 16)];
	    }
	    this.setState({color: colory});	 
  }
  
  render(){
    return (
      <div className="App">
        <SnowStorm followMouse={false} />
        <Toolbar/>
      
        <div className="fullpage first" style={{background: this.state.color}}>
        <div className="navigation"><button className="button" onClick={this.randomColor}>Make change</button></div>
          <h1 className="title">
            {data.title}
          </h1>
        
        <div><h2>{data.subtitle}</h2></div>
        <div> 
          {
            Object.keys(data.links).map(key => {
              return(<SocialIcon url={data.links[key]}/>)
              
            })
          }
           </div>
           </div>

        <div className="fullpage second" id="about">
          <h2>{data.sections[0].title}</h2>
          <p className="text">
            {data.sections[0].item[0].content}
          </p>
        </div>
        <div className="fullpage"  id="skills">
        <h2 className="heading">{data.sections[1].title}</h2>
          <div className="flex-container">
         
          <div className="card">
            <h2>{data.sections[1].item[0].content.title}</h2>
          </div>

          <div className="card">
            <h2>{data.sections[1].item[1].content.title}</h2>
          </div>

          <div className="card">
            <h2>{data.sections[1].item[2].content.title}</h2>
          </div>

          <div className="card">
            <h2>{data.sections[1].item[3].content.title}</h2>
          </div>

          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
