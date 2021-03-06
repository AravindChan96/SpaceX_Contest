import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/rockets'>Rockets</NavigationItem>
        <NavigationItem link='/satellites'>Satellites</NavigationItem>
    </ul>
);

export default navigationItems;