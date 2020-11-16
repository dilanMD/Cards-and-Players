import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from "../../../screens/auth/Auth";
import Register from "../../../screens/auth/Register";
import Login from "../../../screens/auth/Login";

const Stack = createStackNavigator();

const Authentication = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Auth"
        >
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default Authentication;
