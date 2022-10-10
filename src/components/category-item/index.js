import React from 'react';
import { colors } from "../../constants/themes";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { StyleSheet } from "react-native";

const CategoryItem = ({ item, onSelected }) => {

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.categories}>
                        <Text style={{
                                    fontFamily: 'Lato-Bold',
                                    fontSize: 20,
                                    color: colors.background,
                                    width: '100%',
                                    textAlign: 'center', 
                                    backgroundColor: item.color,
                        }}>{item.title}</Text>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
            </View>
        </TouchableOpacity>
    )
}
export default CategoryItem;