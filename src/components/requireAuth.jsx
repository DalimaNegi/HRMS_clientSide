import { Navigate } from "react-router-dom";

function RequireAuth({children}){      //props
    let token = localStorage.getItem("auth_token");
    
    if(!token){
        return(
            <>
              <Navigate to="/" replace/> 
            </>
        );
    }

    return children;
}

export default RequireAuth;