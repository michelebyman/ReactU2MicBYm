import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import CardComponent from '../.././components/CardComponent'
import Styles from './user.module.css'
import PropTypes from 'prop-types'


// 
class User extends Component  {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
  }

  render() {
    const { match } = this.props;

    //Fun solution below
    // let user = location.pathname;
    // user = user.replace('/user/', '');
    //  console.log(match);
    //  console.log('hello', match.params.user);
    //  console.log('hello', user);
   
    
     
     
    
    return (
      <div>
        <CardComponent>
          <div className={Styles.div}>
            {/* the code below is for the fun solution */}
            {/* {user !== '/user' ? <h1>  Selected user:  {user} </h1> : <h1> No user selected </h1>} */}
          
            {/* This code is fot G */}
            {/* { match.params.user ? <h1>  Selected user:  {match.params.user } </h1> : <h1> No user selected </h1>} */}
            
            {/* This code is fot VG */}
            <h1 className={Styles.h1}>Selected user: </h1>
            { match.params.user ? <p className={Styles.p}> {match.params.user } </p> : <Redirect from="/user" to="/login"/>}
            
        </div>
        </CardComponent>
      </div>
    )
  }
}

export default User;
