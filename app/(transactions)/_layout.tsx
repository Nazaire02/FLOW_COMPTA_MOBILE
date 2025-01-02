import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="operationsAnalytique" options={{ headerShown: false }} />
            <Stack.Screen name="banque" options={{ headerShown: false }} />
            <Stack.Screen name="caisse" options={{ headerShown: false }} />
        </Stack>
    );
}
