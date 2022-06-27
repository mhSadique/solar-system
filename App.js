import { View } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home'
import Details from './src/temp/Details';
import CreatePost from './src/temp/CreatePost';
import ShowPost from './src/temp/ShowPost';

const Stack = createNativeStackNavigator();

const HeaderTitle = () => <Text>Hello Velo</Text>

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf')
  });

  if (!loaded) {
    return <Text >Font is loading......</Text>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        // options={{
        //   headerStyle: {
        //     backgroundColor: '#F4511E'
        //   },
        //   headerTintColor: 'white',
        //   headerTitleStyle: {
        //     fontWeight: '100'
        //   }
        // }}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#F4511E'
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '100'
          }
        })}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CreatePost' component={CreatePost} />
        <Stack.Screen name='ShowPost' component={ShowPost} />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            headerTitle: () => <HeaderTitle />
          }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
