import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import catalogoData from '../catalogo.json';

// Define a tipagem para garantir a consistência dos dados
interface ItemCatalogo {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
}

export default function CatalogoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <View style={styles.container}>
        <Text style={styles.tituloPrincipal}>Meus Filmes e Series Favoritos</Text>
        
        {/* Mapeia os dados do JSON para renderizar os cards */}
        {catalogoData.map((item: ItemCatalogo) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardSubtitulo}>{item.subtitulo}</Text>
            <Text style={styles.cardAno}>{item.ano}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

// Estilização com StyleSheet
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  tituloPrincipal: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e145e9ff',
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  card: {
    backgroundColor: '#2e2e4a',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#e145e9ff',
  },
  cardTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardSubtitulo: {
    fontSize: 16,
    color: '#a8a8c8',
    marginTop: 5,
  },
  cardAno: {
    fontSize: 16,
    color: '#e145e9ff',
    textAlign: 'right',
    marginTop: 10,
    fontWeight: 'bold',
  },
});