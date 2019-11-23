import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../../Components/BlogPostForm';

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);
    return (
        <View>
            <BlogPostForm 
                onSubmit={(title,content) => {
                    addBlogPost(title,content, ()=> navigation.navigate('Index'))
                }}/>
        </View>
    )
}

const styles=StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        height: 95,
        width: 400,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    }
});
export default CreateScreen;
