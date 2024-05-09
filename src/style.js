import { Fonts } from './CustomFonts';

export const styles = {
    centeredView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    modalView: {
        marginTop: 10,
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
        height: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: -20,
        left: 10,
        alignItems: 'center',
        width: '100%',
    },
    btnStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: '#008DDA',
    },
    buttonClose: {
        backgroundColor: 'transparent',
        left: 5,
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
        left: 10,
        fontSize: 16,
    },
    svStyle: {
        flex: 1,
        backgroundColor: 'transparent',
        alignSelf: 'stretch',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#101523',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        padding: 5,

    },
    rowData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    data: {
        textAlign: 'left',
        flex: 1,
        fontFamily: Fonts.SFPro,
        padding: 2,
        margin: 2,
        color: 'white',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'space-between',
        fontFamily: Fonts.ISMR,
    },
    column: {
        flex: 1,
        padding: 5,
    },
    modalContainer: {
        flex: 1,
        top: -15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 3,
    },
    rowEven: {
        backgroundColor: '#2E344A',
    },
    rowOdd: {
        backgroundColor: '#282D41',
    },
    dataCenter: {
        textAlign: 'center',
    },
    dataRight: {
        textAlign: 'right',
    },
};
