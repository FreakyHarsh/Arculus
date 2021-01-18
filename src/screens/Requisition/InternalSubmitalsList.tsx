import React, { useEffect } from 'react';
import InternalSubmitalCard from '../../components/InternalSubmitalCard';
import { FlatList, View, StatusBar, Text } from 'react-native';
import { useStore } from '../../store/store';

const DATA = ['1'];
function InternalSubmitalsList() {
  const renderItem = ({ item }: any) => {
    return <InternalSubmitalCard />;
  };

  const {
    state: { reqId, pushCard },
  } = useStore();
  useEffect(() => {
    DATA.push('1');
  }, [pushCard]);
  return (
    <View>
      <StatusBar barStyle='light-content' />
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item + Math.random()} />
    </View>
  );
}

export default InternalSubmitalsList;
