import {useEffect, useState} from "react";
import {api} from "./src/services/api";
import {ScrollView, TextInput, View, Image, Text} from "react-native";
import {styles} from "./src/styles/styles";
import Card from "./src/components/Card";


export default function App(){
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function loadProducts(){
        try {
          const res = await api.get('products');
          setProducts(res.data);
        } catch (error){
          console.log("Erro: " + error);
        }
    }
    loadProducts();
  }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );
  const handleSearch = (text) => {
    setSearch(text);
  }

  return (
      <View style={styles.container}>
          <TextInput style={styles.input}
                     placeholder="Insert the product name: "
                     value={search}
                     onChangeText={handleSearch}
          />
          <Text style={styles.title}>Resultado(s) da pesquisa </Text>

          <ScrollView contentContainerStyle={styles.cardContainer}>
              {filteredProducts.map(( product ) => (
                  <Card product={product} />
              ))}
          </ScrollView>
      </View>


  )
}