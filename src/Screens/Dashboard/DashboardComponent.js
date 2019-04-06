import React, { Component } from 'react';
import CardComponent from '../.././components/CardComponent'
import AddRemoveUser from '../.././components/AddRemoveUser'
import UserList from '../.././components/UserList'
import PropTypes from 'prop-types'




// render all the components besides the Navbar/User and holds the list of users
class DashboardComponent extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
  }

   constructor(props) {
     super(props);
     this.state = {
       userList: [{
           id: 1,
           name: 'Mimmi',
           isActive: true
         },
         {
           id: 2,
           name: 'Kalle',
           isActive: false
         },
         {
           id: 3,
           name: 'Klara',
           isActive: true
         },
         {
           id: 4,
           name: 'John',
           isActive: true
         },
         {
           id: 5,
           name: 'Stina',
           isActive: false
         }
       ]
     }
   }

// change the string(with a user from input) to an Array, makes a new list, set the new state
   setNewUser = (newUser) => {
      const stringToObject = {name:newUser, isActive:true}
      //This is less code ;) 
      // {id:this.state.userList.length + 1,
      //   name:newUser,
      //   isActive: true
      // };
      const allUsers = this.state.userList.concat(stringToObject); 

      const allUsersWithId = allUsers.map((item, index)=>{
        return {
          id:index + 1, 
          name: item.name,
          isActive: item.isActive
        }
      })    
      
      const isActive = allUsersWithId.filter((item) => 
       item.isActive   
      ); 
      const isNotActive = allUsersWithId.filter((item)=>
        !item.isActive
      )
      const completeList = isActive.concat(isNotActive);
      
      //Sorts the list so the list is written in order by id
      completeList.sort((a, b) => { 
        return a.id - b.id;
      });  
            
     this.setState({
       userList: completeList
     })
   }

   //create a new array (removes one user), set the new state and update the userList
   removeUserFromApp = () => {
     const reduceUserList = this.state.userList.slice(0,this.state.userList.length -1);
      this.setState({
        userList: reduceUserList
      })
   }

   // renders the components with JSX 
  render() {
    return (
      <div className="wrapper">
      
      <CardComponent cardHeader="User list">
        <UserList users={this.state.userList}/>
      </CardComponent>

      <CardComponent cardHeader="Add and Remove User">
        <AddRemoveUser 
          setNewUser={this.setNewUser}
          removeUserFromApp={this.removeUserFromApp}
        />
      </CardComponent>

      </div>
    );
  }
}

export default DashboardComponent;
