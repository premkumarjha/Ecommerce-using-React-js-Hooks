import React, { Component, createFactory, useState, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Checkout from './checkout';
import AlertDialog from './checkout';
import Modal from '@material-ui/core/Modal';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontSize: 23
  },
  MuiTableCell: {
    color: "#000000",
    fontWeight: 'bold',
    lineHeight: 1.5,
  },

  cost: {
    position: 'relative',
    /* float: left; */
    float: 'right',
    paddingRight: 346,
    /* padding-bottom: 10px; */
    paddingTop: 24
  },
  
});

export function Cartitem(props) {

  const [rowss, setRowss] = useState([]);

  //const [open, setOpen] = React.useState(false);


  //const [open, setOpen] = React.useState(false);

  //props.
  


  const classes = useStyles();
  console.log(props)
  console.log("totalcost", props.cost)
  // let [count, setCount] = useState(0);
  let rows = props.data;


  console.log("just to know how ", rows)

  // const Checkout = () => {
  //   // props.onOpenDialog()
  //    setOpen(true)
  // }


  //as we have complete array ,so no need to calculate total cost on app.js,we can do samw here
  let totalprice = 0;
  rows.forEach(element => {

    totalprice += element.totalprice;
  });
  console.log("costye hai", totalprice)


  const deleteItem = (del) => {

    props.onDelete(del);

  }
  const increase = (a) => {
    props.onIncreaseCount(a);


  };

  const decrease = (b) => {
    //console.log("clicked-")
    props.onDecreaseCount(b)
  }
  //setRows(props.data)


  const body = (
    <h2>hellow</h2>
  );
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell className={classes.MuiTableCell} >Title</TableCell>
              <TableCell className={classes.MuiTableCell} align="right">Quantity</TableCell>
              <TableCell className={classes.MuiTableCell} align="right">PRICE</TableCell>
              <TableCell className={classes.MuiTableCell} align="right">ACTION</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (

              <TableRow >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" onClick={() => increase(row)}>
                    +
     </Button><input style={{ height: 28, width: 20 }} readOnly value={row.count}></input>
                  <Button variant="contained" color="secondary" onClick={() => decrease(row)}>
                    -
     </Button>

                </TableCell>
                <TableCell align="right">{row.priceAfterDiscount * row.count}</TableCell>
                <TableCell align="right">

                  <Button variant="contained" color="secondary" data-target="#myModal" onClick={() => deleteItem(row)}>Delete</Button>
                  {/* <Button variant="contained" color="secondary" onClick={()=>decrease(row)}>
       -
     </Button> */}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <strong className={classes.cost}>Total Price:{totalprice}</strong>

      <Link to='/checkout' style={{ textDecoration: 'none', color: 'white' }}>
        <Button style={{ marginLeft: 590, marginTop: 50 }} variant="contained" color="primary" >
          checkout
     </Button>
     </Link>

    </>
  )

}
