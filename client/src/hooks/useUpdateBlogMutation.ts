import { keyBuilder } from './../keyBuilder';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBlog } from '../service/blogService'


export const useUpdateBlogMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateBlog, {
        onSuccess: blog => {
            queryClient.invalidateQueries(keyBuilder.blog(blog._id));
        }
    })
}