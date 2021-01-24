import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/Colors";

export default function ConfigScreen({}) {
    return (
        <View style={Styles.container}>
            <Text>Essa é minha tela de cfg</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.purple,
    },
});
