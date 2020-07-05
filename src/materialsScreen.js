import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function MaterialsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Material Screen</Text>
            <Button mode="contained" onPress={() => navigation.navigate('Chapter1')}>Bab 1</Button>
            {/* <Button mode="contained" onPress={() => navigation.navigate('Chapter2')}>Bab 2</Button> */}
        </View>
    );
}