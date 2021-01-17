import React from 'react';
import InternalSubmitalCard from '../../components/InternalSubmitalCard';
import { FlatList, View, StatusBar, Text } from 'react-native';

const DATA = ['1', '12', '13', '14', '15', '16'];
function InternalSubmitalsList() {
  const renderItem = ({ item }: any) => {
    return <InternalSubmitalCard />;
  };
  return (
    <View>
      <StatusBar barStyle='light-content' />
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item} />
    </View>
  );
}

export default InternalSubmitalsList;
