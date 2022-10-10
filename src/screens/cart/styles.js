import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#060e1f",
    },
    containerList: {
        flex: 1,
        backgroundColor: "#060e1f",
    },
    footer: {
        borderTopColor: colors.secondary,
        borderTopWidth: 1,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10
    },
    buttonConfirm: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textButtonConfirm: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    totalTitle: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
    },
    total: {
        fontFamily: "Lato-Bold",
        fontSize: 16,
    },
    disabledButtonConfirm: {
        backgroundColor: colors.gray,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});