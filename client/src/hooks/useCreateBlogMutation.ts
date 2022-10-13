import { keyBuilder } from './../keyBuilder';
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postBlog } from "../service/blogService"

export const useCreateBlogMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(postBlog, {
        onSuccess: () => {
            queryClient.invalidateQueries(keyBuilder.blogss())
        }
    })

}
