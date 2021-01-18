import React, { useEffect, useState } from 'react';
import InternalSubmitalCard from '../../components/InternalSubmitalCard';
import { FlatList, View, StatusBar, Text } from 'react-native';
import { useStore } from '../../store/store';

function InternalSubmitalsList() {
  const DATA = ['1'];
  const [data, setData] = useState<any>();
  const renderItem = ({ item }: any) => {
    console.log(item);
    return <InternalSubmitalCard />;
  };

  const {
    state: { reqId, pushCard, list },
  } = useStore();
  // useEffect(() => {
  //   DATA.push('1');
  //   setData(DATA);
  // }, [list]);
  return (
    <View>
      <StatusBar barStyle='light-content' />
      <FlatList data={list} renderItem={renderItem} keyExtractor={(item) => item + Math.random()} />
    </View>
  );
}

export default InternalSubmitalsList;
