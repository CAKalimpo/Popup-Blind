import { Fonts } from './CustomFonts';

export const styles = {
    centeredView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    modalView: {
        marginTop: 20,
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
        height: '60%',
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
        fontSize: 22,
    },
    svStyle: {
        backgroundColor: 'transparent',
        alignSelf: 'stretch',
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#101523',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        padding: 10,
    },
    rowData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
    },
    data: {
        textAlign: 'left',
        flex: 1,
        fontFamily: Fonts.SFPro,
        padding: 2,
        margin: 2,
        color: 'white',
        left: 10,
        fontSize: 16,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontFamily: Fonts.ISMR,
        fontSize: 16,
    },
    column: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        top: -15,
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
        left: -10,
    },
    dataRight: {
        textAlign: 'right',
        left: -10,
    },
    titleLeft: {
        left: -25,
    },
    titleMid: {
        left: -10,
    },
    titleRight: {
        right: -25,
    },
};
