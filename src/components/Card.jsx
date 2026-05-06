import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export default function Card({ product, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={styles.card}>
                {product.image && (
                    <Image
                        source={{ uri: product.image }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                )}
                <View style={styles.infoContainer}>
                    <Text style={styles.titleProduct} numberOfLines={1}>
                        {product.title}
                    </Text>
                    <Text style={styles.category} numberOfLines={1}>
                        {product.category}
                    </Text>
                    <Text style={styles.price}>R$ {product.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}