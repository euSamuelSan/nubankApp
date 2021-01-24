import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    SafeAreaView,
} from "react-native";
import {
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome5,
    Octicons,
    Feather,
} from "@expo/vector-icons";

import Colors from "../../utils/Colors";

export default function Footer({}) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container} horizontal={true}>
                <TouchableOpacity style={styles.box}>
                    <Ionicons
                        name={"barcode-outline"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Pagar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <Ionicons
                        name={"person-add-outline"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Indicar Amigos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <MaterialCommunityIcons
                        name={"bank-transfer-out"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Transferir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <MaterialCommunityIcons
                        name={"bank-transfer-in"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Depositar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <FontAwesome5
                        name={"hand-holding-usd"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Empréstimos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <MaterialCommunityIcons
                        name={"credit-card-settings-outline"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Cartão virtual</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <MaterialCommunityIcons
                        name={"cellphone-android"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Recarga de celular</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <Octicons
                        name={"settings"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Ajustar limite</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <Ionicons
                        name={"lock-closed-outline"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Bloquear cartão</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <MaterialCommunityIcons
                        name={"cash-plus"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Cobrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <FontAwesome5
                        name={"hand-holding-usd"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Doação</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <Feather
                        name={"help-circle"}
                        color={Colors.white}
                        size={32}
                    />
                    <Text style={styles.boxText}>Me ajuda</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        //justifyContent: 'flex-start',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: Colors.lightPurple,
        marginRight: 5,
        marginBottom: 5,
        padding: 5,
        borderRadius: 5,
    },
    boxText: {
        marginTop: "auto",
        color: Colors.white,
    },
});
