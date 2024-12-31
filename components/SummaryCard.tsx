import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props={
    number: string,
    label:string
}

export default function SummaryCard({number, label}:Props) {
    return (
        <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>{number}</Text>
            <Text style={styles.summaryLabel}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    summaryCard: { backgroundColor: '#F5F5F5', padding: 16, marginBottom: 8, borderRadius: 8, width: '48%' },
    summaryNumber: { color: '#333', fontSize: 20, fontWeight: 'bold' },
    summaryLabel: { color: '#FFD700', fontSize: 12 },
})