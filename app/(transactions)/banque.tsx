import { TransBanqueItem } from '@/class/transBanqueItem';
import SummaryCard from '@/components/SummaryCard';
import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Banque() {
    const data: TransBanqueItem[] = [
        {
            date: '2024-12-01',
            libelle: 'Invoice 001',
            tiers: 'Company A',
            client: 'Company A',
            source: 'Paid',
            entree: '$1,200',
            sortie: '$200',
            solde: '$1,000',
        },
        {
            date: '2024-12-02',
            libelle: 'Invoice 002',
            tiers: 'Company B',
            client: 'Company A',
            source: 'Unpaid',
            entree: '$800',
            sortie: '$0',
            solde: '$800',
        },
        {
            date: '2024-12-03',
            libelle: 'Invoice 003',
            tiers: 'Company C',
            client: 'Company A',
            source: 'Paid',
            entree: '$1,500',
            sortie: '$300',
            solde: '$1,200',
        },
    ];

    const summaryDatas = [
        { label: "Clients", number: "24" },
        { label: "Invoices", number: "165" },
        { label: "Paid", number: "$2.46k" },
        { label: "Unpaid", number: "$876" },
    ]

    const [searchQuery, setSearchQuery] = useState('');
    const filteredData: TransBanqueItem[] = data.filter(item => item.libelle.toLowerCase().includes(searchQuery.toLowerCase()));

    const renderCard = (item: TransBanqueItem, index: number) => (
        <View style={styles.card} key={index}>
            <Text style={styles.cardTitle}>Date: {item.date}</Text>
            <Text>Libelle: {item.libelle}</Text>
            <Text>Tiers: {item.tiers}</Text>
            <Text>Client: {item.client}</Text>
            <Text>Source/État: {item.source}</Text>
            <Text>Entrée: {item.entree}</Text>
            <Text>Sortie: {item.sortie}</Text>
            <Text>Solde: {item.solde}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <MaterialIcons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
                    <Text style={styles.headerText}>Banque</Text>
                </View>
                <View style={styles.summaryContainer}>
                    {summaryDatas.map((data, index) => (
                        <SummaryCard number={data.number} label={data.label} key={index}/>
                    ))}
                </View>
                <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Saisie Manuelle</Text>
                    </TouchableOpacity>
                    <View style={styles.searchBar}>
                        <MaterialIcons name="search" size={24} color="#6c757d" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
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
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    buttonText: { color: '#FFF', textAlign: 'center' },
    card: { backgroundColor: '#F9F9F9', padding: 16, borderRadius: 8, marginBottom: 8 },
    cardTitle: { color: Colors.light.tint, fontSize: 16, fontWeight: 'bold' },
    noData: { color: '#333', textAlign: 'center', marginVertical: 16 },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
});
