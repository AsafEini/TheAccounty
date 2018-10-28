import React, { Component } from 'react';
import './App.scss';
import { connect } from "react-redux";

class App extends Component {

    smart = () => {
        this.props.dispatch({ type: "SMART"});
    }

  render() {
      return (
          <div className='app'>{this.props.wisdomSentence}</div>
      )
  }
}


const mapStateToProps = (state) => ({
    wisdomSentence: state.wisdomSentence
});
export default connect(mapStateToProps)(App);
