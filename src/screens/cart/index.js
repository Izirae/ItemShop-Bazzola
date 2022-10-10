import React from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";
import CartItem from "../../components/cart-item";
import { useSelector, useDispatch } from "react-redux";
import { confirmCart, removeFromCart } from "../../store/actions";

const Cart = ({ navigation }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const onDelete = (id) => {
        dispatch(removeFromCart(id))
    }

    const onConfirm = () => {
        dispatch(confirmCart(items, total));
    }

    const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />

    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    style={styles.containerList}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={items.length === 0 ? styles.disabledButtonConfirm : styles.buttonConfirm}
                    onPress={onConfirm}
                    disabled={items.length === 0}
                >
                    <Text style={styles.textButtonConfirm}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total: </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/img/coin.png')}
                                style={{ width: 29, height: 23, marginEnd: 3 }} />
                            <Text style={styles.price}>{total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Cart;