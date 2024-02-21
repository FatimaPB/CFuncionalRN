import {StyleSheet} from 'react-native';

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    contenedorBotones: {
        flex: 2,
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:5,
        
    },
    textoCaja: {
        color: 'black',
        fontSize: 60,
        textAlign: 'right',
        marginTop:180,

    },
    textoBoton: {
        color: 'black',
        fontSize: 34
    },
    botonNum: {
        width: 90, // Tamaño del botón
        height: 90, // Tamaño del botón
        borderRadius: 50, // Hace el botón completamente redondo (la mitad del ancho o alto)
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#828282',
        margin: '1%',
        marginRight:12,
        marginBottom: 15,
    },
    boton: {
        width: 87, // Tamaño del botón
        height: 87, // Tamaño del botón
        borderRadius: 50, // Hace el botón completamente redondo (la mitad del ancho o alto)
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
 
        margin: '1.3%',
        marginLeft: 12,
        marginBottom: 20,
    },
    estiloCaja:{
        height:280,
        margin:5,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:10,
        backgroundColor: 'white',
    },
    titulo:{
        fontSize:25,
        padding:7,
        fontWeight: 'bold',
    },
    cardItem:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#adacac',
        borderRadius: 10,
        marginBottom:15,
        
    },
    imgItem:{
        margin:10,   
    },
    infoItem:{
        flex: 2,
        margin:7,
        fontSize:25,
    },
    textNameItem:{
        fontWeight: 'bold',
        fontSize:20,
    },
    textInfoItem:{
        fontSize:16,
    }

});