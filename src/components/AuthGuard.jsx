import { Redirect } from "@reach/router";

export default function AuthGuard({children}) {
    console.log(children);

    return (
        <>
            {
                localStorage.getItem("userId") ? children : <Redirect noThrow  to="/login" />
            }
            
        </>
    )
}
