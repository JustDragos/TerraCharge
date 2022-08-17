import { View, TouchableOpacity, Text, Modal, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { texts } from "../../pages/maps/styles.js";

function decideOnStyleBasedOnDate(date) {

}
function generateModal({ showModal, setShowModal }) {
    // this here generates a modal so that the user can pick a locker
    // if the user doesn't have a preference, then it can select the random button
   
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

export function Reservation({ navigation }) {
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
        <View
            style={{ alignItems: 'center' }}
        >
            <Text style={{ marginTop: "20%" }}> Please select the date in which you want to be programmed</Text>
            <TouchableOpacity onPress={showDatepicker} style={styles.styleOfPickerButton} >
                <Text>
                    Date:  {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimepicker} style={styles.styleOfPickerButton}>
                <Text>
                    Hour:  {date.getHours()}:{date.getMinutes()}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={showLockerPicker} style={styles.styleOfPickerButton}>

            </TouchableOpacity>


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
    styleOfPickerButton: {
        marginTop: '10%',
        width: "50%",
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#95D2FF'
    }
});