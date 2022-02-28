import React, { useState, useEffect } from "react";
import MainText from "components/MainText"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Layout from "layout"

import { userAPI } from "api/Users"

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        display: "flex",
        alignItems: "center",
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const Home = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const data = await userAPI.getUsers()
            setUsers(data)
        }
        )()
    }, [])


    return (
        <Layout>
            <MainText text='Home page' />
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center" spacing={3} >
                {
                    users.map(user => {
                        return (
                            <Grid item key={user.id}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            User Info <AccountCircleIcon />
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            {user.username}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            {user.name}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {user.phone}
                                            <br />
                                            {user.email}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Layout>
    );
}


export default Home;