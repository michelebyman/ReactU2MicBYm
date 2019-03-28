import React, { Component } from 'react'
import styles from '../cssFiles/UserList.module.css';

class UserList extends Component {

  render() {
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
