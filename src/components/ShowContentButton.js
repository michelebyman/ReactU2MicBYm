import React, { Component } from 'react'
import styles from '../cssFiles/showContentButton.module.css';

class ShowContentButton extends Component {

  constructor(props){
    super(props);
    this.state = {
      showOrHide: true,
    }
  }

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
