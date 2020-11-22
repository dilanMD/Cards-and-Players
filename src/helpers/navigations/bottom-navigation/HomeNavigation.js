import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Score from "../../../screens/home/Score";
import Play from "../../../screens/home/Play";
import Live from "../../../screens/home/Live";
import Results from "../../../screens/home/Results";
import Upcoming from "../../../screens/home/Upcoming";
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
            initialRouteName="Live"
            tabBarOptions={tabBarOptions, tabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Live') {
                        iconName = 'bullhorn'
                    } else if (route.name === 'Results') {
                        iconName = 'bar-chart'
                    } else if (route.name === 'Upcoming') {
                        iconName = 'calendar'
                    }
                    return <Icon name={iconName} color={color} size={size} />
                },
            })}
        >
            <Tab.Screen name="Live" component={Live} />
            <Tab.Screen name="Results" component={Results} />
            <Tab.Screen name="Upcoming" component={Upcoming} />
        </Tab.Navigator>
    );
}

export default HomeNavigation;