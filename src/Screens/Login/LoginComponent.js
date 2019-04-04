import React, { Component } from 'react'
import CardComponent from '../.././components/CardComponent'
import styles from '../.././cssFiles/login.module.css';



class LoginComponent extends Component {
     constructor(props){
    super(props);
    this.state = {
      showOrHide: false,
      value: ''
    }
  }

  // change value and setState to the opposite 
  showAndHideInfo = () => {
    this.setState({
      showOrHide: !this.state.showOrHide
    })
   }

   navigate = (event) => {
    console.log(this.props.history)
       if (this.state.value.length > 6) {
           this.props.history.push('/dashboard')
       }  
       this.setState({
           value: ''
       })
   }

    getUser = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    

  render() {
    return (
      <div>
          <CardComponent myInfo="You need to click on the button to login :) ">

            <input maxLength="30" type="text" value={this.state.value} placeholder="Login.." onChange={this.getUser}  className={styles.input}/>

            <button onClick={this.navigate} className={`btn ${styles.btnAdd}`}>Login</button>
          </CardComponent>
        
      </div>
    )
  }
}

export default LoginComponent;
