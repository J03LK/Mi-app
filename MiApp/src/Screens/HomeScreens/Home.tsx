import React, { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponents } from '../../components/BodyComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../apptheme/AppTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ModalProducts } from './Components/ModalProducts';

//interface - productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//interface- para el arreglo del carrito de compras
export interface Car {
    id: number;
    name: string;
    price: number;
    pathImage: string;
    totalQuantity: number;
}

export const HomeScreens = () => {
    //arreglo productos
    const products: Product[] = [
        { id: 1, name: 'FC 24', price: 18.99, stock: 8, pathImage: 'https://m.media-amazon.com/images/I/71zFBOOMoXL.jpg' },
        { id: 2, name: 'Nintendo Switch', price: 249.99, stock: 3, pathImage: 'https://marcimex.vtexassets.com/arquivos/ids/208574/Nintendo-Switch--OLED-model--3-.jpg?v=638460337462070000' },
        { id: 3, name: 'Palanca play 5', price: 24.99, stock: 6, pathImage: 'https://www.tecnotrade.com.ec/wp-content/uploads/2021/04/6-3.jpg' },
        { id: 4, name: 'Audifonos Sony', price: 14.99, stock: 5, pathImage: 'https://sony.scene7.com/is/image/sonyglobalsolutions/Gaming_gear_756x756_V2?$S7Product$&fmt=png-alpha' },
        { id: 5, name: 'FC 24', price: 18.99, stock: 8, pathImage: 'https://m.media-amazon.com/images/I/71zFBOOMoXL.jpg' },
        { id: 6, name: 'Nintendo Switch', price: 249.99, stock: 3, pathImage: 'https://marcimex.vtexassets.com/arquivos/ids/208574/Nintendo-Switch--OLED-model--3-.jpg?v=638460337462070000' },
        { id: 7, name: 'Palanca play 5', price: 24.99, stock: 6, pathImage: 'https://www.tecnotrade.com.ec/wp-content/uploads/2021/04/6-3.jpg' },
        { id: 8, name: 'Audifonos Sony', price: 14.99, stock: 5, pathImage: 'https://sony.scene7.com/is/image/sonyglobalsolutions/Gaming_gear_756x756_V2?$S7Product$&fmt=png-alpha' },

    ];

    //hook useState: manipular el estado del arreglo del productos
    const [productState, setProductState] = useState(products);

    //hookuseState: manipular el estado del arreglo del carrtio de compras
    const [car, setCar] = useState<Car[]>([]);

    //hook useState:manipulas la visualizacion del screen
    const [showScreen, setShowScreen] = useState<boolean>(false);

    //hook useNavigation:
    const navigation = useNavigation();

    // Definir número de columnas
    const numColumns = 2;

    //funcion para actulizar el stcok de productos
    const changeStockProducts = (idProduct: number, quantity: number) => {
        //generrar un nuevo arreglo con las actualizaciones del stock
        const updateStok = productState.map(product => product.id === idProduct
            ? { ...product, stock: product.stock - quantity }
            : product);
        //actulizar el productState
        setProductState(updateStok);
        //llamar la función para arreglar al cartio 
        addProducts(idProduct, quantity)

    }


    //funcion para agregar al carrito 
    const addProducts = (idProduct: number, quenatity: number) => {
        //buscar el producto que se agregar al carrito 
        const product = productState.find(product => product.id === idProduct);
        //controlar si el producto no ha sido encontrado 
        if (!product) {
            return;
        }

        //verificar si el producto esta en carrito 
        const productoEnCarrito = car.find(item=> item.id ===idProduct);

        
        //si el producto ha sido encontrado generar nuevo objeto producto
        const newProductCar: Car = {
            id: product.id,
            name: product.name,
            price: product.price,
            pathImage: product.pathImage,
            totalQuantity: quenatity
        }
        //agregrar en el arreglo del carrito 
        setCar([...car, newProductCar])
        console.log(car);
    }
    //hook useState: manipular el estado del producto seleccionado
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    //hook useState: manipular la visibilidad del modal
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    // Función para abrir el modal y establecer el producto seleccionado
    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalVisible(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedProduct(null);
    };

    return (
        <View>
            <View style={styles.contentHeaderHome}>
                <TitleComponent title="Productos" />
                <View style={styles.IconCardHome}>
                    <Text style={styles.textIconCard}>{car.length}</Text>
                    <Icon
                        style={styles.IconCardHome}
                        name="shopping-cart"
                        size={27}
                        color="black"
                        onPress={() =>
                            navigation.dispatch(CommonActions.navigate({ name: 'Car', params: { car } }))
                        }
                    />
                </View>
            </View>
            <BodyComponents>
                <FlatList
                    key={numColumns}
                    data={productState}
                    renderItem={({ item }) => (
                        <View style={styles.productCard}>
                            <Image
                                source={{ uri: item.pathImage }}
                                style={styles.productImage}
                            />
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productPrice}>${item.price}</Text>
                            <TouchableOpacity onPress={() => openModal(item)}>
                                <Icon
                                    name='add-shopping-cart'
                                    size={33}
                                    color='blue'
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={numColumns}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </BodyComponents>
            {selectedProduct && (
                <ModalProducts
                    isVisible={isModalVisible}
                    setShowModal={closeModal}
                    product={selectedProduct}
                    changeStockProduct={changeStockProducts}
                />
            )}
        </View>
    );
};