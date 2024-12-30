import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function plans() {
const data = [
    { id: '1', title: 'Plan analytique', icon: 'analytics' },
    { id: '2', title: "Plan compta", icon: 'account-balance' },
    { id: '3', title: 'Plan tiers', icon: 'group' }
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

      {/* Cards Section */}
      {data.map((card, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <MaterialIcons name={card.icon} size={32} color={styles.iconColor.color} />
          <Text style={styles.cardText}>{card.title}</Text>
        </TouchableOpacity>
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
  card: {
    width: "90%",
    backgroundColor: "#FFD700",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  iconColor: {
    color: "#000",
  },
});
