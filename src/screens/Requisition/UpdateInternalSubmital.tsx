import React, { useState } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
//@ts-ignore
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { useStore, Actions } from '../../store/store';
function UpdateInternalSubmital({ navigation, route }: any) {
  const {
    state: { list },
    dispatch,
  } = useStore();
  let obj: any = {};
  const {
    update,
    listIndexToUpdate,
    candidateName,
    desiredSalary,
    positionTitle,
    reqId,
    status,
    process,
  } = route.params;
  console.log(update, listIndexToUpdate);
  const updateObj = list.filter((item) => item.reqId === reqId);
  if (updateObj) {
    [obj] = updateObj;
  }
  console.log(obj);
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
  // const updateObj = list.filter((item) => item.reqId === reqId);
  // if (updateObj) {
  //   [obj] = updateObj;
  // }
  console.log(obj);
  const [reqIdInput, setReqIdInput] = useState<string>(obj.reqId);
  const [candidateNameInput, setCandidateNameInput] = useState<string>(obj.candidateName);
  const [desiredSalaryInput, setDesiredSalaryInput] = useState<string>(obj.desiredSalary);
  const [positionTitleInput, setPositionTitleInput] = useState<string>(obj.positionTitle);
  const [statusInput, setStatusInput] = useState<string>(obj.status);
  const [processInput, setProcessInput] = useState<string>(obj.process);

  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        label='Requisition ID'
        underlineColor='black'
        value={reqIdInput}
        theme={{
          colors: {
            primary: '#1B435C',
          },
        }}
        style={{ width: '85%', backgroundColor: 'transparent' }}
        onChangeText={(text) => {
          obj.reqId = text;
          setReqIdInput(text);
        }}
      ></TextInput>
      <TextInput
        label='Candidate Name'
        underlineColor='black'
        value={candidateNameInput}
        theme={{
          colors: {
            primary: '#1B435C',
          },
        }}
        style={{ width: '85%', marginVertical: '5%', backgroundColor: 'transparent' }}
        onChangeText={(text) => {
          obj.candidateName = text;
          setCandidateNameInput(text);
        }}
      ></TextInput>
      <Dropdown
        label='Position Title'
        data={positionTitleOptions}
        value={positionTitleInput}
        underlineColor='black'
        selectionColor='black'
        containerStyle={{ width: '85%' }}
        baseColor='transparent'
        onChangeText={(text: any) => {
          obj.positionTitle = text;
          setPositionTitleInput(text);
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
        value={desiredSalaryInput}
        style={{ width: '85%', marginVertical: '5%', backgroundColor: 'transparent' }}
        onChangeText={(text) => {
          obj.desiredSalary = text;
          setDesiredSalaryInput(text);
        }}
      ></TextInput>
      <Dropdown
        label='Status'
        data={[
          { value: 'Hold' },
          { value: 'Pending' },
          { value: 'Rejected' },
          { value: 'Approved' },
        ]}
        value={statusInput}
        underlineColor='black'
        selectionColor='black'
        containerStyle={{ width: '85%' }}
        baseColor='transparent'
        onChangeText={(text: any) => {
          obj.status = text;
        }}
      />
      <Dropdown
        label='Process'
        data={[
          { value: 'Candidate Evaluation' },
          { value: 'Candidate Approval' },
          { value: 'Employment Offer' },
        ]}
        value={processInput}
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
        value={processInput}
        underlineColor='black'
        theme={{
          colors: {
            primary: '#1B435C',
          },
        }}
        onChangeText={(text) => {
          obj.process = text;
          setProcessInput(text);
        }}
        style={{ width: '85%', marginVertical: '5%', backgroundColor: 'transparent' }}
      ></TextInput>
      <TextInput
        label='Status'
        value={statusInput}
        underlineColor='black'
        theme={{
          colors: {
            primary: '#1B435C',
          },
        }}
        onChangeText={(text) => {
          obj.status = text;
          setStatusInput(text);
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
        Update
      </Button>
    </View>
  );
}

export default UpdateInternalSubmital;
