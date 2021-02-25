import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import {SocketContext, socket} from './context/socket'
import { UserProvider} from './context/username'
import {Content} from "./Content";




function App()  {

    return (
        <Router>
            <Switch>

                <UserProvider>
                <SocketContext.Provider value={socket}>
                    <Content />
                </SocketContext.Provider>
                </UserProvider>
            </Switch>
        </Router>

    );

}

export default App;