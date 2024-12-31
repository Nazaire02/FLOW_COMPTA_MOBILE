import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="suiviImpaye" options={{ headerShown: false }} />
            <Stack.Screen name="suiviTiers" options={{ headerShown: false }} />
        </Stack>
    );
}
