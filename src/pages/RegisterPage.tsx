import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const RegisterPage = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.hello}>RegisterPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  hello: {},
});
