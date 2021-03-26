import React,{ useState }from 'react'
import { makeStyles,Divider,TextField ,Box,Grid,Typography, IconButton,Avatar,CardActions,CardContent,Card } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";



const useStyles = makeStyles((theme) => ({
  root: {
     
      '& > *': {
        margin: theme.spacing(1),
        height:50,
      
        marginLeft: 20,
        
      },
      '& .MuiInput-underline':{
         border:0,
      },
    },
   
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    
    },
    
    
    expand: {
     
      marginLeft: 'auto',
    
    },
   
   
  }));



export default function AddPub() {
  const classes = useStyles();
  
 
  const [emojiPickerState, SetEmojiPicker] = useState(false);
  const [message, SetMessage] = useState("");

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
     
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={emoji => SetMessage(message + emoji.native)}
      />
    );
  }

  function triggerPicker(event) {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }


    return (
  
    


<Card  style={{ marginBottom:20,}}>
     
      <CardContent>
      <Box display="flex"alignItems="center"
        style={{height:50
        }}
        
        >
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
          <TextField id="outlined-basic"  placeholder="Ajoutez un text"
              multiline 
              rows={3}
              className={classes.root}
              
              value={message}
              onChange={event => SetMessage(event.target.value)}
              
              /> 
      

        </Box>
       {emojiPicker}
        
      </CardContent>
      <Divider />
     
      <CardActions disableSpacing style={{ }}>
        <IconButton aria-label="add to favorites">
        <AddPhotoAlternateIcon  style={{ color: 'darkmagenta', }}/>

        </IconButton>
        <IconButton 
        
        onClick={triggerPicker}
        >
        <EmojiEmotionsIcon  style={{ color: '#ffc700', }}/>
      
        </IconButton>

       


        <IconButton aria-label="share">
        <AttachFileIcon  style={{ color: 'blue',}}/>
        </IconButton>
     
        <IconButton style={{ color: 'crimson',}}
          className={classes.expand}
          
        >
         <SendIcon/>
        </IconButton>
      </CardActions>
     
    </Card> 

   
     
  


    )
}
