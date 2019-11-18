import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons'

const IndexScreen = () => {
    const { state, addBlogPost} = useContext(Context);

    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <AntDesign style={styles.icon}  name='delete' />
                        </View>
                    )
                }}
            />
        </View>
    )
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