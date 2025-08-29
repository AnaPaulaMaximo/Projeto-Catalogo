import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import catalogoData from '../catalogo.json';

// Define a tipagem para os dados do catálogo
interface ItemCatalogo {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
}

export default function CatalogoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Meus Filmes Favoritos</Text>
      
      {/* Utiliza o método .map() para percorrer os dados e renderizar os cards */}
      {catalogoData.map((item: ItemCatalogo) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.subtitulo}</Text>
          <Text style={styles.cardAno}>{item.ano}</Text>
        </View>
      ))}
    </View>
  );
}

// Estilização com StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    padding: 20,
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    width: '100%',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0056b3',
    marginBottom: 5,
  },
  cardSubtitulo: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  cardAno: {
    fontSize: 14,
    color: '#444',
    marginTop: 5,
    textAlign: 'right',
  },
});