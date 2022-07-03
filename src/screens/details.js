import React from 'react';
import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-data'
import { spacing } from '../theme/spacing';
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg/index';
import { EvilIcons } from '@expo/vector-icons';

const renderImage = (name) => {
    switch (name) {
        case 'mercury':
            return <MercurySvg />;
        case 'earth':
            return <EarthSvg />;
        case 'jupiter':
            return <JupiterSvg />;
        case 'mars':
            return <MarsSvg />;
        case 'neptune':
            return <NeptuneSvg />;
        case 'saturn':
            return <SaturnSvg />;
        case 'uranus':
            return <UranusSvg />;
        case 'venus':
            return <VenusSvg />;
    }
};

const Details = ({ route }) => {
    const { planetIndex } = route.params;
    const planetData = PLANET_LIST.find((planet, index) => index === planetIndex);
    const { name, color, description, rotationTime, radius, avgTemp, wikiLink, structure, surface } = planetData;
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} title={name.toUpperCase()} />
            <ScrollView>
                <View style={styles.imageView}>
                    {renderImage(name)}
                </View>
                <View style={styles.detailsView}>
                    <Text preset='h1' style={styles.planetName}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Pressable style={styles.source}>
                        <Text>Source: </Text>
                        <Text style={styles.wikipedia}>Wikipedia</Text>
                        <EvilIcons name="external-link" size={24} color="white" />
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacing[9]
    },
    detailsView: {
        marginTop: spacing[11],
        marginHorizontal: spacing[7],
        alignItems: 'center'
    },
    planetName: {
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        marginTop: spacing[6],
        lineHeight: 20
    },
    source: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    wikipedia: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginTop: spacing[7]
    }
})

export default Details;