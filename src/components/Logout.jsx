import { Redirect } from "@reach/router";

const Logout = ({setLoggedIn}) => {
    
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
     setLoggedIn(false)
    return (
        <div>
            <Redirect noThrow to="/login" />
        </div>
    )
}

export default Logout;