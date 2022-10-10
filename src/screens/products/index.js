import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { ProductItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { filteredProducts, selectedProduct } from "../../store/actions";


const Products = ({ navigation }) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.selected);

    const productsFiltered = useSelector((state) => state.products.filteredProducts);

    useEffect(() => {
        dispatch(filteredProducts(selectedCategory.id))
    }, []);

    const onSelected = (item) => {
        dispatch(selectedProduct(item.id))
        navigation.navigate('Product', { name: item.title});
    };   
    const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />

    return (
        <FlatList 
            data={productsFiltered}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={{backgroundColor: '#060e1f'}}
        />
    )
};

export default Products;