import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';

const Details = () => {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} />
            <Text>Details</Text>
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