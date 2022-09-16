import { View, TouchableOpacity, Text, Modal, StyleSheet, Alert, Image } from "react-native";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { texts } from "../../pages/maps/styles.js";
import ModalDropdown from 'react-native-modal-dropdown';
import { addReservation, addReservationAndOpenLocker, openLocker } from "../../database/databaseHandler.js";


function decideOnStyleBasedOnDate(date) {

}


function generateModal({ showModal, setShowModal }) {
    // this here generates a modal so that the user can pick a locker
    // if the user doesn't have a preference, then it can select the random button
    // var lockersArray = Locker.getLockers;
    // for (let i = 0; i < lockersArray.length; i ++){
    //     lockersArray[i].idOfLocker = i;
    // }
    return (
        <Modal
            animationType="fade"

            visible={showModal}
            onRequestClose={() => {
                console.log('Closed by back button on android or drag on iOS')
                setShowModal(!showModal);
            }}
        >

            <View style={{ width: "75%", backgroundColor: 'blue', height: "50%", alignSelf: 'center', justifyContent: 'flex-end', marginTop: "25%" }}>


                <TouchableOpacity
                    style={[styles.styleOfPickerButton]}
                    onPress={() => setShowModal(!showModal)}
                >
                </TouchableOpacity>
            </View>
        </Modal>);
}


export function Reservation({ navigation, route }) {
    var user = route.params.user;
    console.log(user);
    var today = new Date();
    const [date, setDate] = useState(today);
    const [mode, setMode] = useState('date');
    const [showPicker, setShowPicker] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [lockerSelected, setLockerSelected] = useState(-1);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowPicker(false);
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setMode('date');
        setShowPicker(true);
    };

    const showTimepicker = () => {
        setMode('time');
        setShowPicker(true);
    };

    const showLockerPicker = () => {
        setShowModal(true);
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.topContainer}>
                <Text style={styles.topContainerText}>
                    Set your charging preferences here!
                </Text>
                <Image
                    style={styles.image}
                    source={require('../../assets/logo/dpitLogo.png')}
                />
            </View>

            <View
                style={styles.selectorContainer}
            >
                <View style={styles.pickerContainer}>
                    <Text style={[styles.dropDownText, { marginRight: "16%" }]}>
                        Charger Type:
                    </Text>
                    <ModalDropdown options={['USB-C', 'Lightning']} style={styles.dropDown} textStyle={styles.dropDownText} dropdownTextStyle={styles.dropDownText} dropdownStyle={[styles.dropDown, { height: 110, width: 150 }]} defaultValue={"USB-C"} />
                </View>

                <View style={styles.pickerContainer}>
                    <Text style={[styles.dropDownText, { marginRight: "30%" }]}>
                        Payment:
                    </Text>
                    <ModalDropdown options={['Visa', 'Mastercard', 'Cash']} textStyle={styles.dropDownText} dropdownTextStyle={styles.dropDownText} dropdownStyle={styles.dropDown} defaultValue={"Visa"} />
                </View>

                <View style={styles.pickerContainer}>
                    <Text style={[styles.dropDownText, { marginRight: "40%" }]}>
                        Hour:
                    </Text>
                    <TouchableOpacity onPress={showTimepicker} >
                        <Text style={styles.dropDownText}>
                            {date.getHours()}:{date.getMinutes()}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.pickerContainer}>
                    <Text style={[styles.dropDownText, { marginRight: "40%" }]}>
                        Date:
                    </Text>
                    <TouchableOpacity onPress={showDatepicker} >
                        <Text style={styles.dropDownText}>
                            {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.submit_button}
                    onPress={() => {
                        ((async () => {
                            addReservationAndOpenLocker(user.email, "USB-C", "Visa", "16:34", "30.8.2022");
                        })()).catch(console.error);


                        alert("You succsessfully reserved a station!")

                        navigation.navigate("Tabs", { user: user });
                    }}
                >
                    <Text style={styles.submit_text}>
                        Book Now
                    </Text>
                </TouchableOpacity>
            </View>






            {/* <TouchableOpacity onPress={showLockerPicker} style={styles.styleOfPickerButton}>

            </TouchableOpacity> */}


            {showPicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    minimumDate={today}
                    style={{ width: "100%" }}
                />
            )}

            {generateModal({ showModal, setShowModal })}





        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "white",
        marginBottom: "10%"
    },
    image: {
        marginTop: 20,
        height: 250,
        width: 250,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    selectorContainer: {
        marginTop: "5%",
        marginBottom: "10%"
    },
    dropDown: {
        justifyContent: "center",
        borderRadius: 20
    },
    dropDownText: {
        fontSize: 23,
        fontWeight: "500",
        color: "#444444",
        marginRight: "20%"
    },
    pickerContainer: {
        marginTop: "5%",
        marginLeft: 50,
        flexDirection: "row"
    },
    topContainer: {
        paddingTop: "5%",
        alignSelf: "center"
    },
    topContainerText: {
        fontSize: 40
    },
    submit_button: {
        height: 70,
        width: 300,
        marginTop: 50,
        backgroundColor: 'deepskyblue',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    submit_text: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700'
    }
});