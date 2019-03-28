import React, { Component } from 'react';
import styles from '../cssFiles/toggleBtn.module.css';

//handle toggle function and changes the color of the user list

class ToggleButtonComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleColor: true,
    }
  }

  // change value and setState to the opposite 
  toggleColorUserList = () => {
      this.setState({
        toggleColor: !this.state.toggleColor
      })
  }

  render() {
    return (
      <div>
        
        {this.state.toggleColor ? 
        <div className={styles.trueColor}> {this.props.children} </div> 
        : 
        <div className={styles.falseColor}> {this.props.children} </div>}

        <button onClick={this.toggleColorUserList} className={`btn ${styles.ToggleBtn}`}>Toggle Color</button>
      </div>
    )
  }
}

export default ToggleButtonComponent; 
