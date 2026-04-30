import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        borderWidth: '1',
        borderColor: 'black',
        backgroundColor: '#F5F5F5',
    },
    input: {
        flex: 1,
        alignSelf: "center",
        width: '70%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical:10,
        marginTop: 60
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
        padding: 20
    },
    list: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    card: {
        width: 300,
        height: 350,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    image: {
        width: '100%',
        height: '60%',
    },

    infoContainer: {
        padding: 10,
        flex: 1,
        justifyContent: 'space-between',
    },

    titleProduct: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333'
    },

    url: {
        fontSize: 14,
        color: '#666',
        marginTop: 5
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        flexWrap: 'wrap',
    }
})