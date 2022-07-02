import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from './text/text';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlanetHeader = ({ backBtn, title = "The Planets" }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {backBtn && (
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.backBtn}
                >
                    <Ionicons name="chevron-back-sharp" size={24} color="white" />
                </Pressable>
            )}
            <Text preset='h2'>{title}</Text>
        </View>
    );
};

export default PlanetHeader;

const styles = StyleSheet.create({
    container: {
        padding: spacing[6],
        borderBottomWidth: 0.5,
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    backBtn: {
        marginRight: spacing[4]
    }
})