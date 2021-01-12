import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Colors from './src/utils/Colors'

import Home from './src/home/Home'

export default function App() {
    const [isVisible, setIsVisible] = useState(false)
    const handleVisibility = () => {
        setIsVisible(state => !state)
    }

    const user = {
        info: {
            name: 'Samuel',
            
        },
        prefs: {
            visibility: isVisible,
            customAvailableLimit: 400.00,
        },
        bank: {
            creditCard: {
                active: true,
                invoiceClosed: false,
                totalLimit: 1800.00,
                actualInvoice: 0.00,
            },
            account: {
                balance: 543.97
            },
            loan: {
                active: false,
                available: true,
                preApprovedValue: 7700
            }
        }
    }

    return (
        <View style={styles.container}>
            <Home user={user} handleVisibility={handleVisibility} isVisible={isVisible} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.purple,
        flex: 1
    },
})
