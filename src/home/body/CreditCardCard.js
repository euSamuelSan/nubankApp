import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../../utils/Colors";

export default function CreditCardCard({ user }) {
    const creditCard = user.bank.creditCard;

    const getInvoiceColor = () => {
        creditCard.invoiceClosed
            ? { color: Colors.lightRed }
            : { color: Colors.cyan };
    };

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9}>
            <View style={styles.title}>
                <AntDesign
                    name="creditcard"
                    size={28}
                    color={Colors.lightGrey}
                />
                <Text style={styles.creditCardText}>Cartão de Crédito</Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.invoiceText}>
                    {creditCard.invoiceClosed
                        ? "Fatura Fechada"
                        : "Fatura atual"}
                </Text>

                <Text style={styles.actualInvoiceValue}>
                    R$ {creditCard.actualInvoice}
                </Text>

                <View style={styles.availableLimitContainer}>
                    <Text>Limite disponível</Text>
                    <Text style={styles.availableLimitValue}>
                        R$ {user.prefs.customAvailableLimit}
                    </Text>
                </View>
            </View>
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
    creditCardText: {
        marginLeft: 20,
        color: Colors.lightGrey,
        fontSize: 18,
    },
    contentContainer: {
        justifyContent: "flex-start",
    },
    invoiceText: {
        color: Colors.lightGrey,
        marginBottom: 15,
    },
    availableLimitValue: {
        paddingLeft: 5,
        color: Colors.darkGreen,
        fontWeight: "bold",
    },
    availableLimitContainer: {
        flexDirection: "row",
    },
    actualInvoiceValue: {
        fontSize: 30,
        color: Colors.cyan,
        fontWeight: "bold",
    },
});
