import React from 'react';
import { View, ScrollView, StyleSheet, Pressable, Linking } from 'react-native';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-data'
import { spacing } from '../theme/spacing';
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg/index';
import { EvilIcons } from '@expo/vector-icons';

const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.planetSection}>
            <Text preset='small' style={{ textTransform: 'uppercase' }}>
                {title}
            </Text>
            <Text preset='h2'>
                {value}
            </Text>
        </View>
    )
};

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

    const onPressLink = (wikiLink) => {
        Linking.openURL(wikiLink);
    }

    const { planetIndex } = route.params;
    const planetData = PLANET_LIST.find((planet, index) => index === planetIndex);
    const { name, color, description, rotationTime, radius, avgTemp, wikiLink, structure, surface, revolutionTime } = planetData;
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
                    <Pressable style={styles.source} onPress={() => onPressLink(wikiLink)} >
                        <Text>Source: </Text>
                        <Text style={styles.wikipedia}>Wikipedia</Text>
                        <EvilIcons name="external-link" size={24} color="white" />
                    </Pressable>
                </View>

                <View style={{ height: 40 }} />

                <PlanetSection title="ROTATIONtIME" value={rotationTime} />
                <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
                <PlanetSection title="RADIUS" value={radius} />
                <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
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
    },
    planetSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing[6],
        paddingVertical: spacing[5],
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: spacing[7],
        marginBottom: spacing[5]
    }
})

export default Details;