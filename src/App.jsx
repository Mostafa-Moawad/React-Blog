import './App.css';
import {useState, useEffect } from "react"
import {PostItem} from "./components/PostItem"
import {UserInput} from "./components/UserInput"



function App() {

  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
  }, [])
  

  const handlePostList = (user_id) => {
    setPosts(
      posts.filter(({userId})=>  userId === user_id )
    )
    
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
