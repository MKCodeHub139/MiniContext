import React ,{useContext}from 'react'
import UserContext from '../Context/CreateContext'


const Profile = () => {
    const {user} =useContext(UserContext)
    // if (!user) return 'No User'
    
   return (
       <div>
       { !user? 'No User':
        <p>welcome {user.username}</p>}
    </div>
)
    
  
}

export default Profile