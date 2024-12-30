import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Suivis & états',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="assessment" color={color} />,
          }}
        />
        <Tabs.Screen
          name="bilans-comptes"
          options={{
            title: 'Bilans & comptes',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="account-balance" color={color} />,
          }}
        />
        <Tabs.Screen
          name="plans"
          options={{
            title: 'Plans',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="calendar-today" color={color} />,
          }}
        />
        <Tabs.Screen
          name="saisies"
          options={{
            title: 'Saisies',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="edit" color={color} />,
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            title: 'Transactions',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="swap-horiz" color={color} />,
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
