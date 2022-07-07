import { Button, StyleSheet, FlatList, View, Pressable, TextInput } from "react-native";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planet-data";
import { spacing } from "../theme/spacing";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

const Home = ({ navigation }) => {

    const [planets, setPlanets] = useState(PLANET_LIST);

    const renderItem = ({ item, index }) => (
        <Pressable
            onPress={() => navigation.navigate('Details', { planetIndex: index })}
            style={styles.item}
        >
            <View style={styles.imageTextContainer}>
                <View style={[styles.circle, { backgroundColor: item.color }]} />
                <Text preset="h3" style={styles.itemName}>{item.name}</Text>
            </View>
            <AntDesign name="right" size={24} color={colors.white} />
        </Pressable>
    );

    const searchFilter = (text) => {
        const filteredLit = PLANET_LIST.filter(planet => planet.name.startsWith(text.toLowerCase()));
        setPlanets(filteredLit);
    };

    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <TextInput
                onChangeText={(text) => searchFilter(text)}
                placeholder="Type the planet name"
                placeholderTextColor={colors.white}
                autoCorrect={false}
                style={styles.searchInput}
            />
            <FlatList
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.list}
                data={planets}
                // data={PLANET_LIST}
                keyExtractor={item => item.name}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    separator: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.white,
    },
    list: {
        padding: spacing[6]
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: spacing[5]
    },
    imageTextContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[6]
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    searchInput: {
        padding: spacing[5],
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        margin: spacing[6]
    }
})

export default Home;