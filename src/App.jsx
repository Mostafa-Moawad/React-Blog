import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState } from "react"
import PostList from './components/PostList';
import CommentList from './components/CommentList';
import { Login2 } from './components/Login2';
import { navigate, Router } from "@reach/router";
import CreatePost from "./components/CreatePost";
import NavBar from "./components/NavBar";
import AuthGuard from "./components/AuthGuard";
import Logout from "./components/Logout";



function App() {

  
  const [authUser, setAuthUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  
  const handleLogin = (userEmail,userName) => {
    fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}&email=${userEmail}`)
    .then(response => response.json())
    .then(fetchedUser => {
      if(fetchedUser.length>0)
      {   
          setAuthUser(fetchedUser)
          localStorage.setItem("userId",fetchedUser[0].id)
          localStorage.setItem("userName",fetchedUser[0].username)
          setLoggedIn(true)
          
          
          navigate("/home")
      }
      else{

        alert("Hello\nThere is an error in your log in info.\nplease check jsonplaceholder website for users data");
        console.log("error while routing");
        navigate("/login")
        
      }

    })
  }

  

  
  return (

    <div className="container">


        
        
        <NavBar loggedIn={loggedIn} />
        <Router>
          
       
        
        

        <AuthGuard path="/" >
          
            <PostList path="/home"   />

            <CreatePost path="/createpost"   />

            <CommentList path="/comments"  authUser={authUser}  />

        </AuthGuard>

        <Login2 path="/login" handleLogin={handleLogin} />
        <Logout path="/logout" setLoggedIn={setLoggedIn} />
       
      </Router>

      </div>
    
  );
}

export default App;
