import React, { useState } from 'react';
import { Modal, Text, Pressable, View, Image, ScrollView } from 'react-native';
import { styles } from '../style';
import closeIcon from '../../assets/imgs/close.png';

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalText}>Blinds Structure</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Image
                                    source={closeIcon}
                                    style={{ width: 20, height: 20 }}
                                />
                            </Pressable>
                        </View>
                        <ScrollView style={styles.svStyle}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={styles.text}>Level</Text>
                                </View>
                                <View style={styles.column}>
                                    <Text style={styles.text}>Time</Text>
                                </View>
                                <View style={styles.column}>
                                    <Text style={styles.text}>Blinds</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    );
};

export default App;
