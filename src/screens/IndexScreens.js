import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
    const { state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('BlogPost', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <AntDesign style={styles.icon}  name='delete' />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <AntDesign size={30} name='plus'/>
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 35
    }
});
export default IndexScreen;