import React, { useState, useEffect } from 'react'
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Product } from '../Home';
import { styles } from '../../../apptheme/AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
    product: Product;
    isVisible: boolean;
    setShowModal: () => void;
    changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const ModalProducts = ({ isVisible, setShowModal, product, changeStockProduct }: Props) => {
    const { width } = useWindowDimensions();
    const [quantity, setQuantity] = useState<number>(1);

    // Asegurarse de que la cantidad no exceda el stock disponible
    useEffect(() => {
        if (quantity > product.stock) {
            setQuantity(product.stock);
        }
    }, [product.stock]);

    const handleChangeQuantity = (value: number) => {
        const newQuantity = quantity + value;
        if (newQuantity > 0 && newQuantity <= product.stock) {
            setQuantity(newQuantity);
        }
    }

    const handleAddProduct = () => {
        changeStockProduct(product.id, quantity);
        setQuantity(1);
        setShowModal();
    }

    return (
        <Modal
            visible={isVisible}
            animationType='fade'
            transparent={true}>
            <View style={styles.contentPrincipal}>
                <View style={{
                    ...styles.contentModal,
                    width: width * 0.80
                }}>
                    <View style={styles.headModal}>
                        <Text style={styles.titleModal}>{product.name}</Text>
                        <View style={styles.IconCardHome}>
                            <Icon
                                name='close'
                                size={27}
                                color='blue'
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.contentPrice}> ${product.price.toFixed(2)} </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={{
                                uri: product.pathImage
                            }}
                            style={styles.imageModal} />
                    </View>
                    {
                        (product.stock === 0)
                            ? <Text style={styles.messageStock}>Producto Agotado!</Text>
                            : <View>
                                <View style={styles.contentQuantity}>
                                    <TouchableOpacity onPress={() => handleChangeQuantity(1)} disabled={quantity === product.stock}>
                                        <Icon name='add' size={20} color='blue' />
                                    </TouchableOpacity>
                                    <Text style={styles.textQuantity}>{quantity}</Text>
                                    <TouchableOpacity onPress={() => handleChangeQuantity(-1)} disabled={quantity === 1}>
                                        <Icon name='remove' size={20} color='blue' />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.textQuantity}>
                                        total: ${(product.price * quantity).toFixed(2)}
                                    </Text>
                                </View>
                                <TouchableOpacity style={styles.buttonAddCar}
                                    onPress={handleAddProduct}>
                                    <Text style={styles.buttonAddCar}>Agregar al carrito</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        </Modal >
    )
}
