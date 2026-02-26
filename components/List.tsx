import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default function List() {
  const DATA = [
    { id: '1', name: 'James' },
    { id: '2', name: 'John' },
    { id: '3', name: 'Robert' },
    { id: '4', name: 'Michael' },
    { id: '5', name: 'William' },
    { id: '6', name: 'David' },
    { id: '7', name: 'Richard' },
    { id: '8', name: 'Joseph' },
    { id: '9', name: 'Thomas' },
    { id: '10', name: 'Charles' },
    { id: '11', name: 'Christopher' },
    { id: '12', name: 'Daniel' },
    { id: '13', name: 'Matthew' },
    { id: '14', name: 'Anthony' },
    { id: '15', name: 'Mark' },
    { id: '16', name: 'Donald' },
    { id: '17', name: 'Steven' },
    { id: '18', name: 'Paul' },
    { id: '19', name: 'Andrew' },
    { id: '20', name: 'Joshua' },
    { id: '21', name: 'Ryan' },
    { id: '22', name: 'Kevin' },
  ];

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ id, item }) => (
          <Text style={styles.textSize}>
            {item.id + '. '}
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textSize: {
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
    fontWeight: '500',
    fontStyle: 'italic',
  },
});
