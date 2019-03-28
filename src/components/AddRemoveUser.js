import React, { Component } from 'react'
import styles from '../cssFiles/addRemoveUser.module.css';

// handle users, removes existing users add new users 

class AddRemoveUser extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: ''
    } 
  }

  
 // calls a function passing a value as an argument and prevent the site to reload the whole page
  handleAddUserOnSubmit = (event) => {
    if (this.state.value) {
      this.props.setNewUser(this.state.value);
    }
    this.setState({
      value: ''
    })
  }

  // sets the new value every time we type anything in the input field
   handleNewUser = (event) => {
      this.setState({
        value: event.target.value
      })  
   }

   // calls a function which removes and updates the new userList
   removeUser = () => { 
         this.props.removeUserFromApp()
   }
    

  render() {
    return (
      <div>
          <input maxLength="30" type="text" value={this.state.value} placeholder="new user..." onChange={this.handleNewUser}  className={styles.input}/>

          <button onClick={this.handleAddUserOnSubmit} className={`btn ${styles.btnAdd}`} >Add</button>

          <button onClick={this.removeUser} className={`btn ${styles.btnRemove}`}>Remove</button>
      </div>
    )
  }
}

export default AddRemoveUser; 
