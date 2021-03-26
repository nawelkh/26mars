import React from 'react'
import {Grid,Box,Hidden,Container,Card,CardContent,Typography, AppBar,Tabs,Tab,InputBase,Tooltip,Avatar,Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Discussions from '../actualite/Discussions';
import NavBar from '../actualite/drawer';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { AvatarGroup } from '@material-ui/lab';
import { BrowserRouter, Switch, Route,Link} from 'react-router-dom'




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
       marginTop:20,
       padding:0,
      },
      gridList: {
        width: 500,
        height: 450
      
      },
    listeGroupes:{
        marginTop:55,
        padding:'0 85px ',
        

    },

    topimg:{

        backgroundImage: 'linear-gradient(to left, #ffea00, #ff9800)',
          borderRadius: 10,
          padding:' 0px 50px',
       },
       title:{
        fontFamily: '"Nunito", sans-serif',
        fontSize: '25px',
        color: '#ffffff',
        fontWeight: 800,
        marginBottom: '8px',
        marginTop:0,
       },


       groupe: {
        flexGrow: 1,
        fontWeight: 400,
        fontStyle: 'normal',   
        fontSize: 14,
        lineHeight: 1.8,
        padding: 0,
        margin: 0,   
        color: '#777D74',
        background: '#fafafb',
        overflow: 'hidden',
      },
      search: {
        flexGrow: 0.3,
        height: 35,
        top:4,
        position: 'relative',
        borderRadius: 15,
        backgroundColor:'#80808029',
        border:'1px solid #f1f1f1',
        width: 50,
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),

        },
       
      },
      
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: '#0e0e0e',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
      btnAdd:{
       height:40,
       width:40,
       marginLeft: 'auto',
      },
      image:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 60,
        width: 60,
        bottom: 45,
        boxShadow: '0 6px 21px 0 rgb(0 0 0 / 12%)',
        border: '3px solid white',
    
      },
      titre:{
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 20,
        textAlign: 'center',
        position:'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'auto',
        height:50,
        left: 80,
        right: 80,
        bottom: 170,
        color:'black',
        textDecoration:'none',
      }
}));




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}






