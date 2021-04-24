import './App.css';
import {useState, useEffect } from "react"




function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
  }, [])
  
  return (
    <div className="App">
      <h1>User Posts</h1>

      { posts.map((post) => {
        console.log(post);
       return <ul key={post.userId}> 
       <li> {post.userId}</li>
        <li>{post.title}</li>
        <li> { post.body }</li> 
        </ul>
      }) }
    </div>
  );
}

export default App;
