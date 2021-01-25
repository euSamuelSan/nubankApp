import {
    AntDesign,
    Feather,
    FontAwesome5,
    Fontisto,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import {
    ScrollView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

import Colors from "../utils/Colors";

export default function ConfigScreen({}) {
    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <View style={Styles.headerContainer}>
                <View style={Styles.qrCodeContainer}>
                    <QRCode
                        value={"QR Code Test"}
                        color={Colors.purple}
                        backgroundColor={Colors.white}
                    />
                </View>
                <Text style={Styles.headerText}> o header vem aqui</Text>
            </View>

            <TouchableOpacity style={Styles.button}>
                <Ionicons
                    name="help-circle-outline"
                    color={Colors.smoke}
                    size={25}
                />
                <Text style={Styles.buttonText}>Me Ajuda</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    color={Colors.smoke}
                    size={25}
                    style={Styles.arrow}
                />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button}>
                <AntDesign name="user" color={Colors.smoke} size={25} />
                <Text style={Styles.buttonText}>Perfil</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    color={Colors.smoke}
                    size={25}
                    style={Styles.arrow}
                />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button}>
                <FontAwesome5 name="coins" color={Colors.smoke} size={25} />
                <Text style={Styles.buttonText}>Configurar Conta</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    color={Colors.smoke}
                    size={25}
                    style={Styles.arrow}
                />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button}>
                <AntDesign name="creditcard" color={Colors.smoke} size={25} />
                <Text style={Styles.buttonText}>Minhas chaves Pix</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    color={Colors.smoke}
                    size={25}
                    style={Styles.arrow}
                />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button}>
                <AntDesign name="creditcard" color={Colors.smoke} size={25} />
                <Text style={Styles.buttonText}>Configurar Cartão</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    color={Colors.smoke}
                    size={25}
                    style={Styles.arrow}
                />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button}>
                <Fontisto
                    name="shopping-store"
                    color={Colors.smoke}
                    size={25}
                />
                <Text style={Styles.buttonText}>Pedir Conta PJ</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    color={Colors.smoke}
                    size={25}
                    style={Styles.arrow}
                />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button}>
                <Feather name="mail" color={Colors.smoke} size={25} />
                <Text style={Styles.buttonText}>Configurar notificações</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    color={Colors.smoke}
                    size={25}
                    style={Styles.arrow}
                />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button}>
                <MaterialCommunityIcons
                    name="cellphone"
                    color={Colors.smoke}
                    size={25}
                />
                <Text style={Styles.buttonText}>Configuração do app</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    color={Colors.smoke}
                    size={25}
                    style={Styles.arrow}
                />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button}>
                <Ionicons
                    name="help-circle-outline"
                    color={Colors.smoke}
                    size={25}
                />
                <Text style={Styles.buttonText}>Sobre</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    color={Colors.smoke}
                    size={25}
                    style={Styles.arrow}
                />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.logoutButton}>
                <Text style={Styles.logoutButtonText}>SAIR DO APP</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.purple,
        alignItems: "stretch",
    },
    button: {
        flexDirection: "row",
        borderBottomColor: Colors.smoke,
        borderColor: Colors.purple,
        borderWidth: 0.5,
        padding: 15,
        alignItems: "center",
    },
    buttonText: {
        color: Colors.smoke,
        marginLeft: 15,
    },
    arrow: {
        marginLeft: "auto",
    },
    logoutButton: {
        borderColor: Colors.white,
        borderWidth: 0.5,
        borderRadius: 4,
        padding: 15,
        alignItems: "center",
        marginTop: 25,
    },

    logoutButtonText: {
        color: Colors.smoke,
        fontWeight: "bold",
    },

    headerContainer: {
        alignItems: "center",
    },

    qrCodeContainer: {
        borderRadius: 5,
        padding: 6,
        backgroundColor: Colors.white,
    },

    headerText: {
        marginTop: 10,
        color: Colors.smoke,
    },
});
