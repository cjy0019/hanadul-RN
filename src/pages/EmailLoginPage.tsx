import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SvgComponent from '../components/common/SvgComponent';
import {svgModule} from '../assets/svgModule';
import {palette} from '../styles/palette';
import CheckBox from '@react-native-community/checkbox';
import {HomeScreenProps} from '../types/navigationTypes/navigationType';

const EmailLoginPage = ({navigation}: HomeScreenProps) => {
  const Login = useCallback(() => {
    Alert.alert('login 되었습니다.');
  }, []);

  const navigateToRegister = useCallback(() => {
    navigation.push('Register');
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.LoginContainer}>
          <SvgComponent width="50%" height="30%" xml={svgModule.hanadul} />
          <TextInput
            placeholderTextColor={`${palette.white}`}
            placeholder="E-MaiL"
            style={styles.InputStyle}
          />
          <TextInput
            placeholderTextColor={`${palette.white}`}
            placeholder="PASSWORD"
            style={styles.InputStyle}
          />
          <View style={styles.InputWrapper}>
            <CheckBox
              onAnimationType="bounce"
              offAnimationType="bounce"
              boxType="square"
            />
            <Text style={styles.AutoLoginStyle}>Auto Login</Text>
          </View>
          <Pressable onPress={Login} style={styles.LoginButtonStyle}>
            <Text style={styles.AutoLoginStyle}>Login</Text>
          </Pressable>
          <Pressable
            onPress={navigateToRegister}
            style={styles.styleNavigateAccountYet}>
            <Text style={styles.accountYet}>Hanadul 계정이 없으신가요?</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailLoginPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#000000',
  },
  LoginContainer: {
    justifyContent: 'center',
    height: 420,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  InputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },

  InputStyle: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingLeft: 10,
    paddingVertical: 10,
    marginBottom: 20,
    color: `${palette.white}`,
  },
  AutoLoginStyle: {
    fontSize: 17,
    marginLeft: 10,
    color: `${palette.white}`,
  },
  LoginButtonStyle: {
    width: '100%',
    height: 40,
    backgroundColor: `${palette.button_green}`,
    marginTop: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleNavigateAccountYet: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  accountYet: {
    color: '#ffffff',
    width: '100%',
    textDecorationLine: 'underline',
  },
});
