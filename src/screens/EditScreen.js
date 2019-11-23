import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../../Components/BlogPostForm';

const EditScreen = ({navigation}) => {
    const {state, editBlogPost} = useContext(Context);
    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <BlogPostForm 
            initialValues={{title, content}}
            onSubmit={(title, content) => {
                editBlogPost(blogPost.id, title, content, ()=> navigation.pop())
            }}
        />
    )
}

const styles = StyleSheet.create({
});
export default EditScreen;