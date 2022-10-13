import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { keyBuilder } from '../keyBuilder';
import { deleteBlog } from '../service/blogService';

export const useDeleteBlogMutation = () =>{
    const queryClient = useQueryClient();
    return useMutation(deleteBlog, {
        onSuccess: () => {
            queryClient.invalidateQueries(keyBuilder.blogss());
        }
    })
}