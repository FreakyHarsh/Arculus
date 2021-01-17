import React from 'react';
import { Button, StatusBar, View, Text } from 'react-native';
import RequisitionCard from '../../components/RequisitionCard';
import { RequisitionNavProp } from '../../types/RequisitionParamList';

function RequisitionDetail({ navigation }: RequisitionNavProp<'Detail'>) {
  return (
    <View>
      <StatusBar barStyle='light-content' />
    </View>
  );
}

export default RequisitionDetail;
