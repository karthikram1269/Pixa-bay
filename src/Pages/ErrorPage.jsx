import React from "react";

const ErrorPage = () => {
    return(
        <div style={{display:"inline",justifyContent :"center", textAlign : "center", margin:"10px"}}>
            <h1 style={{color: "red",backgroundColor:"whitesmoke", marginBottom:"20px"}}>Error 404: Page Not Found</h1>
            <p style={{margin:"10px"}}>The page you are looking for does not exist.</p>
            <p>Please go back to the <a href="/">home page</a>.</p>
        </div>
    )
}
export default ErrorPage

