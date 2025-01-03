import { planComptable } from '@/class/planComptable';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, TextInput, ScrollView, SafeAreaView } from 'react-native';

export default function comptable() {
    const [data, setData] = useState<planComptable[]>([
        { id: '1', nCompte: '#1', intitule: 'FAJ CH', typeCompte: 'Bilan', poste: 'Client', extraitCompte: false, traitementAnalytique: true },
        { id: '2', nCompte: '#101100', intitule: 'Capital souscrit, non appelé', typeCompte: 'Bilan', poste: 'Client', extraitCompte: true, traitementAnalytique: false },
    ]);

    const renderItem = (item: planComptable, index: number) => (
        <View style={styles.card} key={index}>
            <View style={styles.cardHeader}>
                <Text style={styles.accountNumber}>{item.nCompte}</Text>
                <Text style={styles.accountTitle}>{item.intitule}</Text>
            </View>
            <View style={styles.cardBody}>
                <View style={styles.toggleGroup}>
                    <Text style={styles.label}>Extrait Compte</Text>
                    <Switch
                        value={item.extraitCompte}
                        disabled={true}
                    />
                </View>
                <View style={styles.toggleGroup}>
                    <Text style={styles.label}>Traitement Analytique</Text>
                    <Switch
                        value={item.traitementAnalytique}
                        disabled={true}
                    />
                </View>
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <MaterialIcons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
                    <Text style={styles.headerText}>Plan comptable</Text>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchInput} placeholder="Rechercher un compte" />
                    <TouchableOpacity style={styles.statusButton}>
                        <Text style={styles.statusButtonText}>Select Status</Text>
                        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:10}}>
                    {data.map((item, index) => (
                        renderItem(item, index)
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
        paddingHorizontal:10
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    list: { padding: 16 },
    card: { backgroundColor: '#fff', borderRadius: 8, marginBottom: 16, padding: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8 },
    cardHeader: { marginBottom: 8 },
    accountNumber: { fontSize: 14, color: '#FFD700', fontWeight: 'bold' },
    accountTitle: { fontSize: 16, color: '#000' },
    cardBody: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    toggleGroup: { alignItems: 'center' },
    label: { fontSize: 12, color: '#000', marginBottom: 4 },
    actions: { flexDirection: 'row', justifyContent: 'space-around' },
    actionText: { fontSize: 18, color: '#FFD700' },
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
});