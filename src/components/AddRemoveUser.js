import React, { Component } from 'react'
import styles from '../cssFiles/addRemoveUser.module.css';

class AddRemoveUser extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: ''
    } 
  }

  

  handleAddUserOnSubmit = (event) => {
   event.preventDefault();

    if (this.state.value) {
      this.props.setNewUser(this.state.value);
    }
    this.setState({
      value: ''
    })
  }

   handleNewUser = (event) => {
      this.setState({
        value: event.target.value
      })  
   }

   removeUser = () => { 
         this.props.removeUserFromApp()
   }
    

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddUserOnSubmit}>

          <input maxLength="30" type="text" value={this.state.value} placeholder="new user..." onChange={this.handleNewUser}  className={styles.input}/>

          <button type="submit" value="submit" className={`btn ${styles.btnAdd}`} >Add</button>

          <button onClick={this.removeUser} className={`btn ${styles.btnRemove}`}>Remove</button>

        </form>
      </div>
    )
  }
}

export default AddRemoveUser; 
