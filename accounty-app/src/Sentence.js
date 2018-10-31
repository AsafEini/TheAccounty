import React, { Component } from 'react';
import './Sentence.scss';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

class Sentence extends Component {

    smart = () => {
        this.props.dispatch({ type: "SMART"});
    }

  render() {
      return (
          <BrowserRouter>
          <div className='sentence'>
          <Route path="/" component={Home}/>
          <p>{this.props.wisdomSentence}</p>
          </div>
          </BrowserRouter>
      )
  }
}


const mapStateToProps = (state) => ({
    wisdomSentence: state.wisdomSentence
});
export default connect(mapStateToProps)(Sentence);
