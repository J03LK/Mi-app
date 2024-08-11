import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        alignContent:'center',
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 12
    },
    inputText: {
        marginTop:10,
        backgroundColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    datePickerButton: {
        marginTop:10,
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
});
