import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })} underlayColor = '#3CB371'>
    <View style ={styles.item}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
</TouchableHighlight>

)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <TouchableHighlight 
             onPress={()=>{
                 navigation.navigate('Currency')
             }}
            >
                <View style= {{backgroundColor: 'lightblue',padding: 20, margin:10, alignItems: "center"}}>
                    <Text>Currency</Text>
                </View>
            </TouchableHighlight>
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    }
})