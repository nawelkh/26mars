import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Grid,Box,Hidden,Container,Typography, CardContent,Card,Avatar,GridList,GridListTile} from '@material-ui/core';
import Discussions from '../actualite/Discussions';
import NavBar from '../actualite/drawer';
import AddPub from "../actualite/addPub";
import Publication from '../actualite/publication'
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';




const useStyles = makeStyles((theme) => ({
  root: {
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
  root1: {
    marginBottom:20,
  },
  description:{
    color: '#646464',
    marginBottom: 30, 
    paddingLeft: 15,
    paddingRight: 15,
    fontSize:15,
  },

  groupInfo:{
    color: '#646464',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize:14,
  },
  details:{
    color: '#646464',
    fontSize:15,
    marginRight:10,
    fontWeight:600
  },
 
  gridList: {
    width: 245,
    height: 200,
   
  },

}));





function GroupesPage() {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <div className={classes.root}>
      <Grid container >
      
           <Container maxWidth="lg" style={{padding:0 ,}} >
       
          

       

        <Grid item lg={1} >
        <NavBar/>
        </Grid>

        <Grid item xs={9} sm={9} md={12} lg={12}xl={12}className={classes.topimg} 
                        style={{ marginTop:100, marginRight: 60 ,marginLeft: 60,height:250 ,marginBottom:20}} > 
                       
                            

                            <img ms={2} src={process.env.PUBLIC_URL + '/images/img12.jpg'}
                            style={{width:'100%',height:'100%',objectFit: 'cover',borderRadius:20}} />
 
                  
       
        </Grid>
      
      
                   <Grid item xs={12} style={{ marginTop:30,}} 
        >
         
          <Box display="flex" >
         

          <Grid item xs={7} sm={7} lg={7} style={{ marginRight: 25,marginLeft:55 }}>
            <Grid xs={12} sm={12} lg={12} >
              <AddPub />
              </Grid>
          
          <Publication/>
        </Grid>



        <Grid item xs={4} style={{ marginRight: 50,}}>




                                 {/****groupe info */}
       <Card className= {classes.root1} >
         <CardContent>
           <h6 style={{fontSize:17,fontWeight:700,marginTop: 10 ,marginBottom: 30,}}> Groupe Infos</h6>
           <Typography className={classes.description}>
             
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            
           </Typography>
           <Typography className= {classes.groupInfo}>

    

           </Typography>

         </CardContent>
       </Card>



                                {/***admin */}


                                <Card className= {classes.root1}>
         <CardContent>
           <h6 style={{fontSize:17,fontWeight:700,marginTop: 10 ,marginBottom: 30,}}> Administrateur de groupe</h6>
           <Box display='flex ' className={classes.admin}>
             
           <Avatar  style={{height:50,width:50,}} src={process.env.PUBLIC_URL + '/images/avatar.jpg'}/>

           <h6 style={{fontSize:15,fontWeight:600,marginTop: 10 ,marginBottom: 20,marginLeft:20}}>Julia Zessy</h6>

           </Box>
           

         </CardContent>
       </Card>


                                        {/***photos */}


       <Card className= {classes.root1}>
         <CardContent>
           <h6 style={{fontSize:17,fontWeight:700,marginTop: 10 ,marginBottom: 30,}}> Photo Gallery</h6>


           <GridList cellHeight={76}  className={classes.gridList} cols={3}>
        
            <img src={process.env.PUBLIC_URL + '/images/i9.jpg'}  />
            <img src={process.env.PUBLIC_URL + '/images/img.jpg'} />
            <img src={process.env.PUBLIC_URL + '/images/img5.jpg'} />
            <img src={process.env.PUBLIC_URL + '/images/img6.png'} />
       
      </GridList>
          
         </CardContent>
       </Card>





        </Grid>
        </Box>
        </Grid>





              
        <Grid item  >
        <Hidden only={['xs','sm']}>
        <Discussions/>     
        </Hidden>
      
           </Grid>
       
      </Container>
      </Grid>
 
      </div>

    
  );
}

export default GroupesPage;