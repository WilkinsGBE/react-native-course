import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome to ReState</Text>
      <Link rel="stylesheet" href="/sign-in">Sign In</Link>
      <Link rel="stylesheet" href="/explore">Explore</Link>
      <Link rel="stylesheet" href="/profile">Profile</Link>
      <Link rel="stylesheet" href="/propreties/1">Proprety</Link>
    </View>
  );
}
