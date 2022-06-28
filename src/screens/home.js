import { Button, StyleSheet } from "react-native";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from "../theme/colors";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    }
})

export default Home;