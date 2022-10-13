import { createStyles } from '@mantine/core'
import React from 'react'
import {FaTwitter, FaFacebook, FaYoutube} from 'react-icons/fa'

const useStyles = createStyles((theme)=> ({
  footer: {
      width:'100%',
      height:'250px',
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

    }
  
}))


function Footer() {
  const {classes} = useStyles();
  
  return (
    <>
    <div className={classes.footer}>
      
       <FaTwitter size={25} color="#1DA1F2"/>
       <FaFacebook size={25} color="#4267B2"/>
       <FaYoutube size={25} color="#FF0000"/>
       
    </div>
   
    </>
  )
}

export default Footer