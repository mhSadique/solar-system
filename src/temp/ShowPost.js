import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import Text from '../components/text/text';

const ShowPost = ({ route, navigation }) => {

    useEffect(() => {
        // DO SOMETHING
    }, [route.params?.postId]);

    return (
        <View>
            {
                route.params?.postId ?
                    <Text>
                        {route.params.postId}
                    </Text> :

                    <Button title='Create Post' onPress={() => navigation.navigate('CreatePost')} />
            }
        </View>
    );
};

export default ShowPost;