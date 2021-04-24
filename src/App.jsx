import './App.css';
import {useState, useEffect } from "react"
import {PostItem} from "./components/PostItem"



function App() {

  const [posts, setPosts] = useState([])
  // const [userId, setUserId] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
  }, [])
  
  return (
    <div className="App">
      <h1>User Posts</h1>

      { posts.map((post) => {
        // console.log(post);
       return <PostItem  key={post.id} post = {post} />
      }) }
    </div>
  );
}

export default App;
