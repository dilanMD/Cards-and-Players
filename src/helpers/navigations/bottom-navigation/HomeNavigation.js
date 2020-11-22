import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Score from "../../../screens/home/Score";
import Play from "../../../screens/home/Play";
import { Colors } from "../../../helpers/constants/Colors";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    activeTintColor: Colors.primaryDark,
    inactiveTintColor: Colors.grey
}

const tabStyle = {
    showLabel: false,
    // labelPosition: 'below-icon'
}

const HomeNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Play"
            tabBarOptions={tabBarOptions, tabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Score') {
                        iconName = 'bar-chart'
                    } else if (route.name === 'Play') {
                        iconName = 'gamepad'
                    }
                    return <Icon name={iconName} color={color} size={size} />
                },
            })}
        >
            <Tab.Screen name="Score" component={Score} />
            <Tab.Screen name="Play" component={Play} />
        </Tab.Navigator>
    );
}

export default HomeNavigation;