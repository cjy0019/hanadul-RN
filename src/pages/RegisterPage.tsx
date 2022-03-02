import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../styles/palette';

const RegisterPage = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.registerContainer}>
          <View style={styles.headContinaer}>
            <Text style={styles.headingStyle}>REGISTER</Text>
          </View>

          <View style={styles.InputWrapper}>
            <TextInput
              style={styles.InputStyle}
              placeholder="E-MAIL"
              placeholderTextColor={`${palette.white}`}
            />
            <TextInput
              style={styles.InputStyle}
              placeholder="PASSWORD"
              placeholderTextColor={`${palette.white}`}
            />
            <TextInput
              style={styles.InputStyle}
              placeholder="PASSWORD CONFIRM"
              placeholderTextColor={`${palette.white}`}
            />
          </View>

          <View style={styles.ButtonContainer}>
            <Pressable style={[styles.ButtonStyle, styles.greenButton]}>
              <Text style={styles.ButtonText}>CREATE ACCOUNT</Text>
            </Pressable>
            <Pressable style={[styles.ButtonStyle, styles.redButton]}>
              <Text style={styles.ButtonText}>BACK</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#000000',
  },
  registerContainer: {
    justifyContent: 'center',
    height: 420,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  headContinaer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headingStyle: {
    fontSize: 27,
    color: `${palette.white}`,
  },

  InputWrapper: {
    flex: 2,
    width: '100%',
  },
  InputStyle: {
    width: '100%',
    height: 45,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingLeft: 10,
    paddingVertical: 10,
    marginBottom: 20,
    color: `${palette.white}`,
  },
  ButtonContainer: {
    flex: 1,
    width: '100%',
  },
  ButtonStyle: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: `${palette.kakao_yellow}`,
    paddingVertical: 10,
    borderRadius: 3,
  },
  greenButton: {
    backgroundColor: `${palette.button_green}`,
  },
  redButton: {
    backgroundColor: `${palette.button_cancel}`,
    marginTop: 10,
  },
  ButtonText: {
    color: `${palette.white}`,
  },
});
