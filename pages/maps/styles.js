import { StyleSheet } from "react-native";

const containers = StyleSheet.create({
    containerBasic: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    }
})

const images = StyleSheet.create({
    styleOfIcon: {
        width: "40%",
        height: "100%",
        marginLeft: 0,
        alignSelf: 'flex-start',
    },
    styleOfVectorForward: {
        width: 25,
        height: 25,
        tintColor: 'grey'
    },
    
})

const buttons = StyleSheet.create({
    littleButton: {
        height: 50,
        width: 50,

        backgroundColor: "#140078",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 10,
        marginRight: 50,
        alignSelf: "flex-end",
        borderRadius: 20,
        shadowColor: "#8559da",
        shadowOpacity: 0.7,
        shadowOffset: {
            height: 4,
            width: 4,
        },
        flexDirection: "row",
        shadowRadius: 5,
        elevation: 6,
    },
    bigButton: {
        height: 50,
        width: 150,

        backgroundColor: "#140078",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
        marginRight: 50,
        alignSelf: "flex-end",
        borderRadius: 20,
        shadowColor: "#8559da",
        shadowOpacity: 0.7,
        shadowOffset: {
            height: 4,
            width: 4,
        },
        flexDirection: "row",
        shadowRadius: 5,
        elevation: 6,
    },
    buttonOfVectorForward:{
        marginLeft: "5%",
        marginRight: "5%",
        width: 35,
        height: 35,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

})

const views = StyleSheet.create({
    styleOfSearchBar: {
        color: '#000',
        borderColor: '#666',
        backgroundColor: '#FFF',
        borderWidth: 1,
        width: "50%",
        height: 45,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    eachListElement: {
        minHeight: 150,
        width: "100%",
        marginLeft: 1,
        marginRight: 2,
        marginBottom: 3,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 10,

    }
})

const texts = StyleSheet.create({
    whiteText: {
        color: "white",
        fontWeight: "600",
    },
    redText: {
        color: "red",
        fontWeight: "600",
    },
    greenText: {
        color: "green",
        fontWeight: "600",
    }
})

export { containers, buttons, views, texts, images }
