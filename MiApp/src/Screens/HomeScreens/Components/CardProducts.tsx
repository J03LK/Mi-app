import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../../../apptheme/AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Product } from '../Home';
import { ModalProducts } from './ModalProducts';

//interface-props
interface Props {
    product: Product;
    //funcion para acutlizar stock
    changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const CardProducts = ({ product, changeStockProduct }: Props) => {

    //hook useState:permitir visualizar o no el modal 
    const [showScreen, setShowScreen] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.contentCard}>
                <Image source={{
                    uri: product.pathImage
                }}
                    style={styles.imageCard} />
                <View>
                    <Text style={styles.titleCard}>{product.name}</Text>
                    <Text style={styles.priceCard}>{product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.IconCardHome}>
                    <Icon
                        name='add-shopping-cart'
                        size={33}
                        onPress={() => setShowScreen(!showScreen)} />
                </View>
            </View>
            <ModalProducts
                isVisible={showScreen}
                setShowModal={() => setShowScreen(!showScreen)}
                product={product}
                changeStockProduct={changeStockProduct} />
        </View>
    )
}
