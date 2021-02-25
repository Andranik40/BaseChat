import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import {SocketContext} from "../context/socket";
import {UserContext} from "../context/username";
import Messages from "./Messages";

const useStyles = makeStyles({
    table: {

        minWidth: 650,
    },
    chatSection: {
        display: 'flex',
        justifyContent: 'center',

        width: '100%',
        maxHeight: '100vh'
    },
    headBG: {
        maxWidth: '100vh',

        backgroundColor: '#e0e666e1'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },

    messageArea: {
        height: '80vh',
        overflowY: 'auto',

    },
    myMessagePosition: {
        justifyContent: "flex-end"
    },
    otherMessagePosition: {
        justifyContent: "flex-start"
    },
    myMessage: {
        padding: 2,
        textAlign: 'center',
        backgroundColor: '#80cbc4',
        width: "auto",
        borderRadius: '1vh',

    },
    otherMessage: {
        padding: 2,
        textAlign: 'center',
        backgroundColor: '#aed581',
        width: "auto",
        borderRadius: '1vh',

    },
});

const Chat = () => {
    const classes = useStyles();
    let [message, setMessage] = useState('')
    let [messageArray, setMessageArray] = useState([])
    const socket = useContext(SocketContext);
    let {user} = useContext(UserContext)
    useEffect(() => {

        socket.on('reSend', (newMessage) => {
            messageArray.push(newMessage)
            setMessageArray([...messageArray])



        })

    },[])




    function send() {
        if (message.split(' ').join('') !== '') {
            socket.emit('send', {name: user, message: message})
            setMessage('')
            console.log(message)
        }

    }

    return (

            <Grid container component={Paper} className={classes.chatSection} >
                <Grid item xs={9}  >

                    <Messages message={messageArray} classes={classes}/>
                    <Grid container style={{padding: '20px'}}>
                        <Grid item xs={11}>
                            <TextField
                                id="outlined-basic-email"
                                label="Type Something"
                                fullWidth
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}
                                onKeyDown={(e) => {e.keyCode === 13 && send()}}

                            />
                        </Grid>
                        <Grid
                            item xs={1}
                            align="right"
                            onClick={() => {
                                send()
                            }}
                        >
                            <Fab color="primary" aria-label="add">
                                <SendIcon/>
                            </Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

    );
}

export default Chat;