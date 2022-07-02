import { Button, StyleSheet, FlatList, View } from "react-native";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planet-data";
import { spacing } from "../theme/spacing";
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <FlatList
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.list}
                data={PLANET_LIST}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={styles.imageTextContainer}>
                            <View style={[styles.circle, { backgroundColor: item.color }]} />
                            <Text preset="h3" style={styles.itemName}>{item.name}</Text>
                        </View>
                        <AntDesign name="right" size={24} color={colors.white} />
                    </View>
                )}
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
    }
})

export default Home;