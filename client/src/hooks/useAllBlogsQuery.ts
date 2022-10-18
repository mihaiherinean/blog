import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../service/blogService";
import { keyBuilder } from "../keyBuilder";

export const useAllBlogsQuery = () => {
  return useQuery(keyBuilder.allblogs(), () => getAllBlogs());
};
