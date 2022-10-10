import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={() => onSelected(item)}>
                <View style={{flexDirection:'row'}}>
                    <Image source={{uri: item.uri}}
                    style={{width: 30, height: 30, marginEnd: 10}}/>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../../assets/img/coin2.png')}
                        style={{width: 30, height: 20, marginEnd: 2}}/>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                    <Text style={styles.detail}>Type: {item.type}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default ProductItem;