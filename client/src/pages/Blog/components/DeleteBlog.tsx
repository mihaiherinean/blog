import { Button } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDeleteBlogMutation } from '../../../hooks/useDeleteBlogMutation'
import { IBlog } from '../../../types/IBlog';


interface IDeleteBlogProp{
  blog: IBlog;
}

function DeleteBlog({blog}:IDeleteBlogProp) {
  const {isLoading, mutate: deleteBlog} = useDeleteBlogMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      deleteBlog({id: blog._id})
      navigate(`/categorie/${blog.category}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" loading={isLoading}>Sterge blog</Button>
    </form>
  )
}

export default DeleteBlog