export default function Groupes() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className={classes.groupe}>
              <Grid container spacing={2}>
             
             
              <Container maxWidth="lg" style={{padding:0 ,}} >

              <Grid item xs={9} sm={9} md={12} lg={12} className={classes.topimg} 
                        style={{ marginTop:115 , marginRight: 80 ,padding:'0 85px ',marginLeft: 80 }}
                        > 
                        <Box display='flex' >
                            
                           <Box style={{paddingTop:40}}>
                                            <h3 className={classes.title}>UniSwap Members </h3>
                            <p style={{color:'white',marginTop:0}}>Check what your friends have been up to!</p>
                            </Box>
                            <Hidden only={['xs',]}>

                            <img ms={2} src={process.env.PUBLIC_URL + '/images/i4.png'}
                            style={{marginLeft:'auto',marginBottom:'auto',height:180}} />
                            
                            </Hidden>

                    </Box>
       
                   </Grid>
      

              <Grid  >
                <NavBar/>
              </Grid>
           

              <Grid  item xs={12} sm={12} md={12} lg={12}  className={classes.listeGroupes} >
                  
              <AppBar position="static">
        <Tabs value={value} onChange={handleChange}  variant="fullWidth"    centered>
          <Tab label="Vos groupes" {...a11yProps(0)} />
          <Tab label="Vos pages" {...a11yProps(1)} /> 
        
        
        </Tabs>
      </AppBar>

       {/********partie groupes************ */}
      <TabPanel value={value} index={0} style={{backgroundColor:'#eff4fb'}}>
       <Card style={{borderRadius:15}}>
           <CardContent style={{padding:'10px 16px',display: 'flex'}}>
           <div className={classes.search} sm={2}>

                <div className={classes.searchIcon}>
                    <SearchIcon style={{color:'rgb(98 113 123)'}} />
                </div>

                <InputBase
                    placeholder="Search…"
                classes={{root: classes.inputRoot,input: classes.inputInput,}}inputProps={{ 'aria-label': 'search' }}
                    />

                </div>

                <Tooltip disableFocusListener title="Créer un groupe">
          
                    <Fab className={classes.btnAdd}>
                        <AddIcon />
                    </Fab>
                    </Tooltip>
                 
           </CardContent>
       </Card>




       <div className={classes.root}>

         



           <Card  className={classes.root}>
      <CardContent style={{ height: 350,padding:0,width:250,objectFit: 'cover'}}>
      <img  src={process.env.PUBLIC_URL + '/images/i5.jpg'}/>

      <Avatar className={classes.image}  src={process.env.PUBLIC_URL + '/images/i6.jpg'}/>

      <Link to={"/groupesPage"} className={classes.titre}>
          Master 2 ISI
      </Link>
     <AvatarGroup max={5} style={{bottom: 280 ,left: 40, position:'relative'}}>
      <Avatar src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d3.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/p2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d1.jpg'} />
    </AvatarGroup>
       
        <Box style={{position: 'relative',bottom: 230,left: 40}}>
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:10}}>
         240<br/> <span style={{fontWeight:500,}}>Postes</span>
        </Link>

        </Box>


        <Box style={{position: 'relative',bottom: 280,left: 145}}>
        
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:17}}>
         100<br/> <span style={{fontWeight:500,}}>Membres</span>
        </Link>
        </Box>
      </CardContent>
     
    </Card>




    <Card className={classes.root}>
    <CardContent style={{ height: 350,padding:0,width:250}}>
      <img style={{ height: 100,width:250,objectFit: 'cover'}} src={process.env.PUBLIC_URL + '/images/img11.jpeg'}/>
      <Avatar className={classes.image} src={process.env.PUBLIC_URL + '/images/avatar.jpg'}/>

       
      <a className={classes.titre}>
          Master 2 ISI
      </a>
     <AvatarGroup max={5} style={{bottom: 280 ,left: 40, position:'relative'}}>
      <Avatar src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d3.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/p2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d1.jpg'} />
    </AvatarGroup>
       
        <Box style={{position: 'relative',bottom: 230,left: 40}}>
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:10}}>
         240<br/> <span style={{fontWeight:500,}}>Postes</span>
        </Link>

        </Box>


        <Box style={{position: 'relative',bottom: 280,left: 145}}>
        
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:17}}>
         100<br/> <span style={{fontWeight:500,}}>Membres</span>
        </Link>
        </Box>
      </CardContent>
     
    </Card>




    <Card className={classes.root}>
    <CardContent style={{ height: 350,padding:0,width:250}}>
      <img style={{ height: 100,width:250,objectFit: 'cover'}} src={process.env.PUBLIC_URL + '/images/img11.jpeg'}/>
      <Avatar className={classes.image} src={process.env.PUBLIC_URL + '/images/avatar.jpg'}/>

       
      <a className={classes.titre}>
          Master 2 ISI
      </a>
     <AvatarGroup max={5} style={{bottom: 280 ,left: 40, position:'relative'}}>
      <Avatar src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d3.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/p2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d1.jpg'} />
    </AvatarGroup>
       
        <Box style={{position: 'relative',bottom: 230,left: 40}}>
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:10}}>
         240<br/> <span style={{fontWeight:500,}}>Postes</span>
        </Link>

        </Box>


        <Box style={{position: 'relative',bottom: 280,left: 145}}>
        
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:17}}>
         100<br/> <span style={{fontWeight:500,}}>Membres</span>
        </Link>
        </Box>
      </CardContent>
     
    </Card>


           </div>
      </TabPanel>




                          {/********partie pages************ */}



      <TabPanel value={value} index={1} style={{backgroundColor:'#eff4fb',}}>


      <Card style={{borderRadius:15}}>
           <CardContent style={{padding:'10px 16px',display: 'flex'}}>
           <div className={classes.search} sm={2}>

                <div className={classes.searchIcon}>
                    <SearchIcon style={{color:'rgb(98 113 123)'}} />
                </div>

                <InputBase
                    placeholder="Search…"
                classes={{root: classes.inputRoot,input: classes.inputInput,}}inputProps={{ 'aria-label': 'search' }}
                    />

                </div>

                <Tooltip disableFocusListener title="Créer une page">
          
                    <Fab className={classes.btnAdd}>
                        <AddIcon />
                    </Fab>
                    </Tooltip>
                 
           </CardContent>
       </Card>

      

       
      <div className={classes.root}>

         



