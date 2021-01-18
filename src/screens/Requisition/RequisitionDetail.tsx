import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Button, Card, Headline, Subheading, Caption } from 'react-native-paper';
import RequisitionCard from '../../components/RequisitionCard';
import { RequisitionNavProp } from '../../types/RequisitionParamList';
import { useStore } from '../../store/store';
const styles = StyleSheet.create({
  card: {
    width: '90%',
    elevation: 5,
    marginTop: '5%',
  },
  cardContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },
});

function RequisitionDetail({ navigation }: RequisitionNavProp<'Detail'>) {
  return (
    <View style={styles.cardContainer}>
      <StatusBar barStyle='light-content' />
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.flexRow}>
            <Subheading>Requisition ID -</Subheading>
            <Caption style={{ fontSize: 15 }}>Req - 12345</Caption>
          </View>
          <View style={styles.flexRow}>
            <Subheading>Service Type -</Subheading>
            <Caption style={{ fontSize: 15 }}>Internal Hire</Caption>
          </View>
          <View style={styles.flexRow}>
            <Subheading>Job Term -</Subheading>
            <Caption style={{ fontSize: 15 }}>Contract</Caption>
          </View>
          <View style={styles.flexRow}>
            <Subheading>Position Title -</Subheading>
            <Caption style={{ fontSize: 15 }}>Graphic Designer</Caption>
          </View>
          <View style={styles.flexRow}>
            <Subheading>No of Positions -</Subheading>
            <Caption style={{ fontSize: 15 }}>2 Positions</Caption>
          </View>
          <View style={styles.flexRow}>
            <Subheading>Start Date -</Subheading>
            <Caption style={{ fontSize: 15 }}>01-01-2021</Caption>
          </View>
          <View style={styles.flexRow}>
            <Subheading>Expected Duration -</Subheading>
            <Caption style={{ fontSize: 15 }}>1 Year</Caption>
          </View>
          <View style={styles.flexRow}>
            <Subheading>Description -</Subheading>
            <Caption style={{ fontSize: 15 }}>Lorem Ipsum</Caption>
          </View>
          <View style={styles.flexRow}>
            <Subheading>Status -</Subheading>
            <Caption style={{ fontSize: 15 }}>Draft</Caption>
          </View>
        </Card.Content>
      </Card>
      <Button
        mode='contained'
        color='#1B435C'
        style={{ padding: 4 }}
        onPress={() => navigation.navigate('InternalSubmitalsList')}
      >
        Check Interntal Submital List{' '}
      </Button>
    </View>
  );
}

export default RequisitionDetail;
