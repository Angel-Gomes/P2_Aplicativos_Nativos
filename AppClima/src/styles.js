import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // --- ESTILOS GERAIS DA TELA ---
  container: {
    flex: 1, 
    backgroundColor: '#f0f4f7',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },

  // --- ESTILOS DO CAMPO DE BUSCA ---
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },

  // --- ESTILOS DO BOTÃO ---
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  // --- ÁREA DE EXIBIÇÃO DE RESULTADOS ---
  resultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },

  // --- CARTÃO DE PREVISÃO DO TEMPO ---
  weatherCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  tempRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  temperature: {
    fontSize: 80,
    fontWeight: '300',
    marginLeft: 15,
    color: '#333',
  },
  descriptionText: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#555',
  },
});

export default styles;