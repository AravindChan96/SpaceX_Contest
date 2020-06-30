import React,{useState} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Rocket from './Rocket/Rocket';
import Modal from '../Modal/Modal';

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

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    const handleOpen = ( id ) => {
        setModalOpen(true);
        setSelectedId(id);
    }

    const handleClose = () => {
        setModalOpen(false);
    }
    
    const { loading, error, data } = useQuery(ROCKETS);

    let content = '';

    if(loading){
        content = <h4>Loading...</h4>
    }
    if(data){
    content = data.rockets.map(rocket => (
        <div key={rocket.id}>
            <Rocket id={rocket.id}
            name={rocket.name}
            des={rocket.description}
            cost={+rocket.cost_per_launch}
            active={rocket.active}
            click={handleOpen} />
        </div>
    ));
}
    
    return (<div>
        <h4>Active Rockets</h4>
        <Card>
            <CardContent>
                {content}
            </CardContent>
        </Card>
        <Modal open={modalOpen} handleClose={handleClose} id={selectedId} />
    </div>);
}

export default Rockets;
