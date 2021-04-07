import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Modal from '@material-ui/core/Modal';
import  { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function AlertDialog(props) {

  console.log(props);

  const [open, setOpen] = React.useState(true);   //true karne se jaise hi checkoutpe click karega waise hi usko pop dikhega..

  const handleClose = () => {
    setOpen(false);
    // <Redirect to='/'  />
    console.log(props)
  };

  return (
    <div >
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <strong style={{color:'green'}}>Thank you for your Shopping</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <Button  color="secondary" onClick={handleClose}  autoFocus>
            Close
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>

    


  );
}