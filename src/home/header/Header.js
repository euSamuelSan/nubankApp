import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../utils/Colors";

export default function Header({
    user,
    isVisible,
    handleVisibility,
    isConfigPressed,
    handleConfigScreen,
}) {
    const getVisibilityIcon = () => {
        return isVisible ? "eye-outline" : "eye-off-outline";
    };

    const getConfigIcon = () => {
        return isConfigPressed ? "close-outline" : "settings-outline";
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {user.info.name}</Text>
            {!isConfigPressed && (
                <TouchableOpacity
                    onPress={handleVisibility}
                    style={styles.button}
                >
                    <Ionicons
                        name={getVisibilityIcon()}
                        size={32}
                        color={Colors.white}
                    />
                </TouchableOpacity>
            )}

            <TouchableOpacity
                onPress={handleConfigScreen}
                style={styles.button}
            >
                <Ionicons
                    name={getConfigIcon()}
                    size={32}
                    color={Colors.white}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "flex-end",
        marginTop: 30,
        marginBottom: 30,
    },
    text: {
        fontSize: 25,
        marginRight: "auto",
        color: Colors.white,
        fontWeight: "bold",
    },
    button: {
        marginLeft: 5,
        borderRadius: 100,
        opacity: 40,
        padding: 10,
        backgroundColor: Colors.lightPurple,
    },
});
