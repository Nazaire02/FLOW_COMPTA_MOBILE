import React from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const data = [
  { id: '1', title: 'Compte analytique', icon: 'analytics' },
  { id: '2', title: "Compte d'exploitation", icon: 'work' },
  { id: '3', title: 'Compte de résultat SMT', icon: 'assessment' },
  { id: '4', title: 'Amortissement', icon: 'event' },
  { id: '5', title: 'Balance SLT', icon: 'balance' },
  { id: '6', title: 'Bilan SMT', icon: 'insert-chart' },
  { id: '7', title: 'Bilan mensuel', icon: 'calendar-today' },
];

export default function bilansComptes() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginHorizontal:19}}> 
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BlurView intensity={50} style={styles.card}>
            <MaterialIcons name={item.icon} size={30} color="#FFD700" />
            <Text style={styles.cardText}>{item.title}</Text>
          </BlurView>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF', // White background for the screen
      padding: 16,
      justifyContent: 'center'
    },
    listContent: {
      paddingBottom: 16,
    },
    row: {
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    card: {
      flex: 1,
      height: 120,
      margin: 8,
      borderRadius: 16,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.05)', // Subtle black tint for contrast
      overflow: 'hidden',
    },
    cardText: {
      marginTop: 10,
      fontSize: 16,
      color: '#FFD700', // Golden text for highlighting
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });