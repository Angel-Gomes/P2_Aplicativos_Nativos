import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { EXPO_PUBLIC_WEATHER_API_KEY } from '@env';
import styles from './src/styles';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const UNITS = 'metric';
const LANG = 'pt_br';

export default function Index() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Busca de dados
  const fetchWeather = async () => {
    if (!city) {
      setError('Por favor, digite o nome de uma cidade.');
      setWeatherData(null);
      return;
    }

    setLoading(true);
    setError(null);
    setWeatherData(null);

    const apiUrl = `${BASE_URL}?q=${city}&appid=${EXPO_PUBLIC_WEATHER_API_KEY}&units=${UNITS}&lang=${LANG}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setCity('');
      } else {
        setError(data.message || 'Cidade não encontrada. Tente novamente.');
      }
    } catch (e) {
      setError('Não foi possível conectar ao servidor. Verifique sua conexão.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Mapeamento para ícones
  const iconMap = {
    'nuvens': 'cloud',
    'chuva': 'umbrella',
    'céu limpo': 'sun-o',
    'neve': 'snowflake-o',
    default: 'globe',
  };

  // Exibição do clima
  const renderWeather = () => {
    if (!weatherData) return null;

    const { name, main, weather } = weatherData;
    const temperature = Math.round(main.temp);
    const description = weather[0]?.description.charAt(0).toUpperCase() + weather[0]?.description.slice(1); 
    const iconName = iconMap[description.toLowerCase().split(' ')[0]] || iconMap.default;

    return (
      <View style={styles.weatherCard}>
        <Text style={styles.cityName}>{name}</Text> {/* Removido o ** */}
        <View style={styles.tempRow}>
          <Icon name={iconName} size={80} color="#333" />
          <Text style={styles.temperature}>{temperature}°C</Text>
        </View>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    );
  };
  
  // Renderização Principal
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
