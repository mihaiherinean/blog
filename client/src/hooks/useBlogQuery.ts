import { useQuery } from '@tanstack/react-query';
import { keyBuilder } from './../keyBuilder';
import { getBlog } from './../service/blogService';

export const useBlogQuery = (id: string) => {
    return useQuery(keyBuilder.blog(id),()=> getBlog(id));
}