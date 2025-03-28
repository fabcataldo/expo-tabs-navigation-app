import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/tabs/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/tabs/profile")}
        >
          Profile
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/tabs/settings")}
        >
          Ajustes
        </CustomButton>

        <Link href="/tabs/products" asChild>
          <CustomButton
            className="mb-10"
            color="primary"
            variant="text-only"
            onPress={() => router.push("/(stack)/products")}
          >
            Productos
          </CustomButton>
        </Link>

        {/* <Link href="/products" className="mb-5">
          Productos
        </Link>
        <Link href="/profile" className="mb-5">
          Perfil
        </Link>
        <Link href="/settings" className="mb-5">
          Settings
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
