import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "./src/utils/Colors";

import Home from "./src/home/Home";

export default function App() {
    const [isInfoVisible, setisInfoVisible] = useState(false);
    const handleVisibility = () => {
        setisInfoVisible((state) => !state);
    };

    const user = {
        info: {
            name: "Samuel",
        },
        prefs: {
            visibility: isInfoVisible,
            customAvailableLimit: 400.0,
        },
        bank: {
            creditCard: {
                active: true,
                invoiceClosed: false,
                totalLimit: 1800.0,
                actualInvoice: 0.0,
            },
            account: {
                balance: 543.97,
            },
            loan: {
                active: false,
                available: true,
                preApprovedValue: 7700,
            },
        },
    };

    return (
        <View style={styles.container}>
            <Home
                user={user}
                handleVisibility={handleVisibility}
                isInfoVisible={isInfoVisible}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.purple,
        flex: 1,
    },
});
