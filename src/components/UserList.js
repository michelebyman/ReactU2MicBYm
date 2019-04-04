import React, { Component, Fragment } from 'react'
import styles from '../cssFiles/UserList.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


// displays the user list after mapping through the an array 
class UserList extends Component {
  static propTypes = {
    users: PropTypes.array
  }

   constructor(props) {
     super(props);
     this.state = {
       toggleColor: true,
       showActiveOrNotActive: true
     }
   }
   showActiveOrNotActive = () => {
     this.setState({
       showActiveOrNotActive: !this.state.showActiveOrNotActive
     })
     console.log(this.state.showActiveOrNotActive);
     
   }

   // change value and setState to the opposite 
   toggleColorUserList = () => {
       this.setState({
         toggleColor: !this.state.toggleColor
       })
         }

  render() {
    // maps through the array that comes from the the app.js returns every item in the list as an list Item
      const users = this.props.users.map((item, i) => {

        if (this.state.showActiveOrNotActive) { 
          if (item.isActive) {
            return (
              <Link key={i} to={`/user/${item.name}`} className={ this.state.toggleColor ? styles.trueColor : styles.falseColor}> 
            <li>{item.id} {item.name}
            {item.isActive ? ' User is: Active' : ' User is: not active'}
            </li>
            </Link> 
            )
        } 
      } else {
        if (!item.isActive) {
          return (
            <Link key={i} to={`/user/${item.name}`} className={ this.state.toggleColor ? styles.trueColor : styles.falseColor}> 
          <li>{item.id} {item.name}
          {item.isActive ? ' User is: Active' : ' User is: not active'}
          </li>
          </Link> 
          )
      } 
      }  
    })
    

    return (
      <div className={styles.divWrapper}>
      <Fragment>
              {this.state.showActiveOrNotActive ?
              <button onClick={this.showActiveOrNotActive}  className={`btn ${styles.ShowContentBtn}`}>Show Active</button>
              :
              <button onClick={this.showActiveOrNotActive}  className={`btn ${styles.ShowContentBtn}`}>Show Inactive</button>}
          </Fragment>
        <ul className={styles.userList}>
         {users} 
        </ul>
        
        <button onClick={this.toggleColorUserList} className={`btn ${styles.ToggleBtn}`}>Toggle Color</button>
      </div>
    )
  }
}

export default UserList;
