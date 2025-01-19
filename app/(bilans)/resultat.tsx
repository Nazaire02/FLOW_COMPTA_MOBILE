import { CompteResultat } from '@/class/compteResultat';
import { Colors } from '@/constants/Colors';
import { getAllCompteResultat } from '@/services/bilanService';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';

export default function resultat() {
    const [compteResultatData, setCompteResultatData] = useState<CompteResultat[]>([])
    const labels = ['Imputation', 'Ref', 'Libelles','','(2)', 'Note', 'Net(Exercice N)', 'Net(Exercice N-1)'];

    async function getCompteResultat() {
        try {
            const resp = await getAllCompteResultat()
            setCompteResultatData(resp.data.data)
        } catch (error) {
            Alert.alert(
                "Erreur",
                "Oops, une erreur s'est produite"
            );
        }
    }

    useEffect(() => {
        getCompteResultat()
    }, [])

    const renderTable = (items: CompteResultat[]) => (
        <View style={styles.table}>
            <View style={{ flex: 1, marginRight: 2, minWidth: "1%" }}>
                {labels.map((label, index) => (
                    <View style={styles.tableHeaderItem} key={index}>
                        <Text style={styles.tableHeaderItemText}>{label}</Text>
                    </View>
                ))}
            </View>
            <ScrollView horizontal style={{ flex: 1 }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    {items.map((item: CompteResultat, index: number) => (
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
                                <Text style={styles.tableColumnItemText}>{item.entite}</Text>
                            </View>
                            <View style={styles.tableColumnItem}>
                                <Text style={styles.tableColumnItemText}>{item['(2)']}</Text>
                            </View>
                            <View style={styles.tableColumnItem}>
                                <Text style={styles.tableColumnItemText}>{item.note}</Text>
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
                    <Text style={styles.headerText}>Compte de résultat</Text>
                </View>
                <View style={{ marginBottom: 40 }}>
                    {renderTable(compteResultatData)}
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