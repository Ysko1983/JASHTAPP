import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// ИИ компоненты
import AIAssistant from './src/components/AIAssistant';
import AIRecommendations from './src/components/AIRecommendations';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏔️ JASHTAPP</Text>
      <Text style={styles.subtitle}>AI-Powered Volunteer Platform</Text>
      
      {/* ИИ Помощник */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🤖 AI Помощник</Text>
        <Text>Получи персональные рекомендации мероприятий!</Text>
        <AIAssistant />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Умные рекомендации</Text>
        <AIRecommendations />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📊 Статистика с AI-анализом</Text>
        <Text>• 150+ мероприятий</Text>
        <Text>• 2,000+ волонтёров</Text>
        <Text>• 50+ организаций</Text>
        <Text>• AI предсказывает: +30% роста через месяц</Text>
      </View>
    </View>
  );
}

function EventsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Умные мероприятия</Text>
      <View style={styles.card}>
        <Text style={styles.eventTitle}>🎯 Рекомендовано ИИ для вас:</Text>
        <Text>Эко-уборка в парке (95% совпадение)</Text>
        <Text>Обучение digital-грамотности (88% совпадение)</Text>
      </View>
    </View>
  );
}

function AIScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🤖 AI Ассистент</Text>
      <View style={styles.card}>
        <Text>Задайте вопрос AI-помощнику:</Text>
        <Text>"Какие мероприятия подходят мне?"</Text>
        <Text>"Как повысить свой рейтинг?"</Text>
        <Text>"Где нужна помощь в моём районе?"</Text>
      </View>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Умный профиль</Text>
      <View style={styles.card}>
        <Text>AI анализ вашего профиля:</Text>
        <Text>🏆 Уровень: Активный волонтёр</Text>
        <Text>📈 Тренд: +15% активность за месяц</Text>
        <Text>🎯 Рекомендация: Попробуйте IT-волонтёрство</Text>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            
            if (route.name === 'Главная') iconName = 'home';
            else if (route.name === 'Мероприятия') iconName = 'event';
            else if (route.name === 'AI Помощник') iconName = 'smart-toy';
            else if (route.name === 'Профиль') iconName = 'person';
            
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2E86AB',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Главная" component={HomeScreen} />
        <Tab.Screen name="Мероприятия" component={EventsScreen} />
        <Tab.Screen name="AI Помощник" component={AIScreen} />
        <Tab.Screen name="Профиль" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2C3E50',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#7F8C8D',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C3E50',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2E86AB',
  },
});
