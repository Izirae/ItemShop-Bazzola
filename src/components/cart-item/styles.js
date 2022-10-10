import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: colors.white,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,
    },
    headerContainer: {
        flexDirection:'row',
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontFamily: "Lato-Bold",
        color: colors.text,
        marginTop: 5,
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    content: {
        flex: 1,
    },
    quantity: {
        fontSize: 14,
        fontFamily: "Lato-Regular",
        color: colors.secondary,
        margin: 10,
        marginBottom: 15,
    },
    price: {
        fontSize: 14,
        color: colors.secondary,
        fontFamily: "Lato-Bold",
    },
})