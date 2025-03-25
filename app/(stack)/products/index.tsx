import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { products } from "@/store/products.store";
import { Link, Stack, useRouter } from "expo-router";

const ProductsScreen = () => {
  const router = useRouter();
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="">{item.description}</Text>

            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
              <Link href={`/(stack)/products/${item.id}`}>Ver detalles</Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
