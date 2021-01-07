import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {api} from './api';
import {useQuery} from 'react-query';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const {isLoading, isError, data} = useQuery('test', async () => {
    const charges = await api.getCharges();
    return charges();
  });
  console.log(data);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}>Pigeon</Text>
        {/*<Text style={styles.body}>Count: {count}</Text>*/}
        {/*<Button title="+" onPress={() => dispatch(increment({quantity: 1}))} />*/}
        {/*<Button title="-" onPress={() => dispatch(decrement({quantity: 1}))} />*/}
        {isLoading && <ActivityIndicator />}
        {isError && <Text>ERROR</Text>}
        {data &&
          data.data.data.map((i) => <Text key={i.id}>{i.description}</Text>)}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  body: {
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});

export default App;
