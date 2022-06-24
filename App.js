import { StyleSheet, View, Image, Pressable } from 'react-native';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';
import Text from './src/components/text/text';

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
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <Text preset='h1'>
        Open up App.js to start
      </Text>
    </View>
  );
}
