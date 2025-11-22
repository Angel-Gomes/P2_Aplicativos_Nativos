# ☀️ App de Previsão do Tempo Simples

Este é um aplicativo móvel simples construído com **React Native** e **Expo** que exibe a previsão do tempo atual para qualquer cidade, consumindo dados de uma API pública.

O projeto foi configurado para usar o ponto de entrada tradicional do Expo, garantindo compatibilidade após a remoção do `expo-router`.

---

## 📋 Funcionalidades Principais

* **Busca por Cidade:** Campo de entrada de texto para buscar a previsão por nome da cidade.
* **Exibição de Dados:** Mostra a temperatura atual (em Celsius), nome da cidade e uma descrição textual do clima.
* **Ícones de Clima:** Apresentação de um ícone simples para representar a condição climática.

## 🛠️ Tecnologias e Configurações Chave

* **Framework:** [React Native](https://reactnative.dev/)
* **Ambiente de Desenvolvimento:** [Expo](https://expo.dev/) (Utilizando o ponto de entrada `AppEntry.js`)
* **API de Clima:** [OpenWeatherMap](https://openweathermap.org/)
* **Variáveis de Ambiente:** `react-native-dotenv` (Configurado via `babel.config.js` para leitura segura da chave).
* **Estilização:** Arquivo externo (`src/styles.js`) para organização.

---

## 🚀 Como Rodar o Projeto

Siga estes passos para configurar e executar o aplicativo no seu dispositivo (Celular ou Web):

### 1. Pré-requisitos

* [Node.js](https://nodejs.org/) instalado.
* Aplicativo **Expo Go** instalado no seu celular (iOS ou Android).
* Conexão Wi-Fi (o celular e o PC devem estar na mesma rede).

### 2. Configuração da API Secreta

1.  Obtenha sua chave de API gratuita no site da [OpenWeatherMap](https://openweathermap.org/).
2.  Crie um arquivo chamado **`.env`** na **raiz** do projeto.
3.  Adicione sua chave no formato exigido pelo Expo:
    ```
    EXPO_PUBLIC_WEATHER_API_KEY="SUA_CHAVE_AQUI"
    ```

### 3. Instalação e Execução

1.  **Instale as dependências** do projeto:
    ```bash
    npm install
    ```

2.  **Entre na pasta do projeto** (se você não estiver lá):
    ```bash
    cd AppClima
    ```

3.  **Inicie o servidor de desenvolvimento** (com limpeza de cache):
    ```bash
    npx expo start --clear
    ```

### 4. Visualização

Após o servidor iniciar, use o celular para escanear o Código QR que aparecer no terminal:

* **Celular (iOS/Android):** Abra o aplicativo **Expo Go** e escaneie o código QR (ou use a câmera padrão do iOS).
* **Web:** Pressione `w` no terminal para abrir o aplicativo no seu navegador.

---

## ⚙️ Arquivos Importantes

| Arquivo/Pasta | Função |
| :--- | :--- |
| `App.js` | Contém a lógica principal (`useState`, `fetchWeather`, `renderWeather`) e a UI. |
| `src/styles.js` | Separação de todos os estilos de interface. |
| `.env` | Armazena a chave de API (secreto). |
| `babel.config.js` | Configura o Babel para ler o arquivo `.env`. **(Adicionado)** |
| `package.json` | Garante que o ponto de entrada principal é o `AppEntry.js` (tradicional). **(Ajustado)** |

## 📝 Autor

* **Angélica Gomes da Silva**
