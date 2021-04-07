import logo from './logo.svg';
import './App.css';
import CenteredGrid  from './card';
import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Product} from './Product';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import { Redirect } from 'react-router';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import { addToCart } from './action';
import Cart from './cart';
import {Cartitem} from './cartitem';
import {Login} from './login';
//import Checkout from './checkout';
import AlertDialog from './checkout';
import BackToTop from './prem'


function App() {
  
  const [product, setProduct] = useState([
    {
      "id": 1,
      "images":"./images/Haldiram.jpg",
      "sku": 18644119330491312,
      "title": "Haldiram Bhujiya",
      "priceBeforDiscount": 80,
      "priceAfterDiscount":72,
      "isFreeShipping": false,
     // "count":1
    },

    {
      "id": 2,
      "images":"./images/Gulab jamun.png",
      "sku": 11854078013954528,
      "title": "Gulab jamun",
      "priceBeforDiscount": 340,
      "priceAfterDiscount":300,
      "isFreeShipping": false,
      //"count":1
    },

    {
      "id": 3,
      "images":"./images/medimix.jpg",
      "sku": 876661122392077,
      "title": "Medimix soap",
      "priceBeforDiscount": 155,
      "priceAfterDiscount":140,
      "isFreeShipping": false,
     // "count":1
    },

    {
      "id": 4,
      "images":"./images/rasugula.jpg",
      "sku": 9197907543445677,
      "title": "Rasgulla",
      "priceBeforDiscount": 30,
      "priceAfterDiscount":28,
      "isFreeShipping": false,
      //"count":1
    },

    {
      "id": 5,
      "images":"./images/safola.jpg",
      "sku": 10547961582846888,
      "title": "Safola Oil",
      "priceBeforDiscount": 200,
      "priceAfterDiscount":150,
      "isFreeShipping": false,
      //"count":1
    },

    {
      "id": 6,
      "images":"./images/surf excel.jpg",
      "sku": 6090484789343891,
      "title": "Surf Excel",
      "priceBeforDiscount": 160,
      "priceAfterDiscount":145,
      "isFreeShipping": false,
      //"count":1
    },
    // {
    //   "id": 1,
    //   "images":"./images/surf excel.jpg",
    //   "sku": 18644119330491312,
    //   "title": "Gemini Oil",
    //   "priceBeforDiscount": 100,
    //   "priceAfterDiscount":90,
    //   "isFreeShipping": false,
    //  // "count":1
    // },

    // {
    //   "id": 2,
    //   "images":"./images/krishana.jpg",
    //   "sku": 11854078013954528,
    //   "title": "Gulab jamun",
    //   "priceBeforDiscount": 340,
    //   "priceAfterDiscount":300,
    //   "isFreeShipping": false,
    //   //"count":1
    // },

    // {
    //   "id": 3,
    //   "images":"./images/krishana.jpg",
    //   "sku": 876661122392077,
    //   "title": "Medimix soap",
    //   "priceBeforDiscount": 45,
    //   "priceAfterDiscount":35,
    //   "isFreeShipping": false,
    //  // "count":1
    // },

    // {
    //   "id": 4,
    //   "images":"./images/krishana.jpg",
    //   "sku": 9197907543445677,
    //   "title": "Rasgulla",
    //   "priceBeforDiscount": 500,
    //   "priceAfterDiscount":400,
    //   "isFreeShipping": false,
    //   //"count":1
    // },

    // {
    //   "id": 5,
    //   "images":"./images/saffola.png.jpg",
    //   "sku": 10547961582846888,
    //   "title": "Safola Oil",
    //   "priceBeforDiscount": 200,
    //   "priceAfterDiscount":150,
    //   "isFreeShipping": false,
    //   //"count":1
    // },

    // {
    //   "id": 6,
    //   "images":"./images/krishana.jpg",
    //   "sku": 6090484789343891,
    //   "title": "Surf Excel",
    //   "priceBeforDiscount": 90,
    //   "priceAfterDiscount":70,
    //   "isFreeShipping": false,
    //   //"count":1
    // }
  ]);
  
  
  const [item, setItems] = useState([]);

  let [count, setCount] = useState(0);

  let [price, setPrice] = useState(0);

  const [open, setOpen] = React.useState(false);


 const addToCart=(value)=>{
 
  console.log(value);
  value.count=1;
  value.totalprice=value.priceAfterDiscount
  setItems([...item,value]);
  console.log(item);
  
  }

  const deleteItem=(c)=>{

let krishana=item.filter(data=>data.title!==c.title)
console.log("after deleted item",krishana);
setItems(krishana);  //updating the Items
  }

 const increasecount=(a)=>{
console.log(a);
//count
let ram=item.filter(data=>{   //we can use map also here

  if(data.title==a.title){
    data.count=a.count+1  //hame data ke count ko update karna ,a ke count ke equal
    data.totalprice=a.count*a.priceAfterDiscount;
  }
  
  //setState see update se render method  call hota
  console.log("hi prem",count);
  return data;
})

setItems(ram); //so that increament should refelects at same time;

// console.log("after increasing item:",a); 
// console.log("after increasing final array of item:",item)


 
}
  const decreasecount=(b)=>{
  //count
   let shyam= item.filter(data=>{
      if(data.title==b.title){
        data.count=b.count-1
        data.totalprice=b.count*b.priceAfterDiscount
        //setItems([...data]);                               ////??????ask is it right way?
      }
      return data;
    })    
    setItems(shyam); //so that increament should refelects at same time;
    // console.log("after decreasing item:",b); 
    // console.log("after decreasing final array of item:",item)
  }

  const openDialog=()=>{
    
   }
  
  
  return (
   <Router>
    
   <CenteredGrid data={item} ></CenteredGrid>
   <Route exact path='/'>'
   {/* <BackToTop data={product}  onAdd={(value)=>addToCart(value)}></BackToTop> */}
   <Product data={product}  onAdd={(value)=>addToCart(value)} ></Product>
   </Route>
  
    <Route exact path='/cart' component={Cartitem}>
     
 <Cartitem data={item} cost={price}  onOpenDialog={()=>openDialog()}   onDelete={(c)=>deleteItem(c)} onIncreaseCount={(a)=>increasecount(a)} onDecreaseCount={(b)=>decreasecount(b)} ></Cartitem>
     
      </Route> 
      
      <Route exact path='/checkout' component={AlertDialog}> 
      
       </Route> 
    </Router>
  );
}

export default App;
