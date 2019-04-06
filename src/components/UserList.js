import React, { Component, Fragment } from 'react'
import styles from '../cssFiles/UserList.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


// displays the user list after mapping through an array 
class UserList extends Component {
  static propTypes = {
    users: PropTypes.array
  }

   constructor(props) {
     super(props);
     this.state = {
       toggleColor: true,
       showActiveOrNotActive: true,
     }
   }

    // change value and setState to the opposite 
   showActiveOrNotActive = () => {
     this.setState({
       showActiveOrNotActive: !this.state.showActiveOrNotActive
     })  
   }

   // change value and setState to the opposite 
   toggleColorUserList = () => {
       this.setState({
         toggleColor: !this.state.toggleColor
       })
         }

  render() {

    // maps through the array that comes from the the app.js returns every item in the list as an list Item
    //checks if the state is true or not and match it with another state then filter a new list of users, sets a Link 
    const users = this.props.users.filter(user => 
      this.state.showActiveOrNotActive === user.isActive).map((user, i) =>
        <Link key={i} to={`/user/${user.name}`} 
          className={ this.state.toggleColor ? styles.trueColor : styles.falseColor}> 
          <li className={styles.listItem}>
            {user.id} 
            {user.name}
            <p className={styles.activeOrNot}>
              {user.isActive ? ' User is: Active' : ' User is: not active'}
            </p>
          </li>
        </Link> 
    );
  
    return (
      <div className={styles.divWrapper}>
        <Fragment>
          {this.state.showActiveOrNotActive ?
            <button 
              onClick={this.showActiveOrNotActive}  
              className={`btn ${styles.ShowInActive}`}
            >
            Show Inactive
            </button>
          :
            <button 
              onClick={this.showActiveOrNotActive}  
              className={`btn ${styles.ShowActive}`}
            >
              Show Active
            </button>}
        </Fragment>

        <ul className={styles.userList}>
         {users} 
        </ul>
        
        <button 
          onClick={this.toggleColorUserList} 
          className={`btn ${styles.ToggleBtn}`}
        >
          Toggle Color
        </button>
        
      </div>
    )
  }
}

export default UserList;
