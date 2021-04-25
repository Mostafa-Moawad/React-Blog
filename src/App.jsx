import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

import {useState } from "react"
import {PostItem} from "./components/PostItem"
import {UserInput} from "./components/UserInput"
import {CommentItem} from "./components/CommentItem"
import PostList from './components/PostList';
import { Login2 } from './components/Login2';
import { navigate, Router } from "@reach/router";


function App() {

  
  const [posts, setPosts] = useState([])
  const [authUser, setAuthUser] = useState([])
  
  const handleLogin = (userEmail,userName) => {
    fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}&email=${userEmail}`)
    .then(response => response.json())
    .then(fetchedUser => {
      if(fetchedUser.length>0)
      {   
          setAuthUser(fetchedUser)
          console.log(fetchedUser[0].id + " userid");
          handlePostList(fetchedUser[0].id)  

          navigate("/")
      }
      else{
        console.log("error while routing");
        
      }

    })
  }

  const handlePostList = (user_id) => {
    
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
    .then(response => response.json())
    .then(json => setPosts(json))
  }

  const NotFound = () => <p>Sorry, nothing here</p>
  

  return (
    
      <Router>
       

        {/* <NotFound default /> */}
        <Login2 path="/login" handleLogin={handleLogin} />
       
        <PostList path="/" posts= {posts}  authUser={authUser} path="/" />
       
      </Router>
      
    
  );
}

export default App;
