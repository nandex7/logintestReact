import React from 'react';
import {View, Text, Button} from 'react-native';
import { Navigation } from 'react-native-navigation';
import UselessTextInput from '../components/Input';
// import {Navigation} from 'react-native-navigation';

type Props = {
  msg: string
}

const LoginScreen = (props: Props) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <Text>{props.msg}</Text>
      <UselessTextInput />
      <Button onPress={() => {
        Navigation.showModal({
          stack: {
            children: [
              {
                component: {
                  name: 'Home.screen',
                },
              },
            ],
          },
        });
      }} title={'Login'} />
    </View>
  );
};

LoginScreen.options = {
  topBar: {
    title: {
      text: 'Login',
      color: 'white',
    },
    background: {
      color: '#9d089F',
    },
  },
};

export default LoginScreen;
