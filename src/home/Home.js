import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import ConfigScreen from "../config/ConfigScreen";

export default function Home({ user, handleVisibility, isInfoVisible }) {
    const [isConfigPressed, setIsConfigPressed] = useState(false);
    const handleConfigScreen = () => {
        setIsConfigPressed((state) => !state);
    };

    return (
        <View style={styles.container}>
            <Header
                user={user}
                handleVisibility={handleVisibility}
                isInfoVisible={isInfoVisible}
                isConfigPressed={isConfigPressed}
                handleConfigScreen={handleConfigScreen}
            />
            {isConfigPressed ? (
                <ConfigScreen />
            ) : (
                <View style={styles.contentContainer}>
                    <Body user={user} isInfoVisible={isInfoVisible} />
                    <Footer user={user} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.purple,
        margin: 20,
        alignItems: "stretch",
        justifyContent: "flex-start",
        flexDirection: "column",
        flex: 1,
    },

    contentContainer: {
        flex: 1,
    },
});
