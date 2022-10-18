import { IBlog } from "./types/IBlog";

export const keyBuilder = {
    blogs: (category: string) => ['blogs', category],
    blog: (id: string) => ['blog',id],
    blogss: () => ['blogs'],
    allblogs: () => ['allblogs'],
}