import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const Currency = () => {
    const [apiData, setApiData] = useState(
        {
            "HRK": 0,
            "JPY": 0,
            "THB": 0,
            "CHF": 0,
            "SGD": 0,
        }
    )
    useEffect(() => {
        fetch('https://api.exchangeratesapi.io/latest?fbclid=IwAR3nXxg-6li704VxehShsPfvBltAwh7oDYQbCGOzrgM6-hhFFhwzTDnBu7c')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setApiData({
                    "HRK": json.rates.HRK,
                    "JPY": json.rates.JPY,
                    "THB": json.rates.THB,
                    "CHF": json.rates.CHF,
                    "SGD": json.rates.SGD,
                })
            })
    }, [])
    return (
        <ImageBackground source={require('./dollar.jpg')} style={style.backdrop}>
        <View style={style.background}>
            <Text>HRK   :     {apiData.HRK}</Text>
            <Text>JPY   :     {apiData.JPY}</Text>
            <Text>THB   :      {apiData.THB}</Text>
            <Text>CHF   :     {apiData.CHF}</Text>
            <Text>SGD   :     {apiData.SGD}</Text>
        </View>
        </ImageBackground>
    )
}
const style = StyleSheet.create({
    background: {
        height: 400 ,
        backgroundColor: "#F5FFFA",
        paddingHorizontal: 60,
        paddingVertical: 60,
        margin: 20,
        alignItems: "center",   
        flexDirection: "column-reverse",
        justifyContent : "space-between" 
        },
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: "center"
    }
    
})

export default Currency