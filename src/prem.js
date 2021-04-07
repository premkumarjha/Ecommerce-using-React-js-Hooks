// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles,fade } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import Zoom from '@material-ui/core/Zoom';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import MailIcon from '@material-ui/icons/Mail';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
// import Badge from '@material-ui/core/Badge';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: 'fixed',
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//         textAlign:'center',
//       flexGrow: 1,
     
//       //display: 'none',
//   // [theme.breakpoints.up('sm')]: {
//   //   display: 'block',
//   //   }
//   },
//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: fade(theme.palette.common.white, 0.15),
//       '&:hover': {
//         backgroundColor: fade(theme.palette.common.white, 0.25),
//       },
//       marginRight: theme.spacing(2),
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
      
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//     toolbarcolor:{
      
//       backgroundColor:'#002984'
//     },
//     cartposition:{
//       marginRight:20,

//     }
// }));

// function ScrollTop(props) {
//   const { children, window } = props;
//   const classes = useStyles();
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" className={classes.root}>
//         {children}
//       </div>
//     </Zoom>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default function BackToTop(props) {
//     const classes = useStyles();
//     console.log(props)
//   return (
//     <React.Fragment>
//         <div className={classes.root}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//       <CssBaseline />
//       <AppBar position="static" className={classes.toolbarcolor}   >
//         <Toolbar>
//         <Grid item xs={5}><Typography variant="h6" className={classes.title}>
//            Jay Ma Kali Shopping Cart
//           </Typography></Grid>
//           <Grid item xs={4}>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               style={{ color: 'white' }}
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//         </Grid>
//         <Grid item xs={4} >
//         <Link to='/cart' style={{textDecoration:'none',color:'white'}}>
//         <Button aria-label="show 4 new mails" color="inherit" >
//               <Badge badgeContent={props.data.length} color="secondary">
//                 <ShoppingCartOutlinedIcon />
//               </Badge>
//             </Button>
//             </Link>
//           {/* <Button color="inherit" onClick={Cart}>Login</Button> */}
//           <Link to='/login' style={{textDecoration:'none',color:'white'}}>
//           <Button color="inherit" >Login</Button>
// </Link>
//         </Grid>
//         </Toolbar>
//       </AppBar>
//       </Grid>
//       </Grid>
          
//           </div>
//       <Toolbar id="back-to-top-anchor" />
     
//       <ScrollTop {...props}>
//         <Fab color="secondary" size="small" aria-label="scroll back to top">
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop>
//     </React.Fragment>
//   );
// }