import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./styles.css";

export function Home(props) {
    const { accessToken } = useAuth();
    const history = useHistory();
        
    if (accessToken) {
        return <Redirect to="/dashboard" />        
    }



    return (
      <>        
        <h1 className="home-title">Home</h1>
        <hr/>
        <p>{props.text}</p>     
        <button className="btn btn1" onClick={() => history.push("/login")}>Logar</button>  
      </>
    );  
}