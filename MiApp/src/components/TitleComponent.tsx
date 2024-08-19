import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../apptheme/AppTheme';

//interface-props
interface Props {
    title: String;
}

export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={{
            ...styles.globalTitle,
            height: height * 0.12

        }} >{title}</Text>
    )
}
