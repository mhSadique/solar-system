import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from './text/text';

const PlanetHeader = () => {
    return (
        <View style={styles.container}>
            <Text preset='h2'>The Planets</Text>
        </View>
    );
};

export default PlanetHeader;

const styles = StyleSheet.create({
    container: {
        padding: spacing[7],
        borderBottomWidth: 0.5,
        borderBottomColor: colors.white
    }
})