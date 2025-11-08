import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AIAssistant = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const aiResponses = {
    'какие мероприятия': 'На основе вашего профиля рекомендую: эко-уборки (95% совпадение), обучение digital-грамотности (88% совпадение)',
    'как повысить рейтинг': 'Участвуйте в мероприятиях регулярно, организуйте события, приглашайте друзей. AI предсказывает: за месяц можно подняться на 2 уровня!',
    'где нужна помощь': 'В вашем районе (Бишкек) нужны волонтёры: парк Ата-Тюрк (эко-уборка), школа №5 (обучение), дом престарелых (соц. помощь)',
    'default': 'Задайте вопрос AI-помощнику! Я могу помочь с рекомендациями мероприятий, анализом вашего профиля и советами по развитию.'
  };

  const handleAskAI = () => {
    const lowerQuestion = question.toLowerCase();
    let aiResponse = aiResponses.default;

    for (const key in aiResponses) {
      if (lowerQuestion.includes(key)) {
        aiResponse = aiResponses[key];
        break;
      }
    }

    setResponse(aiResponse);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Спросите у ИИ..."
        value={question}
        onChangeText={setQuestion}
      />
      <TouchableOpacity style={styles.button} onPress={handleAskAI}>
        <Icon name="smart-toy" size={20} color="#FFFFFF" />
        <Text style={styles.buttonText}>Спросить ИИ</Text>
      </TouchableOpacity>
      
      {response ? (
        <View style={styles.responseContainer}>
          <Text style={styles.responseTitle}>🤖 AI Ответ:</Text>
          <Text style={styles.responseText}>{response}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2E86AB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  responseContainer: {
    backgroundColor: '#F8F9FA',
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2E86AB',
  },
  responseTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2C3E50',
  },
  responseText: {
    color: '#2C3E50',
    lineHeight: 20,
  },
});

export default AIAssistant;
