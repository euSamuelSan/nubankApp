import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../../utils/Colors";

export default function LoanCard({ user, isInfoVisible }) {
    const loan = user.bank.loan;
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9}>
            <View style={styles.title}>
                <FontAwesome5
                    name="hand-holding-usd"
                    size={28}
                    color={Colors.lightGrey}
                />
                <Text style={styles.loanText}>Empréstimo</Text>
            </View>

            <View style={styles.preApprovedValueContainer}>
                {isInfoVisible ? (
                    <View>
                        <Text>Valor disponível de até</Text>
                        <Text style={styles.preApprovedValue}>
                            R$ {loan.preApprovedValue}
                        </Text>
                    </View>
                ) : (
                    <View style={styles.hiddenInfo}></View>
                )}
            </View>

            <TouchableOpacity style={styles.simulateButton}>
                <Text style={styles.simulateButtonText}>
                    SIMULAR EMPRÉSTIMO
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginBottom: 18,
        borderRadius: 2,
        padding: 20,
        alignItems: "flex-start",
    },
    title: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15,
    },
    loanText: {
        marginLeft: 20,
        color: Colors.lightGrey,
        fontSize: 18,
    },
    contentContainer: {
        justifyContent: "flex-start",
    },
    preApprovedValueContainer: {
        marginBottom: 15,
        alignSelf: "stretch",
    },
    preApprovedValue: {
        fontWeight: "bold",
    },
    simulateButton: {
        padding: 15,
        borderRadius: 5,
        borderColor: Colors.purple,
        borderWidth: 1,
    },
    simulateButtonText: {
        color: Colors.purple,
        fontWeight: "bold",
    },
    hiddenInfo: {
        backgroundColor: Colors.smoke,
        padding: 25,
    },
});
