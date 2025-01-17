import { Colors } from '@/constants/Colors';
import { getAllBilanSmt } from '@/services/bilanService';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

export default function index() {
    const data = [
        {
            type: 'PRODUITS',
            details: [
                { label: 'Honoraire assistance', septembre: '5000', octobre: '7000' },
                { label: 'Honoraire service juridique', septembre: '2000', octobre: '3000' },
                { label: 'Total produits', septembre: '1000', octobre: '500' },
            ],
        },
        {
            type: 'CHARGES',
            details: [
                { label: "Achat de produits d'entretien", septembre: '5000', octobre: '7000' },
                { label: 'Carburant', septembre: '2000', octobre: '3000' },
                { label: 'Transport', septembre: '1000', octobre: '500' },
                { label: 'Total des charges', septembre: '6000', octobre: '9500' },
            ],
        },
    ];

    async function getBilanSmt() {
        try {
            const resp = await getAllBilanSmt()
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getBilanSmt()
    }, [])
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <MaterialIcons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
                    <Text style={styles.headerText}>Compte d'exploitation</Text>
                </View>
                {data.map((section, index) => (
                    <View key={index} style={styles.sectionCard}>
                        <Text style={styles.sectionTitle}>{section.type}</Text>
                        {section.details.map((item, idx) => (
                            <View key={idx} style={styles.row}>
                                <Text style={styles.cell}>{item.label}</Text>
                                <Text style={styles.cell}>{item.septembre}</Text>
                                <Text style={styles.cell}>{item.octobre}</Text>
                            </View>
                        ))}
                    </View>
                ))}

                {/* Total Treasury */}
                <View style={styles.footerCard}>
                    <Text style={styles.cell}>RESULTAT D'EXPLOITATION</Text>
                    <Text style={styles.cell}>19000</Text>
                    <Text style={styles.cell}>20000</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 16,
    },
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sectionCard: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        marginBottom: 16,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    cell: {
        fontSize: 14,
        flex: 1,
        textAlign: 'center',
    },
    footerCard: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        marginTop: 16,
        padding: 16,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    footerText: {
        fontSize: 16,
    },
    footerValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.tint,
    },
    footer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
