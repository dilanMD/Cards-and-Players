import React from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../helpers/constants/Colors';

const index = (props) => {
    const { placeholder, icon, size, color, keyboardType, secured, value, handleChange, style } = props;

    return (
        <Input
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secured}
            autoCapitalize="none"
            leftIcon={<Icon name={icon} size={size} color={color} />}
            value={value}
            onChangeText={handleChange}
            inputContainerStyle={style}
        />
    );
}

export default index;
