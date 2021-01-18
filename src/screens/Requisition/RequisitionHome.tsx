import React, { useEffect } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import RequisitionCard from '../../components/RequisitionCard';
import { RequisitionNavProp } from '../../types/RequisitionParamList';

const DATA = ['1', '2', '3', '4', '5', '6'];

function RequisitionHome({ navigation }: any) {
  const renderItem = ({ item }: any) => {
    return (
      <RequisitionCard
        reqDetail={() => navigation.navigate('Detail')}
        reqEdit={() => navigation.navigate('Create')}
      />
    );
  };
  return (
    <View>
      <StatusBar barStyle='light-content' />
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item} />
    </View>
  );
}

export default RequisitionHome;
