import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {

    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {children}
        </View>
    );
    
};

const styles = {
    containerStyle: {
        borderBottomWidth: 0,
        borderColor: '#DDDDDD',
        borderRadius: 2,
        borderWidth: 1,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        shadowColor: '#000000',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 2
    }
};

export { Card };