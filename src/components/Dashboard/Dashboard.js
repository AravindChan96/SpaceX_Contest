import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import  NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Rockets from '../Rockets/Rockets';
import { Route, Switch, Redirect} from 'react-router';
import classes from './Dashboard.module.css';


const Dashboard = () => (
    <div className={classes.Dashboard}>
        <AppBar className={classes.TopBar} color='primary' position='static'>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <Typography variant='h6'>
                            Dashboard
                        </Typography>
                    </Grid>
                    <Divider className={classes.Divider} variant="middle" />
                    <Grid item>
                        <NavigationItems />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        <div className={classes.Content}>
            <Switch>
                <Redirect from='/' to='/rockets' exact />
                <Route path='/rockets' component={Rockets} />
                <Route path='/satellites' component = {null} />
            </Switch>
        </div>
    </div>
);

export default Dashboard;