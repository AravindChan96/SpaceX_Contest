import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Rocket from './Rocket/Rocket';

const ROCKETS = gql`
{
  rockets {
    active
    description
    id
    name
    cost_per_launch
  }
}
`;

const Rockets = () => {
    
    const { loading, error, data } = useQuery(ROCKETS);

    let content = '';

    if(loading){
        content = <h4>Loading...</h4>
    }
    if(data){
    content = data.rockets.map(rocket => (
        <div key={rocket.id}>
            <Rocket name={rocket.name} des={rocket.description} cost={+rocket.cost_per_launch} active={rocket.active} />
        </div>
    ));
}

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
    //     console.log(data);
    
    return (<div>
        <h4>Active Rockets</h4>
        <Card>
            <CardContent>
                {content}
            </CardContent>
        </Card>
    </div>);
}

export default Rockets;
