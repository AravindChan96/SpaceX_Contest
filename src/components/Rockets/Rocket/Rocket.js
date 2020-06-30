import React from 'react';
import classes from './Rocket.module.css';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Rocket = (props) => (
    <Card className={classes.Rocket}>
        <CardContent className={classes.Card}>
            <div className={classes.Content}>
                <p style={{margin:'3px 3px 0 3px'}}><strong> {props.name} </strong></p>
                <Divider orientation="vertical" flexItem />
                <p style={{margin:'3px 3px 0 3px'}}>$ {props.cost/1000000}m per launch</p>
            </div>
                <p>{props.des.substring(0,50)}...</p>
        </CardContent>
        <Button disabled={props.active} onClick={() => props.click(props.id)} className={classes.Button} variant="contained" color="primary">More Info</Button>
    </Card>
);

export default Rocket;