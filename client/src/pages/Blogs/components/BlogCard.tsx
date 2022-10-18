import { Card, createStyles, Divider, Group, Image, Text } from '@mantine/core';
import React from 'react'
import { Link } from 'react-router-dom';
import { IBlog } from '../../../types/IBlog'
interface IBlogCardProp{
    blog: IBlog;
}
const useStyles = createStyles((theme)=> ({
  container: {
    width: '90%',
    height: '100%',
    maxHeight: '250px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems:'flex-start',
    borderBottom: '2px solid #f2f2f2f2',
    color: 'black',
    marginBottom:'15px',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '.3s all ease-in-out'
    }
  },
  title:{
    width: '70%',
    padding: 0,
    '@media (min-width: 800px)': {
      width: '30%',
    },
    
  },
  content:{
    display:'none',
    height: '100%',
    textOverflow: 'ellipsis',
    overflow:'hidden',
    '@media (min-width: 800px)': {
      display: 'block',
      width: '30%',
    },
  },
  image:{
    width: '30%',
    display: 'flex',
    '@media (min-width: 800px)': {
      width: '30%',
    },
    
  },
  h2:{
    fontSize: '20px',
    '@media (min-width: 800px)': {
      fontSize: '25px',
    },
  },
  

}))

function BlogCard({blog}:IBlogCardProp) {
  const {classes} = useStyles();
  const date = new Date(blog.createdAt);
  return (
    <Link to={`/${blog._id}`} style={{textDecoration: 'none'}}>
        <div className={classes.container}> 
            <div className={classes.title}>
              <h2 className={classes.h2}>{blog.title}</h2>
              <p style={{fontWeight:'bold'}}>{date.toLocaleString('ro-RO',{ day:'numeric', year:'numeric', month:'long' })}</p>
            </div>
              <p className={classes.content}>{blog.short_description}</p>
              <div className={classes.image}>
               <img src={blog.image} style={{width: '100%', maxHeight: "250px", height:'100%', objectFit:'cover'}}/>
               </div>
        </div>
    </Link>
  )
}

export default BlogCard