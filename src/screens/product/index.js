import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";

const Product = () => {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selected);

    const addCartItem = () => {
        dispatch(addToCart(product));
        console.warn(`${product.title} added to cart`)
    }

    const { id, title, description, price, type } = product || {};
    return (
        <>
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                        source={{ uri: product.uri }}
                        style={{ width: 250, height: 250, borderRadius: 50}}
                    />
                </View>
                <Text style={styles.title}>id: {id}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{description}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../../assets/img/coin2.png')}
                        style={styles.image} />
                    <Text style={styles.text}>{price}</Text>
                </View>
                <Text style={styles.text}>Type: {type}</Text>
            </View>
            <View style={styles.addItem}>
                <TouchableOpacity onPress={addCartItem} style={styles.buttonAdd}>
                    <Text style={styles.addTitle}> Add to Cart </Text>
                </TouchableOpacity>
            </View>
        </>
    )
};

export default Product;