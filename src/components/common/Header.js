// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = ({ headerText }) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );

};

// Define styles for the component
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        elevation: 2,
        height: 60,
        justifyContent: 'center',
        paddingTop: 15,
        position: 'relative',
        shadowColor: '#000000',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.2
    }
};

// Make the component available to other parts of the app
export { Header };