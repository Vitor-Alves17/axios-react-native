import { useState, useEffect } from "react";
import { View, TextInput, Text, FlatList, SafeAreaView } from "react-native";
import { api } from "../services/api";
import { styles } from "../styles/styles";
import Card from "../components/Card";

export default function HomeScreen({ navigation }) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function loadProducts() {
            try {
                const res = await api.get("products");
                setProducts(res.data);
            } catch (error) {
                console.log("Erro: " + error);
            }
        }
        loadProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearch = (text) => setSearch(text);

    const renderCard = ({ item }) => (
        <Card product={item} onPress={() => navigation.navigate("Details", { product: item })} />
    );

    return (
        <SafeAreaView style={styles.safeContainer}>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome do produto..."
                value={search}
                onChangeText={handleSearch}
            />
            <Text style={styles.title}>Resultado(s) da pesquisa</Text>
            <FlatList
                data={filteredProducts}
                renderItem={renderCard}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.cardContainer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}