import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/shared/CustomButton";
import { Link, router, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

// por ej /products esta asi ya que como drawer
//tabs y stack están entre paréntesis, para escribir esas rutas
//no hace falta poner tipo /(drawer)/(tabs)/(stack)/products
//ya que con los paréntesis, el drawer, tabs y stack son ignorados
//no hace falta
const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton className="mb-2" onPress={onToggleDrawer}>
          Abrir Menu
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Profile
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Ajustes
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton className="mb-10" color="primary" variant="text-only">
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
