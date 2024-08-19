import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalTitle: {
        fontSize: 25,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imagen: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    bienvenidoText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#e1eef8',
        fontWeight: 'bold',
        marginTop: 50,
    },
    formaContainer: {
        width: '100%',
        padding: 20,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: 'black',
    },
    button: {
        backgroundColor: '#0000ff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    Button: {
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#e1eef8',
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitleText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#e1eef8',
        marginBottom: 20,
    },
    iconPassword: {
        alignContent: 'center',
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 12
    },
    inputText: {
        marginTop: 10,
        backgroundColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    datePickerButton: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#999',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    datePickerButtonText: {
        fontSize: 16,
        color: '#333',
    },
    calendarIcon: {
        marginRight: 10,
    },
    contentBody: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 40
    },
    titleHeader: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },
    subtitleBody: {
        paddingTop: 30,
        fontSize: 15,
        fontWeight: '300',
        color: 'white',
        alignSelf: 'center',
        alignContent: 'flex-end'
    },
    contentInput: {
        marginTop: 20,
        gap: 10
    },
    headModal: {
        flexDirection: 'row',
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        padding: 10
    },
    titleModal: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    imageModal: {
        width: 200,
        height: 200,
    },
    contentPrincipal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    
    contentModal: {
        padding: 25,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    contentQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20
    },
    contentPrice: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textQuantity: {
        fontSize: 20,
        color: '#000',

    },
    buttonAddCar: {
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center'
    },
    textButtonAddCar: {
        color: 'black',
        fontWeight: 'bold'
    },
    messageStock: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#a92424',
        textAlign: 'center'
    },
    headerInformation: {
        flexDirection: 'row'
    },
    textInformation: {
        paddingHorizontal: 27,
        fontWeight: 'bold',
        color: '#000'
    },
    headerTable: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageCarrito: {
        width: 80,
        height: 80,
        textAlign: 'center'
    },
    textTotalPay: {
        marginTop: 7,
        fontSize: 16,
        fontWeight: 'bold',
    },
    productCard: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'blue',
        alignItems: 'center',
        shadowColor:'blue'
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    contentHeaderHome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    IconCardHome: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textIconCard: {
        fontSize: 18,
        marginRight: 5,
    },
    contentCard: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    imageCard: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    priceCard: {
        fontSize: 14,
        color: '#888',
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    descuento:{
            marginTop: 7,
            fontSize: 16,
            fontWeight: 'bold',
            color:'red'
    }
});
