import React from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
//@ts-ignore
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { useStore, Actions } from '../../store/store';
function AddInternalSubmital({ navigation }: any) {
  const {
    state: { positionTitle, process, candidateName, reqId, desiredSalary },
    dispatch,
  } = useStore();
  let positionTitleOptions = [
    {
      value: 'Graphic Designer',
    },
    {
      value: 'JavaScript Developer',
    },
    {
      value: 'Java Developer',
    },
  ];

  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        label='Requisition ID'
        underlineColor='black'
        theme={{
          colors: {
            primary: '#1B435C',
          },
        }}
        style={{ width: '85%', backgroundColor: 'transparent' }}
        onChangeText={(text) => {
          dispatch({ type: Actions.setReqId, payload: text });
        }}
      ></TextInput>
      <TextInput
        label='Candidate Name'
        underlineColor='black'
        theme={{
          colors: {
            primary: '#1B435C',
          },
        }}
        style={{ width: '85%', marginVertical: '5%', backgroundColor: 'transparent' }}
        onChangeText={(text) => {
          dispatch({ type: Actions.setCandidateName, payload: text });
        }}
      ></TextInput>
      <Dropdown
        label='Position Title'
        data={positionTitleOptions}
        underlineColor='black'
        selectionColor='black'
        containerStyle={{ width: '85%' }}
        baseColor='transparent'
        onChangeText={(text: any) => {
          dispatch({ type: Actions.setPositionTitle, payload: text });
        }}
      />
      <TextInput
        label='Desired Salary'
        underlineColor='black'
        theme={{
          colors: {
            primary: '#1B435C',
          },
        }}
        style={{ width: '85%', marginVertical: '5%', backgroundColor: 'transparent' }}
        onChangeText={(text) => {
          dispatch({ type: Actions.setDesiredSalary, payload: text });
        }}
      ></TextInput>
      <TextInput
        label='Process'
        value='Candidate Evaluation'
        underlineColor='black'
        theme={{
          colors: {
            primary: '#1B435C',
          },
        }}
        onChangeText={(text) => {
          dispatch({ type: Actions.setProcess, payload: text });
        }}
        style={{ width: '85%', marginVertical: '5%', backgroundColor: 'transparent' }}
      ></TextInput>
      <Button
        mode='contained'
        color='#1B435C'
        onPress={() => {
          dispatch({ type: Actions.setPushCard, payload: 1 });
          navigation.navigate('InternalSubmitalsList');
        }}
      >
        Submit
      </Button>
    </View>
  );
}

export default AddInternalSubmital;
