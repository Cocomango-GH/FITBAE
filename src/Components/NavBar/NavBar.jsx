import React from "react";
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service';


export default function NavBar({user, updateUser}) {

    function handleLogOut(){
      userService.logOut()
      updateUser(null)
    }
  
    return (
      <nav>
        <Link to="/goals">Goals</Link>
        &nbsp; | &nbsp;
        <Link to="/goals/new">Add Goal</Link>
        &nbsp; | &nbsp;
        <Link to='/goallist'> Goal List </Link>
        <h2>Welcome FitBae, {user.name}!</h2>
        <Link to='' onClick={handleLogOut}>Log Out</Link>
      </nav>
    )
  }