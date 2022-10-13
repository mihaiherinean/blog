import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../service/blogService";
import { keyBuilder } from "../keyBuilder";

export const useBlogsQuery = (category: string) => {
  return useQuery(keyBuilder.blogs(category), () => getBlogs(category));
};
