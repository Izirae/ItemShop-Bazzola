import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.primary,
        height: 120,
    },
    item: {
        flex: 1,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.text,
        marginTop: 5,
    },
    price: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.secondary,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: colors.secondary,
    },
    detail: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: colors.secondary,
    },
});