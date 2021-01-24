import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../../utils/Colors";

export default function WalletCard({ user, isInfoVisible }) {
    const account = user.bank.account;
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9}>
            <View style={styles.title}>
                <FontAwesome5 name="coins" size={28} color={Colors.lightGrey} />
                <Text style={styles.walletText}>Conta</Text>
            </View>

            <Text style={styles.balanceText}>Saldo disponível</Text>
            {isInfoVisible ? (
                <Text style={styles.balanceValue}>R$ {account.balance}</Text>
            ) : (
                <View style={styles.hiddenInfo}></View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginBottom: 18,
        borderRadius: 5,
        padding: 20,
    },
    title: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15,
    },
    walletText: {
        marginLeft: 20,
        color: Colors.lightGrey,
        fontSize: 18,
    },
    contentContainer: {
        justifyContent: "flex-start",
    },
    balanceValue: {
        fontSize: 30,
        color: Colors.black,
        fontWeight: "bold",
    },
    balanceText: {
        color: Colors.lightGrey,
        marginBottom: 15,
    },
    hiddenInfo: {
        backgroundColor: Colors.smoke,
        padding: 25,
    },
});
