import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
const styles = StyleSheet.create({
  card: {
    width: '90%',
    elevation: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

function InternalSubmitalCard() {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Text>slkfdjls</Text>
      </Card>
    </View>
  );
}

export default InternalSubmitalCard;
