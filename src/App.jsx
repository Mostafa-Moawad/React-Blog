import './App.css';
import {useState } from "react"
import {PostItem} from "./components/PostItem"
import {UserInput} from "./components/UserInput"



function App() {

  const [posts, setPosts] = useState([])
  
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  //   .then(response => response.json())
  //   .then(json => setPosts(json))
  // }, [])
  

  const handlePostList = (user_id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
    .then(response => response.json())
    .then(json => setPosts(json))
  }
  

  return (
    <div className="App">
      <h1>User Posts</h1>
      <UserInput handlePostList = {handlePostList} />
      { posts.map((post) => {
       return <PostItem  key={post.id} post = {post} />
      }) }
    </div>
  );
}

export default App;
