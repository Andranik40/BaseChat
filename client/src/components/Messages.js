import React, {useContext, useEffect, createRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {UserContext} from "../context/username";


const Messages = (props) => {
    let cont = createRef()
    const {classes} = props;

    let {user} = useContext(UserContext)
    useEffect(() => {
        cont.current.scrollTop = cont.current.scrollHeight
    }, [props.message])






    return (
        <div>
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={9}  >
                    <List className={classes.messageArea} ref={cont}>
                        {props.message.map((element, index) => {
                                if (element.name === user) {
                                    return (
                                        <ListItem key={index} className={classes.myMessagePosition}>
                                            <Grid container className={classes.myMessage}>
                                                <Grid item xs={12}>
                                                    <ListItemText align="right"
                                                                  primary={element.name}></ListItemText>
                                                    <ListItemText align="right"
                                                                  primary={element.message}></ListItemText>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <ListItemText align="right"
                                                                  secondary="09:30"></ListItemText>
                                                </Grid>
                                            </Grid>
                                        </ListItem>)
                                }else {
                                    return (
                                        <ListItem key={index} className={classes.otherMessagePosition}>
                                            <Grid container className={classes.otherMessage}>
                                                <Grid item xs={12}>
                                                    <ListItemText align="left" primary={element.name}></ListItemText>
                                                    <ListItemText align="left" primary={element.message}></ListItemText>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <ListItemText align="left" secondary="09:31"></ListItemText>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                    )
                                }
                            }
                        )
                        }
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}

export default Messages;