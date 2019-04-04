import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class User extends Component  {
  render() {
    const { match } = this.props;
    // let user = location.pathname;
    // user = user.replace('/user/', '');
    //  console.log(match);
    //  console.log('hello', match.params.user);
    //  console.log('hello', user);
     
     
    
    return (
      <div>
        {/* {user !== '/user' ? <h1>  Selected user:  {user} </h1> : <h1> No user selected </h1>} */}
        {/* { match.params.user ? <h1>  Selected user:  {match.params.user } </h1> : <h1> No user selected </h1>} */}
        { match.params.user ? <h1>  Selected user:  {match.params.user } </h1> : <Redirect from="/user" to="/login"/>}
        {/* { match.params.user ? <h1>  Selected user:  {match.params.user } </h1> : <h1> No user selected </h1>} */}
        
      </div>
    )
  }
}

export default User;
