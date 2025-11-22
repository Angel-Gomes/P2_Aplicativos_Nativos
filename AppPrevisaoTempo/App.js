// App.js
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
// Importa o ícone
import Icon from 'react-native-vector-icons/FontAwesome';

// Importa a chave da API do .env
import { EXPO_PUBLIC_WEATHER_API_KEY } from '@env';

// URL base da API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
// Constante para forçar a temperatura em Celsius
const UNITS = 'metric';
const LANG = 'pt_br';

export default function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Lógica de busca de dados (implementada no Passo 4.2)
  const fetchWeather = async () => {
    // ...
  };

  // Lógica de exibição do clima (implementada no Passo 4.3)
  const renderWeather = () => {
    // ...
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previsão do Tempo</Text>

      {/* 1. CAMPO DE ENTRADA (INPUT) */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da cidade"
        value={city}
        onChangeText={setCity}
      />

      {/* 2. BOTÃO DE BUSCA */}
      <TouchableOpacity
        style={styles.button}
        onPress={fetchWeather}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Buscando...' : 'Buscar Clima'}
        </Text>
      </TouchableOpacity>

      {/* 3. ÁREA DE EXIBIÇÃO DE RESULTADOS */}
      <View style={styles.resultsContainer}>
        {loading && <ActivityIndicator size="large" color="#007BFF" />}
        {error && <Text style={styles.errorText}>Erro: {error}</Text>}
        {renderWeather()}
      </View>
    </View>
  );
}

// ... Estilos (Styles)