import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RequisitionsScreen from './src/screens/Requisition/RequisitionScreen';
import { DrawerParamList } from './src/types/DrawerParamList';
import DrawerContent from './DrawerContent';
import HomePage from './src/screens/HomePage';
import { AppStateGG } from './src/store/store';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1B435C',
    background: '#FAFAFA',
  },
};
function Dummy() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator<DrawerParamList>();
export default function App() {
  return (
    <AppStateGG>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator initialRouteName='Dummy' drawerContent={DrawerContent}>
          <Drawer.Screen name='Requisitions' component={RequisitionsScreen} />
          <Drawer.Screen name='Dummy' component={HomePage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppStateGG>
  );
}
