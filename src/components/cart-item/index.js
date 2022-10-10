import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/themes";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={{ uri: item.uri }}
                    style={{ width: 30, height: 30, marginEnd: 10 }} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.quantity}>Quant.: {item.quantity}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/img/coin2.png')}
                            style={{ width: 30, height: 20, marginEnd: 2 }} />
                        <Text style={styles.total}>{item.total}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color={colors.text} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem;