import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
  // maxWidth: 345,
    flexGrow: 1,
    display: "inline-block"

  },
  media: {
    height: 140,
  },
});


export function Product(props) {
  const classes = useStyles();

  console.log(props.abc)
  const addProduct = (value) => {
    console.log(props);
    props.onAdd(value);
  }

  const { data } = props;
  return (
    <div  >
      <Grid container spacing={6}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} style={{marginTop: 50,
    marginBottom:50}}>

      {data.map(person => (
        <Card style={{width:"234px",
          paddingLeft: "35px",
          paddingTop:"20px",
          marginBottom: "20px",marginRight:"20px"}} className={classes.root}>
          <CardActionArea>
            <img src={person.images} alt="Image not found" style={{
              paddingRight: "30px",
              paddingleft: "66px",
              paddingtop: "20px",
              width:"200px",
               height:"200px"
            }} ></img>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {person.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span>MRP:</span> &#8377;<span style={{ paddingLeft: 6, textDecoration: "line-through" }}> {person.priceBeforDiscount}</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span style={{ fontWeight: 500 }}>Price:</span> &#8377;<span style={{ paddingLeft: 6, fontWeight: 500 }}> {person.priceAfterDiscount}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" style={{ backgroundColor: 'green', color: 'white',marginLeft:"26px" }} onClick={() => addProduct(person)}>
              Add Cart
        </Button>
          </CardActions>
        </Card>
      ))}

      </Grid>
      <Grid item xs={2}></Grid>
     
      </Grid>
    </div>
  );
}