import React, { Component } from 'react'
import styles from '../cssFiles/UserList.module.css';

// displays the user list after mapping through the an array 
class UserList extends Component {

  render() {
    // maps through the array that comes from the the app.js returns every item in the list as an list Item
      const users = this.props.users.map((item, i) => {        
        return <li key={i}>{item}</li>
    })

    return (
      <div className={styles.divWrapper}>
        <ul className={styles.userList}>
         {users}
        </ul>
      </div>
    )
  }
}

export default UserList;
