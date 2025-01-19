import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="amortissement" options={{ headerShown: false }} />
            <Stack.Screen name="bilanSmt" options={{ headerShown: false }} />
            <Stack.Screen name="resultat" options={{ headerShown: false }} />
        </Stack>
    );
}
