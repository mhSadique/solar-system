import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-data'

const Details = ({ route }) => {
    const { planetIndex } = route.params;
    const planetData = PLANET_LIST.find((planet, index) => index === planetIndex);
    const { name, color, description, rotationTime, radius, avgTemp, wikiLink, structure, surface } = planetData;
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} title={name.toUpperCase()} />
            <View>
                <Text> Planet Name: {name}</Text>
                <Text> Color: {color}</Text>
                <Text> Rotation Time: {rotationTime}</Text>
                <Text> Radius: {radius}</Text>
                <Text> Average Temperature: {avgTemp}</Text>
                <Text> Wikilink: {wikiLink}</Text>
                <Text> Description: {description}</Text>
                <Text> Surface: {surface}</Text>
                <Text> Structure: {structure}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
})

export default Details;