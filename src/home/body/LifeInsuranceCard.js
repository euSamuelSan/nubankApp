import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../../utils/Colors";

export default function LifeInsuranceCard({}) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9}>
            <View style={styles.title}>
                <FontAwesome
                    name="umbrella"
                    size={28}
                    color={Colors.purple}
                    style={styles.icon}
                />
                <Text style={styles.lifeInsuranceText}>Seguro de vida</Text>
            </View>

            <Text style={styles.descriptionText}>
                Conheça Nubank Vida: um seguro simples e que cabe no bolso
            </Text>

            <TouchableOpacity style={styles.knowButton}>
                <Text style={styles.knowButtonText}>CONHECER</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginBottom: 18,
        borderRadius: 5,
        padding: 20,
        alignItems: "flex-start",

        //alignItems: "stretch",
    },
    title: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15,
    },
    icon: {
        backgroundColor: Colors.lightPink,
        padding: 5,
        borderRadius: 100,
    },
    lifeInsuranceText: {
        marginLeft: 20,
        color: Colors.purple,
        fontSize: 18,
    },
    knowButton: {
        padding: 15,
        borderRadius: 5,
        borderColor: Colors.purple,
        borderWidth: 1,
    },
    knowButtonText: {
        color: Colors.purple,
        fontWeight: "bold",
    },
    descriptionText: {
        marginBottom: 15,
    },
});
