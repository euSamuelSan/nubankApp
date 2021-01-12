import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import { Feather} from '@expo/vector-icons'

import Colors from '../../utils/Colors'

export default function RewardsCard({}){

    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.title}>
                <Feather name="gift" size={28} color={Colors.purple} style={styles.icon}/>
                <Text style={styles.rewardsText}>Rewards</Text>
            </View>
            
            <Text style={styles.descriptionText}>Apague compras com pontos que nunca expiram</Text>

            <TouchableHighlight style={styles.knowButton}>
                <Text style={styles.knowButtonText}>CONHECER</Text>
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
    icon:{
        backgroundColor: Colors.lightPink,
        padding: 5,
        borderRadius: 100,
    },
    rewardsText: {
        marginLeft: 20,
        color: Colors.purple,
        fontSize: 18,
    },
    knowButton: {
        padding: 15,
        borderRadius:5,
        borderColor: Colors.purple,
        borderWidth: 1
    },
    knowButtonText: {
        color: Colors.purple,
        fontWeight: 'bold',
    },
    descriptionText: {
        marginBottom: 15,
    }
})