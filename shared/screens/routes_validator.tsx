import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack,AuthStack} from './allroutes';
import {useAuth} from './auth_context';
import {View,Text} from "react-native"
export const Router = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return (<View><Text>Loading</Text></View>)
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};