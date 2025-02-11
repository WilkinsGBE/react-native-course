import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/search";

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row itmes.center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source ={images.avatar} className="size-12 rounded-full"/>
            <View className="flex flex-col items-start mt-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-base font-rubik-medium text-black-300">Wilkins</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6"/>
        </View>
        <Search />
      </View>
    </SafeAreaView>
  );
};

export default Home;
