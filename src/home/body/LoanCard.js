import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import { FontAwesome5} from '@expo/vector-icons'

import Colors from '../../utils/Colors'

export default function LoanCard({user}){
    const loan = user.bank.loan
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.title}>
                <FontAwesome5 name="hand-holding-usd" size={28} color={Colors.lightGrey}/>
                <Text style={styles.loanText}>Empréstimo</Text>
            </View>
            
            <View style={styles.preApprovedValueContainer}>
                <Text>Valor disponível de até</Text>
                <Text style={styles.preApprovedValue}>R$ {loan.preApprovedValue}</Text>
            </View>

            <TouchableHighlight style={styles.simulateButton}>
                <Text style={styles.simulateButtonText}>SIMULAR EMPRÉSTIMO</Text>
            </TouchableHighlight>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginBottom: 18,
        borderRadius: 5,
        padding: 20,
        alignItems: 'flex-start'
    },
    title:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15
    },
    loanText: {
        marginLeft: 20,
        color: Colors.lightGrey,
        fontSize: 18,
    },
    contentContainer: {
        justifyContent: 'flex-start',
    },
    preApprovedValueContainer: {
        color: Colors.lightGrey,
        marginBottom: 15
    },
    preApprovedValue: {
        fontWeight: 'bold',
    },
    simulateButton: {
        padding: 15,
        borderRadius:5,
        borderColor: Colors.purple,
        borderWidth: 1
    },
    simulateButtonText: {
        color: Colors.purple,
        fontWeight: 'bold',
    },
})