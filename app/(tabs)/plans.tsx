import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import RectCard from "@/components/RectCard";

export default function plans() {
  const data = [
    { id: '1', title: 'Plan analytique', icon: 'analytics', link:"" },
    { id: '2', title: "Plan compta", icon: 'account-balance', link:""  },
    { id: '3', title: 'Plan tiers', icon: 'group', link:"" }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.userImage}
          />
          <Text style={styles.userName}>John Doe</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="settings" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {data.map((card, index) => (
        <RectCard id={card.id} title={card.title} icon={card.icon} key={index} />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
