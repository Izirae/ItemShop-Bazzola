import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        width: '100%'
    },
    title: {
        marginBottom: 40,
        fontFamily: 'Lato-Bold',
        fontSize:30,
        color: colors.secondary,
    },
    text: {
        fontFamily: 'Lato-Bold',
        fontSize:20,
        color: colors.background,
        textAlign: 'center',
        marginBottom: 20
    },
    touch: {
        backgroundColor: colors.secondary,
        borderRadius:50,
        width: 300,
    }
})