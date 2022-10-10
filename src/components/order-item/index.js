import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/themes";
import { Ionicons } from "@expo/vector-icons";

const formDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem = ({ item, onCancel }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../../assets/img/coin2.png')}
                        style={{ width: 30, height: 20, marginEnd: 2 }} />
                    <Text style={styles.total}>{item.total}</Text>
                </View>
                <TouchableOpacity onPress={() => onCancel(item.id)}>
                    <Ionicons name="close" size={24} color={colors.text} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.date}>{formDate(item.date)}</Text>
            </View>
        </View>
    )
}

export default OrderItem;