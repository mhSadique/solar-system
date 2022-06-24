import { View } from "react-native";
import Text from "../components/text/text";

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
            <Text preset='h1' >Home Screen</Text>
        </View>
    );
}

export default Home;