import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import SvgComponent from '../components/common/SvgComponent';
import {svgModule} from '../assets/svgModule';
import {palette} from '../styles/palette';
import {HomeScreenProps} from '../types/navigationTypes/navigationType';

const HomePage = ({navigation}: HomeScreenProps) => {
  const navigateToEmailLogin = useCallback(() => {
    navigation.navigate('EmailLogin');
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <SvgComponent xml={svgModule.hanadul} width="55%" height="100" />
          <Pressable
            onPress={navigateToEmailLogin}
            style={StyleSheet.compose(styles.button, styles.email)}>
            <Text style={[styles.buttonText, styles.fontWhite]}>
              Email Login
            </Text>
          </Pressable>

          <Pressable style={StyleSheet.compose(styles.button, styles.google)}>
            <Text style={styles.buttonText}>Google Login</Text>
          </Pressable>
          <Pressable style={StyleSheet.compose(styles.button, styles.kakao)}>
            <Text style={styles.buttonText}>Kakao Login</Text>
          </Pressable>
          <Pressable style={StyleSheet.compose(styles.button, styles.apple)}>
            <Text style={styles.buttonText}>Apple Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: '100%',
  },
  buttonContainer: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    height: 420,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 6,
    backgroundColor: 'green',
    height: 50,
    marginBottom: 20,
    marginTop: 0,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 18,
  },
  fontWhite: {
    color: `${palette.white}`,
  },
  email: {
    backgroundColor: `${palette.button_green}`,
    marginTop: 20,
  },
  google: {
    backgroundColor: `${palette.white}`,
  },
  kakao: {
    backgroundColor: `${palette.kakao_yellow}`,
  },
  apple: {
    backgroundColor: `${palette.button_red}`,
  },
});
