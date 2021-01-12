import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FontAwesome5} from '@expo/vector-icons'

import Colors from '../../utils/Colors'

export default function WalletCard({user}){
    const account = user.bank.account
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.title}>
                <FontAwesome5 name="coins" size={28} color={Colors.lightGrey}/>
                <Text style={styles.walletText}>Conta</Text>
            </View>
            
            <View>
                <Text style={styles.balanceText}>Saldo disponível</Text>
                <Text style={styles.balanceValue}>R$ {account.balance}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginBottom: 18,
        borderRadius: 5,
        padding: 20,
    },
    title:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15
    },
    walletText: {
        marginLeft: 20,
        color: Colors.lightGrey,
        fontSize: 18,
    },
    contentContainer: {
        justifyContent: 'flex-start',
    },
    balanceValue: {
        fontSize: 30,
        color: Colors.black,
        fontWeight: 'bold',
    },
    balanceText: {
        color: Colors.lightGrey,
        marginBottom: 15
    },
})