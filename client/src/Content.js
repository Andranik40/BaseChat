import React, {useContext} from "react";
import {Redirect, Route} from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import {UserContext} from "./context/username";



export const Content = () =>{
    let {user} = useContext(UserContext)


    return(
        <>
            <Route exact path="/">

                {!user ? <Login /> : <Redirect to='/chat'/>}
            </Route>
            <Route exact path='/chat'>

                {user ? <Chat /> : <Redirect to='/'/>}
            </Route>
            <Route path="*">
                {!user ? <Redirect to="/"/> : <Redirect to="/chat"/>}
            </Route>
        </>
    )
}