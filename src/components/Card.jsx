import {styles} from "../styles/styles";
import {View, Image, Text} from "react-native";


export default function Card({product}){
    return (
        <View key={ product.id} style={styles.card}>
            {product.image && (
                <Image
                    source={{uri: product.image}}
                    style={styles.image}
                    resizeMode='cover'
                />
            )}

            <View style={styles.infoContainer}>
                <Text style={styles.titleProduct}>
                    {product.title}
                </Text>
                <Text style={styles.url}>
                    {product.description}
                </Text>
                <Text style={styles.description}>
                    {product.category}
                </Text>
            </View>
        </View>
    )
}