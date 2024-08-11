import React from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../apptheme/AppTheme';

interface Props {
    placeholder: string;
    handleSetValues: (name: string, value: string) => void
    name: string;
    isPassword: boolean;
    hasIcon: boolean;
    setHiddenPassword?: () => void
}
export const InputComponents = ({ placeholder, handleSetValues, name, isPassword = false, hasIcon = true, setHiddenPassword }: Props) => {
    return (
        <View>{
            (isPassword)
                ? <Icon
                    style={styles.iconPassword}
                    name='visibility'
                    size={25}
                    onPress={setHiddenPassword}
                />
                : null
        }
            {
                (hasIcon)
                    ? <Icon
                        style={styles.iconPassword}
                        name='visibility'
                        size={25}
                        onPress={setHiddenPassword}
                    />
                    : null
            }
            <TextInput
                placeholder={placeholder}
                keyboardType='default'
                style={styles.inputText}
                secureTextEntry={isPassword}
                onChangeText={(value) => handleSetValues(name, value)}
            />
        </View>


    )
}