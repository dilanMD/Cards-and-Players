import React from 'react';
import { View } from "react-native";

const Space = (props) => {
    const { space } = props;

    return <View style={{marginBottom: space}} />
}

export default Space;
