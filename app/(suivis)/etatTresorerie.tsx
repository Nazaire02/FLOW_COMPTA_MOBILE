import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

export default function etatTresorerie() {
    const data = [
        {
            type: 'CAISSE',
            details: [
                { label: 'Solde initial', septembre: '5000', octobre: '7000' },
                { label: 'Total entrées', septembre: '2000', octobre: '3000' },
                { label: 'Total sorties', septembre: '1000', octobre: '500' },
                { label: 'Solde caisse', septembre: '6000', octobre: '9500' },
            ],
        },
        {
            type: 'BANQUE',
            details: [
                { label: 'Solde initial', septembre: '5000', octobre: '7000' },
                { label: 'Total entrées', septembre: '2000', octobre: '3000' },
                { label: 'Total sorties', septembre: '1000', octobre: '500' },
                { label: 'Solde banque', septembre: '6000', octobre: '9500' },
            ],
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <MaterialIcons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
                    <Text style={styles.headerText}>État de Trésorerie</Text>
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
                    <Text style={styles.footerText}>Trésorerie nette totale</Text>
                    <Text style={styles.footerValue}>19000</Text>
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
