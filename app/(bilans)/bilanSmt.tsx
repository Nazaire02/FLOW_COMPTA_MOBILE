import Actif from '@/class/actif';
import { Bilan } from '@/class/bilan';
import Passif from '@/class/passif';
import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';

export default function bilanSmt() {
    const [bilanData, setBilanData] = useState<Bilan>(
        {
            "actifs": [
                {
                    "imputation": "2",
                    "value": false,
                    "libelle": "ACTIF IMMOBILISE (1)"
                },
                {
                    "imputation": "20",
                    "ref": "AA",
                    "value": false,
                    "libelle": "Charges immobilisées"
                },
                {
                    "imputation": "201",
                    "ref": "AB",
                    "libelle": "Frais d'établissement et charges à répartir",
                    "brut": 0,
                    "amort": 0,
                    "net_1": 0,
                    "net_2": 0,
                    "value": true
                }
            ],
            "passifs": [
                {
                    "imputation": "1",
                    "value": false,
                    "libelle": "CAPITAUX PROPRES ET RESSOURCES ASSIMILEES"
                },
                {
                    "imputation": "101",
                    "ref": "CA",
                    "value": false,
                    "libelle": "Capital (101)"
                },
                {
                    "imputation": "1011",
                    "ref": "CB",
                    "libelle": "Actionnaires capital non appelé (1011)",
                    "brut": 0,
                    "amort": 0,
                    "net_1": 0,
                    "net_2": 0,
                    "value": true
                }
            ]
        }
    )

    const actifs = bilanData.actifs;
    const passifs = bilanData.passifs

    const labelsActif = ['Imputation', 'Ref', 'Actif', 'Brut', 'Amort/Prov', 'Net(Exercice N)', 'Net(Exercice N-1)'];
    const labelsPassif = ['Imputation', 'Ref', 'Passif', 'Brut', 'Amort/Prov', 'Net(Exercice N)', 'Net(Exercice N-1)'];

    const renderTable = (items: Actif[] | Passif[], isActif = true) => (
        <View style={styles.table}>
            <View style={{ flex: 1, marginRight: 2, minWidth: "1%" }}>
                {isActif
                    ? labelsActif.map((label, index) => (
                        <View style={styles.tableHeaderItem} key={index}>
                            <Text style={styles.tableHeaderItemText}>{label}</Text>
                        </View>
                    ))
                    : labelsPassif.map((label, index) => (
                        <View style={styles.tableHeaderItem} key={index}>
                            <Text style={styles.tableHeaderItemText}>{label}</Text>
                        </View>
                    ))}
            </View>
            <ScrollView horizontal style={{ flex: 1 }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    {items.map((item: any, index: number) => (
                        <View key={index} style={{ marginRight: 2 }}>
                            <View style={styles.imputation}>
                                <Text style={[styles.tableColumnItemText, { fontWeight: "bold" }]}>{item.imputation}</Text>
                            </View>
                            <View style={styles.tableColumnItem}>
                                <Text style={styles.tableColumnItemText}>{item.ref}</Text>
                            </View>
                            <View style={styles.tableColumnItem}>
                                <Text style={styles.tableColumnItemText}>{item.libelle}</Text>
                            </View>
                            <View style={styles.tableColumnItem}>
                                <Text style={styles.tableColumnItemText}>{item.brut}</Text>
                            </View>
                            <View style={styles.tableColumnItem}>
                                <Text style={styles.tableColumnItemText}>{item.amort}</Text>
                            </View>
                            <View style={styles.tableColumnItem}>
                                <Text style={styles.tableColumnItemText}>{item.net_1}</Text>
                            </View>
                            <View style={styles.tableColumnItem}>
                                <Text style={styles.tableColumnItemText}>{item.net_2}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <MaterialIcons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
                    <Text style={styles.headerText}>Bilan SMT</Text>
                </View>
                <View style={{ marginBottom: 40 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 14, marginBottom: 2 }}>ACTIF</Text>
                    {renderTable(actifs)}
                </View>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 14, marginBottom: 2 }}>PASSIF</Text>
                    {renderTable(passifs, false)}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 3, backgroundColor: '#FFF' },
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
    tableHeaderItem: {
        backgroundColor: "#333",
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 2,
        padding: 13,
    },
    tableHeaderItemText: {
        color: Colors.light.tint,
        fontWeight: "bold"
    },
    table: {
        display: "flex",
        flexDirection: "row",
        flex: 1
    },
    tableColumnItem: {
        backgroundColor: "#F9F9F9",
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 2,
        padding: 13,
    },
    tableColumnItemText: {
        color: "#333",
    },
    imputation: {
        backgroundColor: Colors.light.tint,
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 2,
        padding: 13,
    }
});