import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  EmailLogin: undefined;
  Register: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type EmailLoginScreenProps = NativeStackScreenProps<
  ParamListBase,
  'EmailLogin'
>;

export type RegisterScreenProps = NativeStackScreenProps<
  ParamListBase,
  'Register'
>;
