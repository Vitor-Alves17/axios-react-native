import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { styles } from "../styles/styles";

export default function DetailsScreen({ route }) {
    const { product } = route.params;

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView contentContainerStyle={styles.detailsContainer}>
                <Image source={{ uri: product.image }} style={styles.detailsImage} />
                <Text style={styles.detailsTitle}>{product.title}</Text>
                <Text style={styles.detailsCategory}>{product.category}</Text>
                <Text style={styles.detailsPrice}>R$ {product.price}</Text>
                <Text style={styles.detailsDescription}>{product.description}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}