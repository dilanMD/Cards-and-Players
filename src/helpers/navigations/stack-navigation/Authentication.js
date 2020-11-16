import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from "../../../screens/auth/Register";
import Login from "../../../screens/auth/Login";

const Stack = createStackNavigator();

const Authentication = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Register"
        >
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default Authentication;
