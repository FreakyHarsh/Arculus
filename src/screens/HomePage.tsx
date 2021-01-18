import { Appbar, IconButton } from 'react-native-paper';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import { RequisitionParamList } from '../types/RequisitionParamList';
import themedHeader from '../utils/themedHeader';
import { createStackNavigator } from '@react-navigation/stack';
function Dummy() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page</Text>
    </View>
  );
}
const HomePage = ({ navigation }: any) => {
  const Stack = createStackNavigator();
  const drawerOpen = navigation.openDrawer;
  return (
    <Stack.Navigator initialRouteName='test'>
      <Stack.Screen
        name='test'
        component={Dummy}
        options={{
          ...themedHeader(''),
          headerLeft: () => (
            <IconButton icon='menu' size={30} color='#FFFFFF' onPress={drawerOpen} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

{
  /* // <SafeAreaView>
  //   <Appbar style={styles.top}>
  //     <Appbar.Action icon='menu' color='#1B435C' onPress={() => console.log('Pressed archive')} />
  //   </Appbar>
  // </SafeAreaView> */
}

export default HomePage;

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});
