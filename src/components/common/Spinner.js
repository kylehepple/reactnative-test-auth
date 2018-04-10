import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size = 'small', style = {} }) => {

    const spinnerStyle = { ...styles.spinnerStyle, ...style };

    return (
        <View style={spinnerStyle}>
            <ActivityIndicator size={size} />
        </View>
    );
    
};

const styles = {
    spinnerStyle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Spinner };