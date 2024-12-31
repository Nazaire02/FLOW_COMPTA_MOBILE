import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';

type CardProps = {
    id: string;
    title: string;
    icon: string;
    link:string
};

export default function RectCard({id, title, icon, link}: CardProps){
    return (
        <TouchableOpacity style={styles.card} onPress={()=> router.navigate(link)}>
            <MaterialIcons name={icon} size={32} color={styles.iconColor.color} />
            <Text style={styles.cardText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "90%",
        backgroundColor: Colors.light.tint,
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
})