import React from 'react';

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ROCKET = gql`
query Rocket($id: ID!){
    rocket(id: $id) {
      diameter {
        meters
      }
      height {
        meters
      }
      id
      name
      description
      country
      cost_per_launch
      active
    }
  }
`;

const Modal = ({open, handleClose, id}) => {

    const { loading, error, data } = useQuery(ROCKET, {
        variables: { id },
      });
    let content = '';
    if(loading){
        content = 'Loading';
    }
    if(data && data.rocket){
        content = 
        (
        <>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
          CLOSE X
        </Button>
      </DialogActions>
      <DialogTitle id="alert-dialog-title">{data.rocket.name}</DialogTitle>
        <span>{data.rocket.country}</span>
        <span>Cost/Launch: ${data.rocket.cost_per_launch }</span>
        <span>Height: {data.rocket.height.meters }M </span>
        <span>Diameter: {data.rocket.diameter.meters }M </span>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {data.rocket.description}
        </DialogContentText>
      </DialogContent>
      </>);
    }
    return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {content}
      </Dialog>
);}

export default Modal;