import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";

export default function Home({ user, handleVisibility, isVisible }) {
    const [isConfigPressed, setIsConfigPressed] = useState(false);
    const handleConfigScreen = () => {
        setIsConfigPressed((state) => !state);
    };

    return (
        <View style={styles.container}>
            <Header
                user={user}
                handleVisibility={handleVisibility}
                isVisible={isVisible}
                isConfigPressed={isConfigPressed}
                handleConfigScreen={handleConfigScreen}
            />
            <Body user={user} isVisible={isVisible} />
            <Footer user={user} />
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
});
