import './App.css';
import './styles.css';
import {useState } from "react"
import {PostItem} from "./components/PostItem"
import {UserInput} from "./components/UserInput"
import {CommentItem} from "./components/CommentItem"
import PostList from './components/PostList';



function App() {

  
  const [posts, setPosts] = useState([])
    



  const handlePostList = (user_id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
    .then(response => response.json())
    .then(json => setPosts(json))
  }
  


  return (
    <div className="App">
      <h1>User Posts</h1>
      <UserInput handlePostList = {handlePostList} />

      <PostList posts= {posts} />
      
    </div>
  );
}

export default App;
