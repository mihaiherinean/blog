import { ICreateBlog } from './../types/ICreateBlog';
import { IBlogPagination } from './../types/IBlogPagination';
import axios from "axios";
import { IBlog } from "../types/IBlog";
import { IUpdateBlog } from '../types/IUpdateBlog';
import { IDeleteBlog } from '../types/IDeleteBlog';

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
})

export const getBlog = async(id: string) => {
    const {data} = await axiosInstance.get<IBlog>(`/blogs/${id}`)
    return data;
}

export const getBlogs = async(category: string) => {
    const {data} = await axiosInstance.get<IBlog[]>('/blogs')
    return data.filter((item) => item.category === category);
}

export const getAllBlogs = async() => {
    const {data} = await axiosInstance.get<IBlog[]>('/blogs')
    return data;
}

export const postBlog = async(req: ICreateBlog) => {
   const {data} = await axiosInstance.post('/blogs',req);
   return data;
}

export const updateBlog = async(req: IUpdateBlog) => {
    const {id, ...rest} = req;
    const {data} = await axiosInstance.put<IBlog>(`/blogs/${id}`, rest)
    return data;
}

export const deleteBlog = async(req: IDeleteBlog) =>{
    const {id} = req;
    const {data} = await axiosInstance.delete<IBlog>(`/blogs/${id}`);
    console.log(id);
    return data;
}


