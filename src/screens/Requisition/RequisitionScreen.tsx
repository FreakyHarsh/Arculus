import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { DrawerParamList } from '../../types/DrawerParamList';
import { RouteProp } from '@react-navigation/native';
import { RequisitionParamList } from '../../types/RequisitionParamList';
import { IconButton } from 'react-native-paper';

import RequisitionDetail from './RequisitionDetail';
import RequisitionHome from './RequisitionHome';
import themedHeader from '../../utils/themedHeader';
import RequisitionCreate from './RequisitionCreate';
import InternalSubmitalsList from './InternalSubmitalsList';
import AddInternalSubmital from './AddInternalSubmital';
import UpdateInternalSubmital from './UpdateInternalSubmital';

function RequisitionsScreen({
  navigation,
  route,
}: {
  navigation: DrawerNavigationProp<DrawerParamList, 'Requisitions'>;
  route: RouteProp<DrawerParamList, 'Requisitions'>;
}) {
  const drawerOpen = navigation.openDrawer;
  const Stack = createStackNavigator<RequisitionParamList>();

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={RequisitionHome}
        options={{
          ...themedHeader('Requisitions'),
          headerLeft: () => (
            <IconButton icon='menu' size={30} color='#FFFFFF' onPress={drawerOpen} />
          ),
          headerRight: () => (
            <IconButton
              icon='plus-circle-outline'
              size={30}
              color='#FFFFFF'
              onPress={() => navigation.navigate('Create' as any)}
            />
          ),
        }}
      />
      <Stack.Screen
        name='Create'
        component={RequisitionCreate}
        options={themedHeader('Create Requisition')}
      />
      <Stack.Screen
        name='InternalSubmitalsList'
        component={InternalSubmitalsList}
        options={themedHeader('Submital Detail')}
      />
      <Stack.Screen
        name='UpdateInternalSubmital'
        component={UpdateInternalSubmital}
        options={themedHeader('Update Detail')}
      />
      <Stack.Screen
        name='AddInternalSubmital'
        component={AddInternalSubmital}
        options={themedHeader('Add Internal Submital')}
      />
      <Stack.Screen
        name='Detail'
        component={RequisitionDetail}
        options={{
          ...themedHeader('Requisition Detail'),
          headerRight: () => (
            <IconButton
              icon='plus-circle-outline'
              size={30}
              color='#FFFFFF'
              onPress={() => navigation.navigate('AddInternalSubmital' as any)}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default RequisitionsScreen;
