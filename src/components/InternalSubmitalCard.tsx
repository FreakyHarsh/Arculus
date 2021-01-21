import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Subheading, Caption, IconButton } from 'react-native-paper';
import { useStore } from '../store/store';
const styles = StyleSheet.create({
  card: {
    width: '90%',
    elevation: 5,
    marginTop: '5%',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

function InternalSubmitalCard({
  candidateName,
  positionTitle,
  desiredSalary,
  edit,
  process,
  status,
}: any) {
  const {
    state: { list },
  } = useStore();
  // useEffect(() => {}, [pushCard]);
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <View>
            <View style={[styles.flexRow, { width: '75%' }]}>
              <Text>Candidate Name -</Text>
              <Caption>{candidateName || 'Jon Doe'}</Caption>
            </View>
            <IconButton
              icon='pencil'
              color='#1B435C'
              size={23}
              style={{ position: 'absolute', right: 0, top: -10 }}
              onPress={edit}
            />
          </View>
          <View style={styles.flexRow}>
            <Text style={{ width: '50%' }}>Position Title -</Text>
            <Caption style={{ width: '50%' }}>{positionTitle || 'Graphic Designer'}</Caption>
          </View>
          <View style={styles.flexRow}>
            <Text style={{ width: '50%' }}>Desired Salary -</Text>
            <Caption style={{ width: '50%' }}>{desiredSalary || '3 Lacs'} </Caption>
          </View>
          <View style={styles.flexRow}>
            <Text style={{ width: '50%' }}>Process -</Text>
            <Caption style={{ width: '50%' }}>{process || '3 Lacs'} </Caption>
          </View>
          <View style={styles.flexRow}>
            <Text style={{ width: '50%' }}>Status -</Text>
            <Caption style={{ width: '50%' }}>{status || '3 Lacs'} </Caption>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

export default InternalSubmitalCard;
