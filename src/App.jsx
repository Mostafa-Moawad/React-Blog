import './App.css';
import './styles.css';
import {useState } from "react"
import {PostItem} from "./components/PostItem"
import {UserInput} from "./components/UserInput"
import {CommentItem} from "./components/CommentItem"
import PostList from './components/PostList';
import { Login2 } from './components/Login2';
import { navigate, Router } from "@reach/router";


function App() {

  
  const [posts, setPosts] = useState([])
  const [authUser, setAuthUser] = userState([])
  
  const handleLogin = (userEmail,userName) => {
    fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}&email=${userEmail}`)
    .then(response => response.json())
    .then(fetchedUser => {
      if(fetchedUser.length>0)
      {   
          setAuthUser(fetchedUser)
          console.log(fetchedUser[0].id + " userid");  
          navigate("/")
      }
      else{
        console.log("error while routing");
        navigate("/login")
      }

    })
  }

  const handlePostList = (user_id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${authUser[0].id}/posts`)
    .then(response => response.json())
    .then(json => setPosts(json))
  }
  
  return (
    <Router>
      <Login2 path="/login" handleLogin={handleLogin} >
        <div className="App">
        <h1>User Posts</h1>
        {/* <UserInput handlePostList = {handlePostList} /> */}
        <PostList posts= {posts} handlePostList={handlePostList} />
        </div>
      </Login2>
    </Router>
  );
}

export default App;
