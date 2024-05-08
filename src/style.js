import { Fonts } from './CustomFonts';

export const styles = {
    centeredView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
    },
    modalView: {
        backgroundColor: '#131928',
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: -20,
        left: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'transparent',
        left: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
        flex: 1,
        fontFamily: Fonts.SFPro,
        color: 'white',
        fontSize: 16,
    },
    svStyle: {
        top: -40,
        width: '105%',
        backgroundColor: '#101523',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
        margin: 5,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'space-between',
        fontFamily: Fonts.ISMR,
    },
    column: {
        alignItems: 'center',
    },
};
