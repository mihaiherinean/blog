import { Autocomplete, createStyles } from '@mantine/core';
import React from 'react'
import { Link } from 'react-router-dom';
import { IBlog } from '../../../types/IBlog'

interface IImportantBlogProp{
    blog: IBlog;
}

const useStyles = createStyles((theme)=> ({
    div: {
        width: "100%",
        maxWidth: '1000px',
        height: "100%",
        minHeight: '480px',
        borderRadius: '10px 0px 10px 0',
        boxShadow: '4px 4px 16px 5px #8888',
        '&:hover': {
            opacity: '0.7'
        }
    },
    image:{
        width: "100%",
        maxWidth: '1000px',
        objectFit: 'contain',
        transition: 'all 0.1s linear',
        overflow: 'hidden'
       
        
    },
    link: {
        textDecoration: "none",
        color: "black",
        textAlign: 'center',
    },
}))

function ImportantBlog({blog}:IImportantBlogProp) {
    const {classes} = useStyles();
  return (
    <>
    
    <Link to={blog._id} className={classes.link}>
    <div className={classes.div}>
    <h1 style={{backgroundColor: "red", color:"white"}}>De actualitate</h1> 
        <img src={blog.image} alt="Important Blog" className={classes.image}/>
        <h1 style={{width: "90%",  margin: 'auto'}}>{blog.title}</h1>
        <p style={{width: "90%", minHeight: '150px', margin: 'auto', marginTop: '10px'}}>{blog.short_description}</p>    
    </div>
    </Link>
    </>
  )
}

export default ImportantBlog