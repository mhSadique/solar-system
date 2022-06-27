import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import Text from '../components/text/text';

const CreatePost = ({ navigation }) => {

    const createPost = () => {
        new Promise((resolve, reject) => {
            resolve({ data: [34, 454] })
        })
            .then((data) => {
                console.log(data);
                navigation.navigate({
                    name: 'ShowPost',
                    params: { postId: 3534 },
                    merge: true
                })
            })
            .catch(err => {
                console.log(err);
            })
    };
    return (
        <View>
            <Text>
                Create your post here
            </Text>
            <Button title='Create Post' onPress={createPost} />
        </View>
    );
};

export default CreatePost;