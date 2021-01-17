import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Subheading, Caption } from 'react-native-paper';
const styles = StyleSheet.create({
  card: {
    width: '90%',
    elevation: 5,
    height: 100,
    marginTop: '5%',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
        <Card.Content>
          <View style={styles.flexRow}>
            <Text style={{ width: '50%' }}>Candidate Name -</Text>
            <Caption style={{ width: '50%' }}>Jon Doe</Caption>
          </View>
          <View style={styles.flexRow}>
            <Text style={{ width: '50%' }}>Position Title -</Text>
            <Caption style={{ width: '50%' }}>Graphic Designer</Caption>
          </View>
          <View style={styles.flexRow}>
            <Text style={{ width: '50%' }}>Desired Salary -</Text>
            <Caption style={{ width: '50%' }}>3 Lacs </Caption>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

export default InternalSubmitalCard;
