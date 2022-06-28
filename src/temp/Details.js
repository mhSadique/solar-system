import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import Text from '../components/text/text';


const Details = ({ route, navigation }) => {
    const [count, setCount] = useState(0);
    const HeaderRightButton = () => <Button title='login' onPress={() => setCount(prev => prev + 1)} />

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderRightButton />
        });
    }, []);

    const { id, data } = route.params;
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black'
            }}
        >
            <Text>{count}</Text>
            <Text preset='h3' >Details Screen</Text>
            <Button title='Go to Home' onPress={() => navigation.push('Home')} />
            <Text preset='h3' >ID: {id}</Text>
            <Text preset='h3' >Data: {JSON.stringify(data)}</Text>
            <Button title='Update params' onPress={() => {
                navigation.setParams({
                    // id: 'custom id',
                    data: [654, 76, 788, 343, 545]
                })
            }} />
            <Button title='Change Title' onPress={() => {
                navigation.setOptions({ title: 'blah blah and blah' });
            }} />
        </View>
    );
};

export default Details;