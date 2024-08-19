import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Car } from './HomeScreens/Home';
import { styles } from '../apptheme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const totalPay = (cart: Car[]): { total: number, discount: number } => {
    let total: number = 0;
    let totalItems: number = 0;

    cart.forEach(product => {
        total += product.price * product.totalQuantity;
        totalItems += product.totalQuantity;
    });

    const discount = totalItems > 4 ? total * 0.10 : 0;
    return { total, discount };
}

export const Carrito = (props: any) => {
    const car: Car[] = props.route.params.car;
    const navigation = useNavigation();

    const handleComprar = () => {
        navigation.goBack();
    }

    const handleCloseModal = () => {
        navigation.goBack();
    }

    const { total, discount } = totalPay(car);

    return (
        <SafeAreaView>
            <View >
                <View style={styles.headModal}>
                    <Text style={styles.titleModal}>Mis Productos</Text>
                    <View style={styles.IconCardHome}>
                        <Icon
                            name='cancel'
                            size={27}
                            color='Blue'
                            onPress={handleCloseModal} />
                    </View>
                </View>
                <View style={styles.headerTable}>
                    <Text>Id.</Text>
                    <Text>Produ.</Text>
                    <Text>Prec.</Text>
                    <Text>Cant.</Text>
                    <Text>Total</Text>
                </View>
                <FlatList
                    data={car}
                    renderItem={({ item }) => (
                        <View style={styles.headerTable}>
                            <Text style={{ marginHorizontal: 10 }}>{item.id}</Text>
                            <View>
                                <Text >{item.name}</Text>
                                <Image style={styles.imageCarrito} source={{ uri: item.pathImage }} />
                            </View>
                            <Text >{item.price.toFixed(2)}</Text>
                            <Text>{item.totalQuantity}</Text>
                            <Text>{(item.price * item.totalQuantity).toFixed(2)}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.textTotalPay}>Total a pagar: ${(total - discount).toFixed(2)}</Text>
                    {discount > 0 && (
                        <Text style={styles.descuento}>Descuento del 10%: -${discount.toFixed(2)}</Text>
                    )}
                </View>
                <TouchableOpacity
                    style={styles.buttonAddCar}
                    onPress={handleComprar}>
                    <Text style={styles.textButtonAddCar}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
