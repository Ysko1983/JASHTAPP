import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AIRecommendations = () => {
  const recommendations = [
    { id: 1, event: 'Эко-уборка в парке', match: '95%', reason: 'Совпадает с вашими интересами в экологии' },
    { id: 2, event: 'Обучение digital-грамотности', match: '88%', reason: 'Соответствует вашим навыкам в IT' },
    { id: 3, event: 'Помощь в доме престарелых', match: '76%', reason: 'Близко к вашему местоположению' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 AI рекомендует для вас:</Text>
      {recommendations.map(rec => (
        <View key={rec.id} style={styles.recommendationItem}>
          <Text style={styles.eventName}>{rec.event}</Text>
          <View style={styles.matchContainer}>
            <Text style={styles.matchText}>Совпадение: {rec.match}</Text>
          </View>
          <Text style={styles.reason}>{rec.reason}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C3E50',
  },
  recommendationItem: {
    backgroundColor: '#F8F9FA',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#4CAF50',
  },
  eventName: {
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  matchContainer: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  matchText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  reason: {
    fontSize: 12,
    color: '#7F8C8D',
    fontStyle: 'italic',
  },
});

export default AIRecommendations;
