import { createStyles } from '@mantine/core'
import React from 'react'
import {FaTwitter, FaFacebook, FaYoutube} from 'react-icons/fa'

const useStyles = createStyles((theme)=> ({
  footer: {
      width:'100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '45px',
     
      // "& > :nth-child(2)":{
      //   transition: 'all 0.1s linear',
      //   "&:hover": {
      //   transform:'scale(1.2)',
      //   }
      // }
      "& > *":{
        transition: 'all 0.1s linear',
        "&:hover": {
        transform:'scale(1.2)',
        }
      }

    },
    mainfooter: {
      width: '100%',
      height: '100%',
      minHeight: '250px',
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '50px',
      fontSize: '20px',
    }
  
}))


function Footer() {
  const {classes} = useStyles();
  
  return (
    <>
    <div className={classes.mainfooter}>
      <div className={classes.footer}>
       <FaTwitter size={35} color="#1DA1F2"/>
       <FaFacebook size={35} color="#4267B2"/>
       <FaYoutube size={35} color="#FF0000"/>
       </div>
       <p>Copyright 2022 iBlog</p>
    </div>
   
    </>
  )
}

export default Footer