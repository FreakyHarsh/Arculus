import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RequisitionsScreen from './src/screens/Requisition/RequisitionScreen';
import { DrawerParamList } from './src/types/DrawerParamList';

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
    <View style={{ flex: 1 }}>
      <Text>This is dummy data</Text>;
    </View>
  );
}
const Drawer = createDrawerNavigator<DrawerParamList>();
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        initialRouteName='Requisitions'
        drawerContentOptions={{
          activeTintColor: '#000',
          inactiveBackgroundColor: 'green',
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen name='Requisitions' component={RequisitionsScreen} />
        <Drawer.Screen name='Dummy' component={Dummy} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
