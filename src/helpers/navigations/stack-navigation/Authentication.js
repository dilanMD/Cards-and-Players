import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from "../../../screens/auth/Auth";
import Register from "../../../screens/auth/Register";
import Login from "../../../screens/auth/Login";
import Phone from "../../../screens/auth/Phone";
import FindAccount from "../../../screens/auth/FindAccount";
import ChangePassword from "../../../screens/auth/ChangePassword";
import Success from "../../../screens/auth/Success";

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
            <Stack.Screen name="Phone" component={Phone} />
            <Stack.Screen name="FindAccount" component={FindAccount} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
    );
}

export default Authentication;
