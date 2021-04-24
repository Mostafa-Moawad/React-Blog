
import './App.css';
import {useState } from "react"

function App() {

  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      }
  ])
  return (
    <div className="App">
      <h1>User Posts</h1>

      { posts.map((elem) => {
        console.log(elem);
       return <ul key={elem.userId}> <li> {elem.userId}</li> <li> { elem.body }</li>  </ul>
      }) }
    </div>
  );
}

export default App;
