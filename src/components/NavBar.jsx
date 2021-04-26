import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "@reach/router";



export default function NavBar({authUser}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" link_to="/">Blog</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                {/* <a className="nav-link" link_to="/"> {authUser[0].name} </a> */}
                <Link className="nav-link" to="/"> {authUser[0].name}</Link>
            </li>
            <li className="nav-item active">
               
                <Link className="nav-link"
                    to='/createpost'
                >
                   Create Post
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    )
}
