import React, { Component } from 'react';
import './App.css';
import CardComponent from './components/CardComponent'
import ShowContentButton from './components/ShowContentButton'
import ToggleButtonComponent from './components/ToggleButtonComponent'
import AddRemoveUser from './components/AddRemoveUser'
import UserList from './components/UserList'

// render all the components and holds the list of users
class App extends Component {

   constructor(props) {
     super(props);
     this.state = {
       userList: ['Kalle ', 'Anka']
     }
   }

// change the string(with a user from input) to an Array, makes a new list, set the new state
   setNewUser = (newUser) => {
      const stringToArray = [newUser];
      const allUsers = this.state.userList.concat(stringToArray)
     this.setState({
       userList: allUsers
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
      <div className="App">

      <CardComponent cardHeader="User list">
          <ShowContentButton>
            <ToggleButtonComponent> 
              <UserList users={this.state.userList}/>
            </ToggleButtonComponent> 
          </ShowContentButton>  
      </CardComponent>

      <CardComponent cardHeader="Add and Remove User">
        <ShowContentButton>
          <AddRemoveUser 
          setNewUser={this.setNewUser}
          removeUserFromApp={this.removeUserFromApp}
          />
        </ShowContentButton>
      </CardComponent>
      </div>
    );
  }
}

export default App;
