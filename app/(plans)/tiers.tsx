import { SuiviTiersItem } from '@/class/suiviTiersItem';
import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function tiers() {
    const data: SuiviTiersItem[] = [
        {
            numTiers: '#110009',
            mainAccount: '#030303',
            intitule: 'Company A',
            typeTiers: 'Type tiers',
        },
        {
            numTiers: '#110009',
            mainAccount: '#030303',
            intitule: 'Company A',
            typeTiers: 'Type tiers',
        },
        {
            numTiers: '#110009',
            mainAccount: '#030303',
            intitule: 'Company A',
            typeTiers: 'Type tiers',
        },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const filteredData: SuiviTiersItem[] = data.filter(item => item.numTiers.toLowerCase().includes(searchQuery.toLowerCase()));

    const renderCard = (item: SuiviTiersItem, index: number) => (
        <View style={styles.card} key={index}>
            <View>
            <Text style={styles.cardTitle}>N tier: {item.numTiers}</Text>
            <Text>Compte général: {item.mainAccount}</Text>
            <Text>Intitulé: {item.intitule}</Text>
            <Text>Type de tiers: {item.typeTiers}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity>
                    <MaterialIcons name="email" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="visibility" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="edit" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <MaterialIcons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
                    <Text style={styles.headerText}>Plan tiers</Text>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Rechercher un compte"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity style={styles.statusButton}>
                        <Text style={styles.statusButtonText}>Select Status</Text>
                        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => renderCard(item, index))
                    ) : (
                        <Text style={styles.noData}>Aucune donnée n'est disponible pour la requête de recherche donnée.</Text>
                    )}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
    title: { color: '#333', fontSize: 20, marginBottom: 16, textAlign: 'center' },
    summaryContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    summaryCard: { backgroundColor: '#F5F5F5', padding: 16, marginBottom: 8, borderRadius: 8, width: '48%' },
    summaryNumber: { color: '#333', fontSize: 20, fontWeight: 'bold' },
    summaryLabel: { color: Colors.light.tint, fontSize: 12 },
    actionsContainer: { marginTop: 16 },
    button: { backgroundColor: Colors.light.tint, padding: 12, borderRadius: 8, marginBottom: 8 },
    buttonText: { color: '#FFF', textAlign: 'center' },
    card: { backgroundColor: '#F9F9F9', padding: 16, borderRadius: 8, marginBottom: 8 },
    cardTitle: { color: Colors.light.tint, fontSize: 16, fontWeight: 'bold' },
    noData: { color: '#333', textAlign: 'center', marginVertical: 16 },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
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
    actions: { flexDirection: 'row', justifyContent: 'space-around', marginTop:20 },
});
