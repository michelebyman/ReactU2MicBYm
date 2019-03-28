import React, { Component } from 'react'
import styles from '../cssFiles/showContentButton.module.css';

// display or hide the content in the card except from the header, button and <hr>

class ShowContentButton extends Component {

// sets the property to true and run the constructor before the render runs
  constructor(props){
    super(props);
    this.state = {
      showOrHide: true,
    }
  }

  // change value and setState to the opposite 
  showAndHideContent = () => {
    this.setState({
      showOrHide: !this.state.showOrHide
    })
   }
    
  render() {    
    return (
      <div>
          {this.state.showOrHide ? <div> {this.props.children} </div> : null}
      
         <hr className={styles.hr}/>

         {this.state.showOrHide ?  
            <button onClick={this.showAndHideContent} className={`btn ${styles.ShowContentBtn}`}>Hide content</button>  
            :
            <button onClick={this.showAndHideContent} className={`btn ${styles.ShowContentBtn}`}>Show content</button> }
      </div>
     
    )
  }
}

export default ShowContentButton;
