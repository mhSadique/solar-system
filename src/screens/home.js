import { Button, View } from "react-native";
import Text from "../components/text/text";

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
            <Text preset='h1' >Home Screen</Text>
            <Button title="Go to details" onPress={() => navigation.navigate('Details', { title: 'Detailss and blah blah', id: Math.ceil(Math.random() * 1000), data: [1, 4, 5] })} />
        </View>
    );
}

export default Home;