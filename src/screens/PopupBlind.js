import React, { useState, useEffect } from 'react';
import {
    Modal, Text, Pressable, View, Image, ScrollView,
} from 'react-native';
import { styles } from '../style';
import closeIcon from '../../assets/imgs/close.png';

const PopUpBlind = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [blindData, setBlindData] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBlindData((prevData) => {
                const newLevel = prevData.length + 1;
                if (newLevel > 30) return prevData;
                return [...prevData, generateBlindData(newLevel)];
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const generateBlindData = (level) => {
        if (level > 30) return null;

        const timeHours = Math.floor(level * 180 / 60);
        const timeMinutes = (level * 180) % 60;
        const timeString = `${timeHours.toString().padStart(2, '0')}:${timeMinutes.toString().padStart(2, '0')}`;
        const bigBlind = 10 * 2 ** (level - 1);
        const blinds = `${bigBlind}/${bigBlind * 2}`;
        return { level, timeString, blinds };
    };

    const getRowBackgroundColor = (index) => (index % 2 === 0 ? styles.rowEven : styles.rowOdd);

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
                                    style={{ width: 25, height: 20 }}
                                />
                            </Pressable>
                        </View>
                        <View style={styles.modalContainer}>
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
                            <ScrollView style={styles.svStyle}>
                                {blindData.map((blind, index) => (
                                    <View style={[styles.rowData, getRowBackgroundColor(index)]} key={blind.level}>
                                        <Text style={styles.data}>{blind.level}</Text>
                                        <Text style={[styles.data, styles.dataCenter]}>{blind.timeString}</Text>
                                        <Text style={[styles.data, styles.dataRight]}>{blind.blinds}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Modal>
            {!modalVisible && (
                <View style={styles.btnStyle}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>Pop-up Blinds</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
};

export default PopUpBlind;
