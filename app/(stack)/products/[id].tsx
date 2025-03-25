import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack, useLocalSearchParams } from "expo-router";
import { products } from "@/store/products.store";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Detalles",
        }}
      ></Stack.Screen>
      <View className="px-5 mt-10">
        <Text className="font-work-black text-2xl">{product.title}</Text>
        <Text className="">{product.description}</Text>
        <Text className="font-work-black">{product.price}</Text>
      </View>
    </>
  );
};

export default ProductScreen;
