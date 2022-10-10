import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 2,
        backgroundColor: colors.primary,
        height: 80,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 2,
    },
    date: {
        color: colors.secondary,
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    total: {
        fontSize: 16,
        fontFamily: "Lato-Bold",
        color: colors.text
    },
});