import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { planItem } from '@/class/planItem';

export default function index() {
  const plans = [
    { id: 1, title: 'Plan Analytique 1', data: [{ label: 'Rentabilité des Services', value: '4' }] },
    { id: 2, title: 'Plan Analytique 2', data: [{ label: 'Rentabilité des Clients', value: '4' }] },
  ];

  const RenderPlan = (item:planItem, index: number) => (
    <View style={styles.planContainer} key={index}>
      <View style={styles.planHeader}>
        <Text style={styles.planTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.createButton}>
          <MaterialIcons name="add" size={20} color="black" />
          <Text style={styles.createButtonText}>Créer</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={item.data}
        keyExtractor={(data, index) => index.toString()}
        renderItem={({ item: dataItem }) => (
          <View style={styles.dataRow}>
            <Text style={styles.label}>{dataItem.label}</Text>
            <Text style={styles.value}>{dataItem.value}</Text>
          </View>
        )}
      />
      <View style={styles.actions}>
        <TouchableOpacity>
          <MaterialIcons name="mail" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="visibility" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#FFF"}}>
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Rechercher une opération" />
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusButtonText}>Select Status</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {plans.map((plan, index)=>(
          <RenderPlan index={index} item={plan}/>
        ))}
      </ScrollView>
      <FlatList data={plans} keyExtractor={(item) => item.id.toString()} renderItem={renderPlan} />
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFF',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#FFF',
  },
  statusButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#FFF',
  },
  statusButtonText: {
    fontSize: 14,
    marginRight: 5,
    color: 'black',
  },
  planContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 8,
    borderRadius: 5,
  },
  createButtonText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'black',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: 'black',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});