import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../apptheme/AppTheme';


interface Props {
    textButton: string;
    onPress: () => void;

}
export const ButtonComponent = ({ textButton, onPress }: Props) => {
    return (
        <TouchableOpacity 
        style={styles.Button}
        onPress={onPress}>
            <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
    )
}
