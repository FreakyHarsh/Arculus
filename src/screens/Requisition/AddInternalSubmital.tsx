import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
//@ts-ignore
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { useStore, Actions } from '../../store/store';
function AddInternalSubmital({ navigation, route }: any) {
  const {
    state: { list },
    dispatch,
  } = useStore();
  let obj: any = {};

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
          obj.reqId = text;
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
          obj.candidateName = text;
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
          obj.positionTitle = text;
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
          obj.desiredSalary = text;
        }}
      ></TextInput>
      <Dropdown
        label='Process'
        data={[
          { value: 'Candidate Evaluation' },
          { value: 'Candidate Approval' },
          { value: 'Employment Offer' },
        ]}
        underlineColor='black'
        selectionColor='black'
        containerStyle={{ width: '85%' }}
        baseColor='transparent'
        onChangeText={(text: any) => {
          obj.process = text;
        }}
      />
      {/* <TextInput
        label='Process'
        // value='Candidate Evaluation'
        underlineColor='black'
        theme={{
          colors: {
            primary: '#1B435C',
          },
        }}
        onChangeText={(text) => {
          obj.process = text;
        }}
        style={{ width: '85%', marginVertical: '5%', backgroundColor: 'transparent' }}
      ></TextInput> */}
      <Dropdown
        label='Status'
        data={[
          { value: 'Hold' },
          { value: 'Pending' },
          { value: 'Rejected' },
          { value: 'Approved' },
        ]}
        underlineColor='black'
        selectionColor='black'
        containerStyle={{ width: '85%' }}
        baseColor='transparent'
        onChangeText={(text: any) => {
          obj.status = text;
        }}
      />
      {/* <TextInput
        label='Status'
        // value='Submitted for Review'
        underlineColor='black'
        theme={{
          colors: {
            primary: '#1B435C',
          },
        }}
        onChangeText={(text) => {
          obj.status = text;
        }}
        style={{ width: '85%', marginVertical: '5%', backgroundColor: 'transparent' }}
      ></TextInput> */}
      <Button
        mode='contained'
        color='#1B435C'
        style={{ marginTop: '5%' }}
        onPress={() => {
          dispatch({ type: Actions.setList, payload: { ...obj } });
          navigation.navigate('InternalSubmitalsList');
        }}
      >
        {/* {update ? 'Update' : 'Submit'} */}
        Submit
      </Button>
    </View>
  );
}

export default AddInternalSubmital;
