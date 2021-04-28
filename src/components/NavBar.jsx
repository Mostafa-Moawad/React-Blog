import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "@reach/router";



export default function NavBar({loggedIn}) {
   if(localStorage.getItem("userName")){

       loggedIn = true

   }else{

       loggedIn = false
   }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" link_to="/">Blog</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            {loggedIn  ? (
               <> 
                 <li className="nav-item active">
                     <Link className="nav-link" to="/home"> {localStorage.getItem("userName")}</Link>
                </li>
                <li className="nav-item active">
              
                    <Link className="nav-link"
                        to='/createpost'
                    >
                        Create Post
                    </Link>
                </li> 

                <li className="nav-item active">
                    <Link className="nav-link"
                        to='/logout'
                    >
                        Logout
                    </Link>
                    </li>
                </>
                ) : (

                    <>
                    <li className="nav-item active">
                    <Link className="nav-link"
                        to='/login'
                    >
                        Login
                    </Link>
                    </li>
                    
                    </>
                )}
            
            </ul>
        </div>
        </nav>
    )
}
