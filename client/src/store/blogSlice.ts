import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBlog } from "../types/IBlog";


const initialState = {
    
        _id: '',
        title: '',
        image: '',
        content: '',
        category:'',
        short_description:'',
        createdAt: '',
        updatedAt: ''
    
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addImportantBlog: (state, action:PayloadAction<IBlog>) => {
            Object.assign(state, action.payload)
        }
    }
})

export default blogSlice.reducer;
export const {
    addImportantBlog
} = blogSlice.actions;