import "react-native-gesture-handler";

import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "./src/utils/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/home/Home";

const Stack = createStackNavigator();

const storeUserData = async (user) => {
    try {
        const userData = JSON.stringify(user);

        await AsyncStorage.setItem("@user_data", userData);
    } catch (error) {
        console.log(error);
    }
};

const getUserData = async () => {
    try {
        let userData = await AsyncStorage.getItem("@user_data");

        if (userData) {
            userData = JSON.parse(userData);
            return userData;
        } else return null;
    } catch (error) {
        console.log(error);
    }
};

const UserContext = React.createContext(getUserData());

export default function App() {
    let user = getUserData();

    if (!user) {
    }

    const [isInfoVisible, setisInfoVisible] = useState(false);
    const handleVisibility = () => {
        setisInfoVisible((state) => !state);
    };

    {
        /* <View style={styles.container}>
            <Home
                user={user}
                handleVisibility={handleVisibility}
                isInfoVisible={isInfoVisible}
            />
</View> */
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"home"} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.purple,
        flex: 1,
    },
});
