import { useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

export default function AppNavigator() {
    const [currentScreen, setCurrentScreen] = useState("Home");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const navigate = (screen, params = {}) => {
        if (screen === "Details" && params.product) {
            setSelectedProduct(params.product);
            setCurrentScreen("Details");
        } else if (screen === "Home") {
            setSelectedProduct(null);
            setCurrentScreen("Home");
        }
    };

    if (currentScreen === "Home") {
        return <HomeScreen navigation={{ navigate }} />;
    }

    if (currentScreen === "Details") {
        return <DetailsScreen route={{ params: { product: selectedProduct } }} />;
    }

    return null;
}