import { Button, createStyles, Group, Modal } from '@mantine/core';
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useBlogQuery } from '../../hooks/useBlogQuery';
import DeleteBlog from './components/DeleteBlog';
import UpdateBlog from './components/UpdateBlog';
import { addImportantBlog } from '../../store/blogSlice';

const useStyles = createStyles((theme)=>({
  container: {
      width: '95%',
      margin: '0 auto',
      height: '100%',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'baseline',
      gap:'0.5rem',

  },
  title:{
      width:'100%',
  },
  image:{
    height:'100%',
    width: '100%', 
    maxHeight: '600px',
    objectFit: 'contain'
  
  },
  content:{
    width: '95%',
    wordBreak: 'break-word',
    fontSize: '20px',
    '@media (min-width:800px)': {
      fontSize: '25px',
    }
  }
}))

function Blog() {
  const {id} = useParams();
  const {classes} = useStyles();
  const {data: blog, isError, isLoading} = useBlogQuery(id || '');
  const [opened, setOpened] = useState(false);
  const dispatch = useDispatch();

  if (isLoading || !blog) {
    return <p>Loading...</p>
  }

  if (isError) {
    return (
      <div>
        <p>An error has occured</p>
      </div>
    )
  }

  const date = new Date(blog.createdAt);

  const handleAddImportant = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(addImportantBlog(blog));
  };
  
  
  return (
    <div className={classes.container}> 

    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Editeaza blogul"
      >
        <UpdateBlog blog={blog}/>
      </Modal>

        <Group>
        <Button onClick={() => setOpened(true)}>Editeaza blog</Button>
        <DeleteBlog blog={blog} />
        <Button color="orange" onClick={handleAddImportant}>De actualitate</Button>
        </Group>
      <h1 className={classes.title}>{blog.title}</h1>
      <p style={{fontWeight:'bold'}}>{date.toLocaleString('ro-RO',{ day:'numeric', year:'numeric', month:'long' })}</p>
      
      <img src={blog.image} className={classes.image} alt={blog.title} />
      <div className={classes.content}>
        <p>{blog.content}</p>

      </div>
    </div>
  )
}

export default Blog