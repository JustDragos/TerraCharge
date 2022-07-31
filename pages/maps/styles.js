import { StyleSheet } from "react-native";

const containers = StyleSheet.create({
    containerBasic: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
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
    }

})

const views = StyleSheet.create({
    styleOfSearchBar: {
        borderRadius: 10,
        margin: 10,
        color: '#000',
        borderColor: '#666',
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginTop: 40,
        width: "50%",
        height: 45,
        paddingHorizontal: 10,
        fontSize: 18,
    },
})

const texts = StyleSheet.create({
    whiteText: {
        color: "white",
        fontWeight: "600",
    }

})

export { containers, buttons, views, texts }
