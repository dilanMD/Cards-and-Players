import React from 'react';
import { StyleSheet } from "react-native"
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../helpers/constants/Colors';

const index = (props) => {
    const { placeholder, icon, size, color, keyboardType, secured } = props;

    return (
        <Input
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secured}
            autoCapitalize="none"
            leftIcon={<Icon name={icon} size={size} color={color} />}
        />
    );
}

export default index;
