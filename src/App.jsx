import './App.css';
import './styles.css';
import {useState } from "react"
import {PostItem} from "./components/PostItem"
import {UserInput} from "./components/UserInput"
import {CommentItem} from "./components/CommentItem"
import PostList from './components/PostList';
import { Login2 } from './components/Login2';



function App() {

  
  const [posts, setPosts] = useState([])
    



  const handlePostList = (user_id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
    .then(response => response.json())
    .then(json => setPosts(json))
  }
  
  const handleLogin = (userEmail,userName) => {
    fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}&email=${userEmail}`)
    .then(response => response.json())
    .then(fetchedUser => {
      if(fetchedUser.length>0)
      {
          console.log(fetchedUser);  
          // navigate("/")

      }
      else{
        console.log("error while routing");
        // navigate("/login")
      }

    })
  }
  


  return (
    <div className="App">
      <h1>User Posts</h1>
      {/* <UserInput handlePostList = {handlePostList} /> */}
      <Login2 handleLogin={handleLogin} /> 
      <PostList posts= {posts} />
      
    </div>
  );
}

export default App;
