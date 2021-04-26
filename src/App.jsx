import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

import {useState } from "react"
import {PostItem} from "./components/PostItem"
import {UserInput} from "./components/UserInput"
import {CommentItem} from "./components/CommentItem"
import PostList from './components/PostList';
import CommentList from './components/CommentList';
import { Login2 } from './components/Login2';
import { navigate, Router } from "@reach/router";
import { UserContext } from "./UserContext";
import CreatePost from "./components/CreatePost";
import NavBar from "./components/NavBar";



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

          
          navigate("/home")
      }
      else{
        console.log("error while routing");
        navigate("/")
        
      }

    })
  }

  const handlePostList = (user_id) => {
    
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
    .then(response => response.json())
    .then(json => setPosts(json))
  }

  return (

    <div className="container">


        {authUser.length>0 ? (
          <NavBar authUser={authUser} />
        ) : (
          <br/>
        )}
        
          <Router>
          
       
        
        <Login2 path="/" handleLogin={handleLogin} />
       
        <PostList path="/home" posts= {posts}  authUser={authUser}  />

        <CreatePost path="/createpost" posts= {posts}  authUser={authUser}  />

        <CommentList path="/comments"  authUser={authUser}  />

        <Login2 default handleLogin={handleLogin} />
       
      </Router>

      </div>
      
    
  );
}

export default App;
