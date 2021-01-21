import React, { useEffect, useState } from 'react';
import InternalSubmitalCard from '../../components/InternalSubmitalCard';
import { FlatList, View, StatusBar, Text } from 'react-native';
import { useStore } from '../../store/store';

function InternalSubmitalsList({ navigation }: any) {
  const renderItem = ({ item, index }: any) => {
    console.log(index);
    const { candidateName, desiredSalary, positionTitle, reqId, status, process } = item;
    return (
      <InternalSubmitalCard
        candidateName={candidateName}
        desiredSalary={desiredSalary}
        positionTitle={positionTitle}
        reqId={reqId}
        status={status}
        process={process}
        edit={() => {
          navigation.navigate('UpdateInternalSubmital', {
            update: true,
            listIndexToUpdate: index,
            candidateName,
            desiredSalary,
            positionTitle,
            reqId,
            status,
            process,
          });
        }}
      />
    );
  };

  const {
    state: { list },
  } = useStore();
  //@ts-ignore
  const uniqueList = [...new Map(list.map((item) => [item['reqId'], item])).values()];
  return (
    <View>
      <StatusBar barStyle='light-content' />
      <FlatList
        data={uniqueList}
        renderItem={renderItem}
        keyExtractor={(item) => item + Math.random()}
      />
    </View>
  );
}

export default InternalSubmitalsList;
