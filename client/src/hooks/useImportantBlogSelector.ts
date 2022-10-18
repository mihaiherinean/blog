import {useSelector} from 'react-redux';
import { RootState } from '../store/store';

export const useImportantBlogSelector = () => {
    const blog = useSelector((state: RootState)=> state)
    return blog;
}