<Card  className={classes.root} style={{borderRadius:10}}>

<CardContent style={{ height: 350,padding:0,width:250}}>
<div style={{ height: 100,width:250,}} />

      <Avatar  style={{height:90,width:90,left: 80,bottom: 70}} src={process.env.PUBLIC_URL + '/images/avatar.jpg'}/>

       
      <a className={classes.titre} style={{bottom:180,left: 80}}>
          Master 2 ISI
      </a>
    
       


       <Box style={{position: 'relative',bottom: 280,left: 20}}>
        
        <Link style={{right:20,fontWeight:600,color:'#3f414d',position:'relative', left:70}}>
         100 <span style={{fontWeight:500,color:'#777D74'}}>Likes</span>
        </Link>
       </Box>
       <Button style={{textTransform:'lowercase',bottom: 240,left: 80,backgroundColor:'#50b5ff',color:'white'}}>
           ne plus aimer 
       </Button>
      </CardContent>

</Card>


<Card  className={classes.root} style={{borderRadius:10}}>

<CardContent style={{ height: 350,padding:0,width:250}}>
<div style={{ height: 100,width:250,}} />

      <Avatar  style={{height:90,width:90,left: 80,bottom: 70}} src={process.env.PUBLIC_URL + '/images/avatar.jpg'}/>

       
      <a className={classes.titre} style={{bottom:180,left: 80}}>
          Master 2 ISI
      </a>
    
       


       <Box style={{position: 'relative',bottom: 280,left: 20}}>
        
        <Link style={{right:20,fontWeight:600,color:'#3f414d',position:'relative', left:70}}>
         100 <span style={{fontWeight:500,color:'#777D74'}}>Likes</span>
        </Link>
       </Box>
       <Button style={{textTransform:'lowercase',bottom: 240,left: 80,backgroundColor:'#50b5ff',color:'white'}}>
           ne plus aimer 
       </Button>
      </CardContent>

 </Card>


 <Card  className={classes.root} style={{borderRadius:10}}>

<CardContent style={{ height: 350,padding:0,width:250}}>
<div style={{ height: 100,width:250,}} />

      <Avatar  style={{height:90,width:90,left: 80,bottom: 70}} src={process.env.PUBLIC_URL + '/images/avatar.jpg'}/>

       
      <a className={classes.titre} style={{bottom:180,left: 80}}>
          Master 2 ISI
      </a>
    
       


       <Box style={{position: 'relative',bottom: 280,left: 20}}>
        
        <Link style={{right:20,fontWeight:600,color:'#3f414d',position:'relative', left:70}}>
         100 <span style={{fontWeight:500,color:'#777D74'}}>Likes</span>
        </Link>
       </Box>
       <Button style={{textTransform:'lowercase',bottom: 240,left: 80,backgroundColor:'#50b5ff',color:'white'}}>
           ne plus aimer 
       </Button>
      </CardContent>

</Card>



<Card  className={classes.root} style={{borderRadius:10}}>

<CardContent style={{ height: 350,padding:0,width:250}}>
<div style={{ height: 100,width:250,}} />

      <Avatar  style={{height:90,width:90,left: 80,bottom: 70}} src={process.env.PUBLIC_URL + '/images/avatar.jpg'}/>

       
      <a className={classes.titre} style={{bottom:180,left: 80}}>
          Master 2 ISI
      </a>
    
       


       <Box style={{position: 'relative',bottom: 280,left: 20}}>
        
        <Link style={{right:20,fontWeight:600,color:'#3f414d',position:'relative', left:70}}>
         100 <span style={{fontWeight:500,color:'#777D74'}}>Likes</span>
        </Link>
       </Box>
       <Button style={{textTransform:'lowercase',bottom: 240,left: 80,backgroundColor:'#50b5ff',color:'white'}}>
           ne plus aimer 
       </Button>
      </CardContent>

</Card>





</div>




      </TabPanel>
     


              </Grid>
           
              <Grid   >

                <Hidden only={['xs','sm']}>
                <Discussions/>     
                </Hidden>
        
             </Grid>

              </Container>


              </Grid>
        </div>
    )
}
