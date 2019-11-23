import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
        <Text style={styles.editTitle}>Edit Title:</Text>
        <TextInput style={styles.titleInput} value={title} onChangeText={newTitle => setTitle(newTitle)}/>

        <Text style={styles.editTitle}>Edit Content:</Text>
        <TextInput style={styles.contentInput} value={content} onChangeText={newContent => setContent(newContent)}/>

        <Button
            title={"Save Post"}
            onPress={() => onSubmit(title,content)}
        />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles=StyleSheet.create({
    editTitle: {
        fontSize: 18
    },
    titleInput: {
        height: 50,
        width: Dimensions.get('window').width,
        borderWidth: 1,
    },
    contentInput: {
        height: 100,
        width: Dimensions.get('window').width,
        borderWidth: 1,
    }
});
export default BlogPostForm;