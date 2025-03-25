import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";

const App = () => {
  return <Redirect href="/home" />;
  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-5">
  //       <Text style={{ fontFamily: "WorkSans-Black" }} className="text-3xl">
  //         Hola Mundo
  //       </Text>
  //       <Text className="text-4xl font-work-black text-primary">
  //         Hola Mundo
  //       </Text>
  //       <Text className="text-3xl font-work-light text-secondary">
  //         Hola Mundo
  //       </Text>
  //       <Text className="text-2xl font-work-medium text-secondary-100">
  //         Hola Mundo
  //       </Text>
  //       <Text className="text-xl  text-secondary-200">Hola Mundo</Text>
  //       <Link href="/products">Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
