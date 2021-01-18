import React, { useState } from 'react';
import { Platform, View, Text, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
//@ts-ignore
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import DateTimePicker from '@react-native-community/datetimepicker';

function RequisitionCreate() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  let ServiceType = [
    {
      value: 'Permanent',
    },
    {
      value: 'Contract',
    },
    {
      value: 'Contract to Hire',
    },
  ];
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TextInput
          label='Requisition ID'
          underlineColor='black'
          theme={{
            colors: {
              primary: '#1B435C',
            },
          }}
          style={{ width: '85%', marginVertical: '5%', backgroundColor: 'transparent' }}
        ></TextInput>
        <Dropdown
          label='Service Type'
          data={ServiceType}
          underlineColor='black'
          selectionColor='black'
          containerStyle={{ width: '85%' }}
          baseColor='transparent'
        />
        <Dropdown
          label='Job Term'
          data={ServiceType}
          underlineColor='black'
          theme={{
            colors: {
              primary: '#1B435C',
            },
          }}
          containerStyle={{ width: '85%' }}
          baseColor='transparent'
        />
        <TextInput
          label='Position Title'
          underlineColor='black'
          theme={{
            colors: {
              primary: '#1B435C',
            },
          }}
          style={{ width: '85%', marginBottom: '5%', backgroundColor: 'transparent' }}
        ></TextInput>
        <TextInput
          underlineColor='black'
          theme={{
            colors: {
              primary: '#1B435C',
            },
          }}
          label='No of Positions'
          style={{ width: '85%', marginBottom: '5%', backgroundColor: 'transparent' }}
        ></TextInput>

        <TextInput
          label='Salary'
          underlineColor='black'
          theme={{
            colors: {
              primary: '#1B435C',
            },
          }}
          style={{ width: '85%', marginBottom: '5%', backgroundColor: 'transparent' }}
        ></TextInput>
        <TextInput
          label='Expected Salary'
          underlineColor='black'
          theme={{
            colors: {
              primary: '#1B435C',
            },
          }}
          style={{ width: '85%', marginBottom: '5%', backgroundColor: 'transparent' }}
        ></TextInput>
        <View style={{ width: '85%', marginBottom: '5%' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Text style={{ width: '50%' }}>Start Date</Text>
            <Button onPress={showDatepicker} uppercase={false} icon='calendar' color='#1B435C'>
              Date
            </Button>
          </View>
        </View>
        <View style={{ height: 15 }}></View>

        <View>
          {show && (
            <DateTimePicker
              testID='dateTimePicker'
              value={date}
              mode='date'
              is24Hour={true}
              display='default'
              onChange={onChange}
            />
          )}
        </View>
        <Button mode='contained' color='#1B435C' style={{ marginBottom: 5, padding: 5 }}>
          Submit
        </Button>
        <View style={{ height: 15 }}></View>
      </View>
    </ScrollView>
  );
}

export default RequisitionCreate;
