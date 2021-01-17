import React from 'react';
import { Caption, Card, IconButton, Paragraph, Subheading, Title } from 'react-native-paper';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

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

function RequisitionCard({ clicked }: any) {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card} elevation={5}>
        <Card.Content>
          <View style={styles.flexRow}>
            <Subheading style={{ width: '25%' }}>REQ# -</Subheading>
            <TouchableOpacity style={{ backgroundColor: '#1B435C', padding: 4 }} onPress={clicked}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Ref # 89-Dar-0890-0029</Text>
            </TouchableOpacity>
            <IconButton
              icon='pencil'
              color='#1B435C'
              size={23}
              onPress={() => console.log('Edit Requisition')}
            />
          </View>
          <View style={styles.flexRow}>
            <Subheading style={{ width: '50%' }}>Account -</Subheading>
            <Caption style={{ width: '50%', textAlign: 'left' }}>ACME Implementation</Caption>
          </View>
          <View style={styles.flexRow}>
            <Subheading style={{ width: '50%' }}>Requested by-</Subheading>
            <Caption style={{ width: '50%', textAlign: 'left' }}>Ross Mason</Caption>
          </View>
          <View style={styles.flexRow}>
            <Subheading style={{ width: '50%' }}>Position Title-</Subheading>
            <Caption style={{ width: '50%', textAlign: 'left' }}>Graphic Designer</Caption>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

export default RequisitionCard;
